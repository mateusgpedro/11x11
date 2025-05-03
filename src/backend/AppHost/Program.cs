var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("postgres")
    .WithPgAdmin();

var usersDb = postgres.AddDatabase("users-db");
var matchesDb = postgres.AddDatabase("matches-db");

builder.AddProject<Projects.UserService_API>("user-service")
    .WithReference(usersDb);

builder.AddProject<Projects.MatchService_API>("match-service")
    .WithReference(matchesDb);

builder.Build().Run();