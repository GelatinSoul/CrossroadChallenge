using Crossroad.DAL.Models;
using Crossroad.Repository.IRepository;
using Crossroad.Repository.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrossroadApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TitlesController : ControllerBase
    {
        private readonly ITitleRepository _TitleRepository;

        public TitlesController(ITitleRepository titleRepository)
        {
            _TitleRepository = titleRepository;
        }

        [HttpGet]
        public IActionResult GetDetails(string id)
        {
            return Ok(_TitleRepository.GetDetails(id));
        }

        [HttpGet]
        public IActionResult GetTitles(string name)
        {
            return Ok(_TitleRepository.Search(name));
        }
    }
}
