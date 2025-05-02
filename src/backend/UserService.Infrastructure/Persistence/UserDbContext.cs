using Microsoft.EntityFrameworkCore;
using UserService.Domain.Entities;

namespace UserService.Infrastructure.Persistence
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) {}  
      
        public DbSet<User> Users { get; set; }  
        protected override void OnModelCreating(ModelBuilder builder)  
        {        
            builder.Entity<User>(u => {  
                u.HasKey(k => k.Id);  
            });
        }
    }
}

