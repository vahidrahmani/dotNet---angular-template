using System.Collections.Generic;
using System.Collections.Concurrent;
namespace Models
{
    public class todoRepository : ItodoRepository
    {
        private static ConcurrentDictionary<string,todoItem> _todos = 
        new ConcurrentDictionary<string, todoItem>();
       
       public todoRepository(){
           Add(new Models.todoItem {Name = "item1"});
       } 
       
        public void Add(todoItem item)
        {
            item.Key = System.Guid.NewGuid().ToString();
            _todos[item.Key]=item;
        }

        public todoItem Find(string Key)
        {
            todoItem item;
            _todos.TryGetValue(Key,out item);
            return item;
        }

        public IEnumerable<todoItem> GetAll()
        {
            return _todos.Values;
        }

        public todoItem Remove(string Key)
        {
             todoItem item;
            _todos.TryRemove(Key,out item);
            return item;
        }

        public void update(todoItem item)
        {
           _todos[item.Key] = item;
        }
    }
}
