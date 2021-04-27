using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Grade { get; set; }
        public string Email { get; set; }
        public string  Password { get; set; }

        public override string ToString()
        {
            return $"ID={ID}, Name={Name}, Grade={Grade}, Email={Email}, Password={Password}";
        }
    }
}