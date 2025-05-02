var builder = DistributedApplication.CreateBuilder(args);

var postgres = builder.AddPostgres("postgres")
    .WithPgAdmin();;

var postgresdb = postgres.AddDatabase("postgresdb");

builder.AddProject<Projects.UserService_API>("user-service")
    .WithReference(postgresdb);

builder.Build().Run();
