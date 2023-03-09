import "./sidebar.css"
import {
    RssFeed,
    Chat,
    AccountBox,
    Group,
    Build,
  } from "@material-ui/icons";

import { Users } from "../../dummyData"

import Online from "../online/Online"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <RssFeed className="sidebarIcon"/>
                                <span className="sidebarListItemText">Tool</span>
                            
                        </li>
                        <li className="sidebarListItem">
                            <AccountBox className="sidebarIcon"/>
                                <span className="sidebarListItemText">AccountProfile</span>
                            
                        </li>
                        <li className="sidebarListItem">
                            <Chat className="sidebarIcon"/>
                                <span className="sidebarListItemText">Chat</span>
                            
                        </li>
                        <li className="sidebarListItem">
                            <Build className="sidebarIcon"/>
                                <span className="sidebarListItemText">Build</span>
                            
                        </li>
                        
                    </ul>

                    <button className="sidebarButton">
                        more side bar list
                    </button>
                    <hr className="sidebarHr"/>
                    <h4 className="sidebarTitle">ONLINE FRIENDS</h4>
                    <ul className="sidebarFriendList">
                        {Users.map((u)=>(
                            <Online key={u.id} user={u} />
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}