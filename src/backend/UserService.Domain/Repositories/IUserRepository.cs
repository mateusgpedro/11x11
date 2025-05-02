using UserService.Domain.Entities;

namespace UserService.Domain.Repositories;

public interface IUserRepository
{
    Task<User?> GetUserByIdAsync(Guid id);
    Task<User?> GetUserByUsernameAsync(string username);
    Task UpdateUserAsync(User user, string? username, string? email);
    Task CreateUserAsync(string username, string email);
    Task<bool> IsUsernameUniqueAsync(string username);
    Task<bool> IsEmailUniqueAsync(string email);
}