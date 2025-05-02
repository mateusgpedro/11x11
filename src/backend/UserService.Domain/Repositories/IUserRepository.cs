using UserService.Domain.Entities;

namespace UserService.Domain.Repositories;

public interface IUserRepository
{
    Task<User?> GetUserByIdAsync(Guid id);
    Task<User?> GetUserByUsernameAsync(string username);
    Task UpdateUserAsync(User user, string? username, string? email);
    Task<User> CreateUserAsync(string username, string email);
}