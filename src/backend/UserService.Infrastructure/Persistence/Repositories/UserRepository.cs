using Microsoft.EntityFrameworkCore;
using UserService.Domain.Entities;
using UserService.Domain.Repositories;

namespace UserService.Infrastructure.Persistence.Repositories;

public class UserRepository : IUserRepository  
{  
    private readonly UserDbContext _dbContext;  
    public UserRepository(UserDbContext dbContext)  
    {        _dbContext = dbContext;  
    }    public async Task<User?> GetUserByIdAsync(Guid id)  
    {        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id);  
        return user;  
    }  
    public async Task<User?> GetUserByUsernameAsync(string username)  
    {        var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == username);  
        return user;  
    }  
    public async Task UpdateUserAsync(User user, string? username, string? email)  
    {        if (username != null)  
        {            user.Username = username;  
        }        if (email != null)  
        {            user.Email = email;  
        }        await _dbContext.SaveChangesAsync();  
    }  
    public async Task CreateUserAsync(string username, string email)  
    {        var newUser = new User(Guid.NewGuid(), username, email);  
        await _dbContext.AddAsync(newUser);  
        await _dbContext.SaveChangesAsync();  
    }  
    public async Task<bool> IsUsernameUniqueAsync(string username)  
    {        return await _dbContext.Users.AnyAsync(u => u.Username == username);  
    }  
    public async Task<bool> IsEmailUniqueAsync(string email)  
    {        return await _dbContext.Users.AnyAsync(u => u.Email == email);  
    }}