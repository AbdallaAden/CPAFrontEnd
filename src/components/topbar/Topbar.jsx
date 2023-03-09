import "./topbar.css"
import { Search } from "@material-ui/icons"
import { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import { Person, Chat, Notifications } from "@material-ui/icons"
// <img src={user.profilePicture ? PF+user.profilePicture : PF + "person/noAvatar.png"} ...
//<Link to={`/profile/${user.username}`}>
//<img src={user.profilePicture ? PF+user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
//</Link>
export default function Topbar(){
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const authCtx = useContext(AuthContext);
    
    if(user.profilePicture){
        console.log(user.profilePicture)
    }
    else{
        console.log("no profile pic found for "+ user)
    }
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">CPA Scripted web APP</span>
                </Link>
                
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for anything" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLines">
                    <span className="topbarLink" onClick={authCtx.logout}>logout</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                
                    {/* <img src="/assets/person/2.jpg" alt="" className="topbarImg" /> */}
                    <Link to={`8800/users/${user.username}`}>
                    <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : "/assets/person/heart.jpg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
                
            </div>
        </div>
    )
}