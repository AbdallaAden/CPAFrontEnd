import "./post.css"
import { MoreVert } from "@material-ui/icons"
import {Users} from "../../dummyData"//
import { useEffect, useState } from "react"
import axios from "axios";
import {format} from "timeago.js"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
    const [like, setLike] = useState(post.like);//
    //const [like, setLike] = useState(post.likes.length);
    const [islike, setIsLike] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} = useContext(AuthContext);

    //  useEffect(() =>{
    //      setIsLike(post.likes.includes(currentUser._id))
    //  },[currentUser._id, post.likes]);
    
   useEffect(() =>{
     const fetchUser = async () => {
     const res = await axios.get(`users/${post.userId}`);
     setUser(res.data);
     } 
     fetchUser();
   }, [post.userId])

    const likeHandler = ()=>{
        try{
            // axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})      ///////// commond here
        }catch(err){}
        setLike(islike ? like - 1 : like + 1);
        setIsLike(!islike)
    }
  return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" /> */}
                        <img className="postProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/1.jpg"} alt="" />
                        <span className="postUsername">
                            {/* {Users.filter(u=>u.id===post.userId)[0].username} */}
                            {user.username}
                        </span>
                        {/* <span className="postDate">{post.date}</span> */}
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    {/* <img className="postImg" src={PF + post.photo} alt="" /> */}
                    <img className="postImg" src={PF + post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}person/like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${PF}person/heart.jpg`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} person like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
