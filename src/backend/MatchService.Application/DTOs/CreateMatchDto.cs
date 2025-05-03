namespace MatchService.Application.DTOs;

public record CreateMatchDto(string Name, string Description, string  Location, string StartTime, string EndTime);