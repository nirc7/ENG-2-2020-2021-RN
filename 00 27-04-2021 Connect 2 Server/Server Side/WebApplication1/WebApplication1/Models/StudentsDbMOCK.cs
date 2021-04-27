using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class StudentsDbMOCK
    {
        public static int Counter=5;

        public static List<Student> students = new List<Student>
        {
            new Student(){ID=1, Name="avi", Grade=100 },
            new Student(){ID=2, Name="ben", Grade=97 },
            new Student(){ID=3, Name="charlie", Grade=98 },
            new Student(){ID=4, Name="dora", Grade=99 },
        };
    }
}