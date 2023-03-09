import { useEffect, useState,useContext } from "react";
import axios from "axios";
import "./CoursePage.css";
import { AuthContext } from "../../context/AuthContext";


export default function CoursePage() {
  const {user} = useContext(AuthContext);
  const [semesterOneCourses, setSemesterOneCourses] = useState([]);
  const [semesterTwoCourses, setSemesterTwoCourses] = useState([]);
  const [semesterThreeCourses, setSemesterThreeCourses] = useState([]);
  const [semesterFourCourses, setSemesterFourCourses] = useState([]);
  const [semesterFiveCourses, setSemesterFiveCourses] = useState([]);
  const [semesterSixCourses, setSemesterSixCourses] = useState([]);
  const [semesterSevenCourses, setSemesterSevenCourses] = useState([]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get("/courses");
      //console.log(res);
      const courses = Object.keys(res.data).map(function (key) {
        return res.data[key];
      });
      //console.log(courses[1][1].semesterId)

      // Filter courses by semesterId

      //const semesterOne = (courses[1]).filter(course => { return course.semesterId === 1});
      const semesterOne = Object.values(courses[1]).filter(
        (course) => course.semesterId === 1
      );
      const semesterTwo = Object.values(courses[1]).filter(
        (course) => course.semesterId === 2
      );
      const semesterThree = Object.values(courses[1]).filter(
        (course) => course.semesterId === 3
      );
      const semesterFour = Object.values(courses[1]).filter(
        (course) => course.semesterId === 4
      );
      const semesterFive = Object.values(courses[1]).filter(
        (course) => course.semesterId === 5
      );
      const semesterSix = Object.values(courses[1]).filter(
        (course) => course.semesterId === 6
      );
      const semesterSeven = Object.values(courses[1]).filter(
        (course) => course.semesterId === 7
      );

      setSemesterOneCourses(semesterOne);
      setSemesterTwoCourses(semesterTwo);
      setSemesterThreeCourses(semesterThree);
      setSemesterFourCourses(semesterFour);
      setSemesterFiveCourses(semesterFive);
      setSemesterSixCourses(semesterSix);
      setSemesterSevenCourses(semesterSeven);
    };

    fetchCourses();
  }, []);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/users/courses?token=${user}`, {     
        });
        const userCourses = response.data;
        console.log(userCourses);
        //setSelectedCourses(user.courses); // set the user's courses in the state
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [user]);

  const handleCheckboxChange = (event) => {
    const courseId = event.target.value;

    if (event.target.checked) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    }
  };

  const handleSubscribeClick = async () => {
    // Make API call to add selected courses to user
    try {      
      const res = await axios.post("http://localhost:8800/users/subscribe", {
        courseIds: selectedCourses,
        user:user,
      });
      console.log(res.data);
      setSelectedCourses([]);
      alert("Courses subscribed successfully!");
    } catch (err) {
      console.log(err);
      alert("An error occurred while subscribing to courses.");
    }
  };
  //console.log(semesterOneCourses + ' Semester one courses')
  return (
    
      <>
        <div className="semester-container">
          <div className="semester">
          <span className="Title">Semester 1</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterOneCourses.length &&
                    semesterOneCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterOneCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterOneCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                
                <p className="SelectAll">Select all</p>
                
              </label>
            </div>
            {semesterOneCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                    <div className="course-name">{course.code}</div>
                    <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select{/*console.log(user,selectedCourses,course._id )*/} 
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="semester">
          <span className="Title"> Semester 2</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterTwoCourses.length &&
                    semesterTwoCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterTwoCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterTwoCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                <p className="SelectAll">Select all</p>
              </label>
            </div>
            {semesterTwoCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                  <div className="course-name">{course.code}</div>
                  <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="semester">
          <span className="Title"> Semester 3</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterThreeCourses.length &&
                    semesterThreeCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterThreeCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterThreeCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                <p className="SelectAll">Select all</p>
              </label>
            </div>
            {semesterThreeCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                  <div className="course-name">{course.code}</div>
                    <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="semester">
          <span className="Title"> Semester Four Courses</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterFourCourses.length &&
                    semesterFourCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterFourCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterFourCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                <p className="SelectAll">Select all</p>
              </label>
            </div>
            {semesterFourCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                  <div className="course-name">{course.code}</div>
                    <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="semester">
          <span className="Title"> Semester Five Courses</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterFiveCourses.length &&
                    semesterFiveCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterFiveCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterFiveCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                <p className="SelectAll">Select all</p>
              </label>
            </div>

            {semesterFiveCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                  <div className="course-name">{course.code}</div>
                    <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="semester">
          <span className="Title"> Semester Six Courses</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterSixCourses.length &&
                    semesterSixCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterSixCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterSixCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                <p className="SelectAll">Select all</p>
              </label>
            </div>
            {semesterSixCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                  <div className="course-name">{course.code}</div>
                    <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="semester">
          <span className="Title"> Pro Options</span>
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  checked={
                    selectedCourses.length === semesterSevenCourses.length &&
                    semesterSevenCourses.length !== 0
                  }
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedCourses([
                        ...selectedCourses,
                        ...semesterSevenCourses.map((c) => c._id),
                      ]);
                    } else {
                      setSelectedCourses(
                        selectedCourses.filter(
                          (id) =>
                            !semesterSevenCourses.map((c) => c._id).includes(id)
                        )
                      );
                    }
                  }}
                />
                <p className="SelectAll">Select all</p>
              </label>
            </div>
            {semesterSevenCourses.map((course) => (
              <div key={course.code} className="course-container">
                <div className="course">
                  <div className="course-info">
                  <div className="course-name">{course.code}</div>
                    <div className="course-code">{course.name}</div>
                  </div>
                  <label className="course-select">
                    <input
                      type="checkbox"
                      value={course._id}
                      checked={selectedCourses.includes(course._id)}
                      onChange={handleCheckboxChange}
                    />
                    Select
                  </label>
                </div>
              </div>
            ))}
          </div>


          <button className="sub-button" onClick={handleSubscribeClick}>
            Subscribe to selected courses
          </button>
        </div>
      </>    
  );
}
