using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using UserService.Application.DTOs;

namespace UserService.API.Controllers;

[ApiController]
[Route("(api/user)")]
public class UserController : ControllerBase
{
    private readonly Application.Services.UserService _userService;
    private readonly IValidator<CreateUserDto> _validator;

    public UserController(Application.Services.UserService userService, IValidator<CreateUserDto> validator)
    {
        _userService = userService;
        _validator = validator;
    }

    [HttpPost("register")]
    public async Task<IResult> RegisterUser([FromBody] CreateUserDto createUserDto)
    {
        var validationResult = await _validator.ValidateAsync(createUserDto);

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
        
        await _userService.CreateUserAsync(createUserDto);
        
        return Results.Created();
    }
}