namespace UserService.Domain.Entities;

public class User
{
    public User(Guid id, string username, string email, string auth0Id)
    {
        Id = id;
        Auth0Id = auth0Id;
        Username = username;
        Email = email;
    }
    
    public Guid Id { get; private set; }
    public string Auth0Id { get; private set; }
    public string Email { get; set; }
    public string Username { get; set; }
}