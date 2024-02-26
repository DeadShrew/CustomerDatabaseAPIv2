namespace CustomerDatabaseAPI.Server.Models
{
    public class PhoneContact
    {
        public int Id { get; set; }

        public string DayPhoneNumber { get; set; }

        public string NightPhoneNumber { get; set; }

        public bool NightContact { get; set; }

    }
}
