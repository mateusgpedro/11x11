using MatchService.Domain.Entities;
using MatchService.Domain.Interfaces;

namespace MatchService.Infrastructure.Persistence.Repositories;

public class MatchRepository : IMatchRepository
{
    private MatchDbContext _dbContext;

    public MatchRepository(MatchDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Match?> GetMatchByIdAsync(Guid matchId)
    {
        var match = await _dbContext.Matches.FindAsync(matchId);
        return match;
    }

    public async Task<Match> CreateMatchAsync(string name, string description, string  location, string startTime, string endTime)
    {
        var newMatch = new Match(name, location, startTime, endTime, description);
        await _dbContext.Matches.AddAsync(newMatch);
        await _dbContext.SaveChangesAsync();

        return newMatch;
    }

    public Task<Match> UpdateMatchAsync()
    {
        throw new NotImplementedException();
    }
}
