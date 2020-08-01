using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace New_folder.UserList {

    public interface IUserServise
    {
        Task<TestDb> Authenticate(string username, string password);
        Task<IEnumerable<TestDb>> GetAll();
    }
}