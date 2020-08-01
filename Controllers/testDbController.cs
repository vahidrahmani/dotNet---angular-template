using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Models;
using New_folder.Data;
using Microsoft.AspNetCore.Authorization;

namespace New_folder.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
    public class TestdbController : ControllerBase
    {

     private readonly DataContext _context;

       public TestdbController(DataContext context){
           _context = context;
       }
    [Authorize]
     [HttpGet("GetAll")]
       public IActionResult GetAll(){

          return  Ok(_context.test1);
           
       }

[HttpPost("setDb")]
       public IActionResult setDb(TestDb model){
           _context.test1.Add(model);
           _context.SaveChanges();
           return Ok();
       }

    }
}
