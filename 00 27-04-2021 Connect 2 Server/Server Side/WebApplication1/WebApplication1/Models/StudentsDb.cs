using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public static class StudentsDb
    {
        public static Student LoginStudent(string email, string pass)
        {
            List<Student> ls = ExcQ(
                $" SELECT * " +
                $" FROM TBStudents " +
                $" WHERE Email='{email}' and Password='{pass}'");
            if (ls.Count == 1)
            {
                return ls[0];
            }
            else
            {
                return null;
            }            
        }

        public static List<Student> GetAllStudents()
        {
            return ExcQ("SELECT * FROM TBStudents");
        }

        public static Student GetStudentByID(int id)
        {
            return ExcQ("SELECT * FROM TBStudents WHERE id=" + id)[0];
        }

        private static List<Student> ExcQ(string query)
        {
            string conStr = ConfigurationManager.ConnectionStrings["localDB"].ConnectionString;
            SqlConnection con = new SqlConnection(conStr);

            SqlDataAdapter adptr = new SqlDataAdapter(query, con);
            DataSet ds = new DataSet();
            adptr.Fill(ds);

            //opt1
            List<Student> ls = ds.Tables[0].AsEnumerable()
                .Select(stu => new Student()
                {
                    ID = stu.Field<int>("ID"),
                    Name = stu.Field<string>("Name"),
                    Grade = stu.Field<int>("Grade"),
                    Email = stu.Field<string>("Email"),
                    Password= stu.Field<string>("Password")
                }).ToList();

            //opt2
            List<Student> ls2 = new List<Student>();
            foreach (DataRow row in ds.Tables[0].Rows)
            {
                ls2.Add(new Student()
                {
                    ID = (int)row["ID"],
                    Name = (string)row["Name"],
                    Grade = (int)row["Grade"]
                });
            }

            return ls;
        }
    }
}