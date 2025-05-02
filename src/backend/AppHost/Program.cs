var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("postgres")
    .WithPgAdmin();

var userDb = postgres.AddDatabase("users-db");

builder.AddProject<Projects.UserService_API>("user-service")
    .WithReference(userDb);

builder.Build().Run();