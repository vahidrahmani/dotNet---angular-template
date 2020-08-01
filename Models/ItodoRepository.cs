using System.Collections.Generic;

namespace Models
{
   public interface ItodoRepository
    {
         void Add(todoItem item);
        void update(todoItem item);

        todoItem Find(string Key);

        todoItem Remove(string Key);

        IEnumerable<todoItem> GetAll();

    }
}
