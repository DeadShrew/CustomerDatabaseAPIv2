namespace CustomerDatabaseAPI.Server.Models
{
    public class Customer
    {

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PrimaryEmail { get; set; }

        public string SecondaryEmail { get; set; }

        public int PhoneContactID { get; set; }

        public int AddressID { get; set; }


    }
}