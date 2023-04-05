using Microsoft.AspNetCore.Mvc;
using MissionAPI.Data;

namespace MissionAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(x  => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
            return x;
        }
    }
}
