using MatchService.Domain.Entities;

namespace MatchService.Domain.Interfaces;

public interface IMatchRepository
{
    Task<Match> CreateMatchAsync(string name, string description, string  location, string startTime, string endTime);
    Task<Match> UpdateMatchAsync();
}