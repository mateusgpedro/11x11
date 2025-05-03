using MatchService.Application.DTOs;
using MatchService.Domain.Entities;
using MatchService.Domain.Interfaces;

namespace MatchService.Application.Services;

public class MatchService
{
    public readonly IMatchRepository _matchRepository;

    public MatchService(IMatchRepository matchRepository)
    {
        _matchRepository = matchRepository;
    }

    public async Task<Match> CreateMatchServiceAsync(CreateMatchDto createMatchDto)
    {
        var newMatch = await _matchRepository.CreateMatchAsync(createMatchDto.Name, createMatchDto.Description, 
            createMatchDto.Location, createMatchDto.StartTime, createMatchDto.EndTime);
        
        return newMatch;
    }
}