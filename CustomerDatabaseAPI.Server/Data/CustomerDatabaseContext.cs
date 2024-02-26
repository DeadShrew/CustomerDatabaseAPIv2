using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CustomerDatabaseAPI.Server.Models;

namespace CustomerDatabaseAPI.Server.Data
{
    public class CustomerDatabaseContext : DbContext
    {
        public CustomerDatabaseContext (DbContextOptions<CustomerDatabaseContext> options)
            : base(options)
        {
        }

        public DbSet<CustomerDatabaseAPI.Server.Models.Customer> Customer { get; set; } = default!;
    }
}
