var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("postgres");
var postgresdb = postgres.AddDatabase("postgresdb");

var userService = builder.AddProject<Projects.UserService_API>("user-service")
    .WithReference(postgresdb);

builder.Build().Run();
