using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models;
using New_folder.Data;

namespace New_folder.UserList{

    public class userServise : IUserServise
    {
        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        private List<TestDb> _users = new List<TestDb>
        {
            new TestDb { id = 1, user = "Test", password = "test" }
        };

        public Task<TestDb> Authenticate(string username, string password)
        {
           var user =  Task.Run(() => _users.SingleOrDefault(x => x.user == username && x.password == password));

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so return user details without password
            return user;//.WithoutPassword();
        }

         public async Task<IEnumerable<TestDb>> GetAll()
        {
            return await Task.Run(() => _users);
        }
    }
}