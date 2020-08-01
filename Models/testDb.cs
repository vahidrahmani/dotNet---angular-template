using System;

namespace Models
{


    public class TestDb
    {
        public int id{get;set;}
        public string user{get;set;}
        public string password{get;set;}

    }


     public class AuthenticateModel
    {
        [Required]
        public string user { get; set; }

        [Required]
        public string password { get; set; }

        private class RequiredAttribute : Attribute
        {
        }
    }


  
}
