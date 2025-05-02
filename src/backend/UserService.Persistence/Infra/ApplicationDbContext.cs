using Microsoft.EntityFrameworkCore;
using UserService.Domain.Entities;

namespace UserService.Persistence.Infra;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

    public DbSet<User> Users { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        
    }
}