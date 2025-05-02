using FluentValidation;
using UserService.Application.DTOs;
using UserService.Domain.Repositories;

namespace UserService.Application.Validators;

internal sealed class CreateUserDtoValidator : AbstractValidator<CreateUserDto>
{
    public CreateUserDtoValidator(IUserRepository userRepository)
    {
        RuleFor(user => user.Email)
            .NotEmpty().WithMessage("Email is required.")
            .EmailAddress().WithMessage("Email format invalid")
            .MustAsync(async (email, cancellation) =>
                !await userRepository.IsEmailUniqueAsync(email))
            .WithMessage("Email already exists.")
            .WithErrorCode("EmailAlreadyExists");
        
        RuleFor(user => user.Username)
            .MaximumLength(32).WithMessage("Username length should be between 4 and 32 characters")
            .MinimumLength(4).WithMessage("Username length should be between 4 and 32 characters")
            .MustAsync(async (username, cancellation) => 
                !await userRepository.IsUsernameUniqueAsync(username))
            .WithMessage("Username already exists.")
            .WithErrorCode("UsernameAlreadyExists");
    }
}