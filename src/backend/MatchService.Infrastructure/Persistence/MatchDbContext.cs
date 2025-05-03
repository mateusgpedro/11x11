using MatchService.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MatchService.Infrastructure.Persistence;

public class MatchDbContext : DbContext
{
    public MatchDbContext(DbContextOptions<MatchDbContext> options) : base(options) {}
    
    public DbSet<Match> Matches { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Match>(m =>
        {
            m.HasKey(k => k.Id);
        });
    }
}