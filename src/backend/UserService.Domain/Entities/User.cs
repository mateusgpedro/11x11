namespace UserService.Domain.Entities;

public class User
{
    public User(Guid id, string username, string email, string password)
    {
        Id = id;
        Username = username;
        Email = email;
        Password = password;
    }
    
    public Guid Id { get; private set; }
    public string Email { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
}