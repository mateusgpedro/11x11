using MatchService.Application.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace MatchService.API.Controllers;

[ApiController]
[Route("api/match")]
public class MatchController : ControllerBase
{
    private Application.Services.MatchService _matchService;

    public MatchController(Application.Services.MatchService matchService)
    {
        _matchService = matchService;
    }

    [HttpPost("create")]
    public async Task<IResult> CreateNewMatch(CreateMatchDto dto)
    {
        var match = await _matchService.CreateMatchServiceAsync(dto);
        
        return Results.Accepted(null, match);
    }

    /*[HttpGet("[id]")]
    public async Task<IActionResult> GetMatch(int id)
    {
        
    }*/
}