using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Models;
namespace New_folder.Controllers
{
     [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {

        private readonly ItodoRepository _todoItems;  

       public TodoController(ItodoRepository repostItem){
            _todoItems = repostItem;
       }

       
       [HttpGet]
       public IEnumerable<todoItem> GetAll(){
           return _todoItems.GetAll();
       }

       [HttpGet("{id}", Name="id")]
     public IActionResult GetById (string id ){
        var item = _todoItems.Find(id);
        if(item==null){
            return NotFound();
        }
            return new ObjectResult(item);
        
     }

     [HttpPost]
     public IActionResult create([FromBody] todoItem item){
         if(item==null){
             return BadRequest();
         }else{
             _todoItems.Add(item);
             return Ok(item);
         }
     }

     [HttpPost("update")]
public IActionResult update([FromBody] todoItem item){
    if(item == null){
        return BadRequest();
    }
    _todoItems.update(item);
    return Ok();
}


    }
}
