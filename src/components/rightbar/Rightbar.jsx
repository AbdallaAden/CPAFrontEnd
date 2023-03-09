import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
import { Class } from "@material-ui/icons"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    const getCourses = async ()=>{
      try{
        const courseList = await axios.get("/users/courses" + user._id);
        setCourses(courseList.data);
      }
      catch(err){
          console.log(err);
      }
    };
  //  getCourses();           ///////// commond here
  //},[user._id]);            ///////// commond here
  });
  


  const ProfileRightbar = () =>{
    return(
      <>

      <h4 className="rightbarTitle">SUB COURSES</h4>
      <div className="rightbarCourses">
        {courses.map((course) =>(
          <div className="rightbarCourse">
            <Class className="rightbarCourseImg"/>
            <span className="rightbarCourseName">{course.courseName}</span>
          </div>
        ))}

        {/* <div className="rightbarFollowing">
        <Class className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">MST300</span>
        </div>
        <div className="rightbarFollowing">
        <Class className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">OOP345</span>
        </div>
        <div className="rightbarFollowing">
        <Class className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">WEB522</span>
        </div>
        <div className="rightbarFollowing">
        <Class className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">WEB422</span>
        </div>
        <div className="rightbarFollowing">
        <Class className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">GAM531</span>
        </div>
        <div className="rightbarFollowing">
          <Class className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">BCI433</span>
        </div> */}
      </div>
      </>
    )
  }
  
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <ProfileRightbar />
        </div>
    </div>
  )
}
