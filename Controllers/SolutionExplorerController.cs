using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CrmSolutionExplorer.Models;

namespace CrmSolutionExplorer.Controllers
{
    [Route("api/[controller]")]
    public class SolutionExplorerController : ControllerBase
    {
        [HttpGet("t1")]
        public IEnumerable<Solution> ListeSolution() {
            return new Solution[] {
                new Solution() {Id = 1, Nom = "Toto"}
            };
        }
        [HttpGet("t2")]
        public IEnumerable<Solution> ListeSolution2() {
            return new Solution[] {
                new Solution() {Id = 2, Nom = "Toto2"}
            };
        }
    }
}