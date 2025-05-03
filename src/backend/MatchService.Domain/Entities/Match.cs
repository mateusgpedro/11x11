namespace MatchService.Domain.Entities;

public class Match
{
    public Match(string title, string location, string startTime, string endTime, string description)
    {
        Title = title;
        Location = location;
        StartTime = startTime;
        EndTime = endTime;
        Description = description;
    }
    
    public Guid Id { get; private set; } =  Guid.NewGuid();
    public string Title { get; set; }
    public string Location { get; set; }
    public string StartTime { get; set; }
    public string EndTime { get; set; }
    public string Description { get; set; }
}