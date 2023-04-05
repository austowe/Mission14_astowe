﻿using Microsoft.EntityFrameworkCore;

namespace MissionAPI.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options)
        {
        
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
