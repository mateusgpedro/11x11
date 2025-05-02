using FluentValidation;
using Microsoft.AspNetCore.Http;
using UserService.Application.DTOs;
using UserService.Domain.Repositories;

namespace UserService.Application.Services;

public class UserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task CreateUserAsync(CreateUserDto dto)
    {
        await _userRepository.CreateUserAsync(dto.Username, dto.Email);
    }
}