import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    console.log(useParams().username)
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {/*http://localhost:8800/users?username=${username}`*/
          const res = await axios.get(`http://localhost:8800/users`);
          setUser(res.data);
        };
        fetchUser();
      }, [username]);
 
  return (
    <>
    <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    {/* <img className="profileCoverImg" src={`${PF}person/2.jpg`} alt="" /> */}
                    <img className="profileCoverImg" src={user.coverPicture? PF+user.coverPicture : "/assets/person/like.png"} alt="" />
                    {/* <img className="profileUserImg" src={`${PF}person/1.jpg`} alt="" /> */}
                    <img className="profileUserImg" src={user.profilePicture ? PF+user.profilePicture : "/assets/person/heart.jpg"} alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                    </div>
                <div className="profileRightBottom">
                <Feed username={username}/>
                {/* <Rightbar profile/> */}
                </div>
            
            </div>
           
        </div>
        </>
  )
}
