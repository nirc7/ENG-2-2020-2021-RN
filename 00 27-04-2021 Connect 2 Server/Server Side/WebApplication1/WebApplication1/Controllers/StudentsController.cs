using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        //api/students
        public IEnumerable<Student> Get()
        {
            return StudentsDbMOCK.students;
        }

        //api/students/2
        public Student Get(int id)
        {
            //StudentsDbMOCK.students.Where(stu=> stu.Name.Contains("avi")); //return a list
            return StudentsDbMOCK.students.SingleOrDefault(stu => stu.ID == id); //return the first
        }

        public int Post([FromBody] Student value)
        {
            value.ID = StudentsDbMOCK.Counter++;
            StudentsDbMOCK.students.Add(value);
            return value.ID;
        }

        public string Put(int id, [FromBody] Student value)
        {
            Student s2Update = StudentsDbMOCK.students.SingleOrDefault(stu => stu.ID == id);
            s2Update.Name = value.Name;
            s2Update.Grade = value.Grade;
            return "done:)";
        }

        public IHttpActionResult Delete(int id)
        {
            Student s2Delete = StudentsDbMOCK.students.SingleOrDefault(stu => stu.ID == id);
            StudentsDbMOCK.students.Remove(s2Delete);
            var v = new {Result = "deleted successfully):" };
            var j = Json(v);
            return j;
        }
    }
}
