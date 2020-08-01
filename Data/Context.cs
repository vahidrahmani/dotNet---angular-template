using Microsoft.EntityFrameworkCore;
using Models;
namespace New_folder.Data
{
    public class DataContext : DbContext
    {
        public DbSet<TestDb> test1 { get; set; }

        public DataContext(DbContextOptions<DataContext> options) 
            : base(options) { }
    }
}