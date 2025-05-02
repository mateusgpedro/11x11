namespace UserService.Domain.Entities;

public class User
{
    public User(Guid id, string username, string email)
    {
        Id = id;
        Username = username;
        Email = email;
    }
    
    public Guid Id { get; private set; }
    public string Email { get; set; }
    public string Username { get; set; }
}