using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UserService.Application.DTOs;
using UserService.Application.Services;

namespace UserService.API.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    private readonly Application.Services.UserService _userService;  
    private readonly IValidator<CreateUserDto> _createUserValidator;
    private readonly IValidator<LoginUserDto> _loginUserValidator;
    private readonly JwtService _jwtService;
  
    public UserController(Application.Services.UserService userService, IValidator<CreateUserDto> createUserValidator, IConfiguration config, IValidator<LoginUserDto> loginUserValidator)  
    {        
        _userService = userService;  
        _createUserValidator = createUserValidator;
        _loginUserValidator = loginUserValidator;
        _jwtService = new JwtService(
            config["Jwt:Key"],
            config["Jwt:Issuer"]
        );
    }  
    
    [HttpPost("register")]
    public async Task<IResult> RegisterUser([FromBody] CreateUserDto createUserDto)  
    {        
        var validationResult = await _createUserValidator.ValidateAsync(createUserDto);  
  
        if (!validationResult.IsValid)  
        {            
            var problemDetails = new HttpValidationProblemDetails(validationResult.ToDictionary())  
            {                
                Status = StatusCodes.Status400BadRequest,  
                Title = "Failed to validate input to register a new user",  
                Detail = "One or more errors occurred",  
                Instance = "/api/register"  
            };
  
            return Results.Problem(problemDetails);  
        }
        var newUser = await _userService.CreateUserAsync(createUserDto);

        var token = _jwtService.GenerateToken(newUser.Id.ToString(), newUser.Username, 360);
        return Results.Ok(new TokenDto(token, "Bearer"));
    }

    [HttpPost("login")]
    public async Task<IResult> LoginUser([FromBody] LoginUserDto loginUserDto)
    {
        var validationResult = await _loginUserValidator.ValidateAsync(loginUserDto);

        if (!validationResult.IsValid)
        {
            var problemDetails = new HttpValidationProblemDetails(validationResult.ToDictionary())
            {
                Status = StatusCodes.Status400BadRequest,  
                Title = "Failed to validate input to login a new user",  
                Detail = "One or more errors occurred",  
                Instance = "/api/login"  
            };
            return Results.Problem(problemDetails);
        }

        var user = await _userService.LoginUserAsync(loginUserDto);
        if (user == null)
        {
            return Results.BadRequest("Invalid password");
        }

        var token = _jwtService.GenerateToken(user.Id.ToString(), user.Username, 360);
        return Results.Ok(new TokenDto(token, "Bearer"));
    }
}