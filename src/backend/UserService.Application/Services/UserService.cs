using FluentValidation;
using Microsoft.AspNetCore.Http;
using UserService.Application.DTOs;
using UserService.Domain.Entities;
using UserService.Domain.Repositories;

namespace UserService.Application.Services;

public class UserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<User> CreateUserAsync(CreateUserDto dto)
    {
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        
        var newUser = await _userRepository.CreateUserAsync(dto.Username, dto.Email, hashedPassword);

        return newUser;
    }

    public async Task<User?> LoginUserAsync(LoginUserDto dto)
    {
        var user = await _userRepository.GetUserByUsernameAsync(dto.Username);

        if (user is null)
        {
            return null;
        }

        bool isValid = BCrypt.Net.BCrypt.Verify(dto.Password, user.Password);
        return isValid ? user : null;
    }
}
