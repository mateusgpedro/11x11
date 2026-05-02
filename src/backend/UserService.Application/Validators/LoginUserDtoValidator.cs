using FluentValidation;
using UserService.Application.DTOs;

namespace UserService.Application.Validators;

public sealed class LoginUserDtoValidator : AbstractValidator<LoginUserDto>
{
    public LoginUserDtoValidator()
    {
        RuleFor(user => user.Username)
            .NotEmpty().WithMessage("Username is required.");

        RuleFor(user => user.Password)
            .NotEmpty().WithMessage("Password is required.");
    }
}
