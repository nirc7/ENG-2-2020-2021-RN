using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsRWController : ApiController
    {
        //api/studentsRW
        public IHttpActionResult Get() 
        {
            try
            {
                //throw new Exception("you shold respoect your teacher!!!");
                return Ok(StudentsDbMOCK.students);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content( HttpStatusCode.InternalServerError ,ex);
            }
        }

        //api/studentsRW/2
        public IHttpActionResult Get(int id)
        {
            try
            {
                Student s = StudentsDbMOCK.students.SingleOrDefault(stu=>stu.ID==id);
                if (s==null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found:(");
                }
                return Ok(s);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        //api/studentsRW/2
        [Route("api/studentsRW/{id}/grade")]
        public IHttpActionResult GetGradeById(int id)
        {
            try
            {
                Student s = StudentsDbMOCK.students.SingleOrDefault(stu => stu.ID == id);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found for grade:(");
                }
                return Ok(s.Grade);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value2Insert)
        {
            try
            {
                value2Insert.ID = StudentsDbMOCK.Counter++;
                StudentsDbMOCK.students.Add(value2Insert);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value2Insert.ID) ,value2Insert);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError, ex);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value2Update)
        {
            try
            {
                Student s2Update = StudentsDbMOCK.students.SingleOrDefault(stu=>stu.ID == id);
                if (s2Update != null)
                {
                    s2Update.Name = value2Update.Name;
                    s2Update.Grade = value2Update.Grade;
                    //return Content(HttpStatusCode.OK,s2Update);
                    return Ok(s2Update);
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found for update!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student s2Update = StudentsDbMOCK.students.SingleOrDefault(stu => stu.ID == id);
                if (s2Update != null)
                {
                    StudentsDbMOCK.students.Remove(s2Update);
                    return Ok();
                }
                else
                {
                    return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found for delete!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
