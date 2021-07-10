import React from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Avatar from  "@material-ui/core/Avatar";

function Sidebar() {

   const user = useSelector(selectUser);
 
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
        <div className="sidebar_hash">#</div>
        <p> {topic} </p>
        </div>
       
    );

    return (
        <div className="sidebar">
           <div className="sidebar_top">
               <img src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1093&q=80" alt="" />
               <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>
           <div className="sidebar_stats">
           <div className="sidebar_stat">
               <p>Who viewed your profile</p>
               <p className="sidebar_statNumber">1,725</p>
               </div>
            <div className="sidebar_stat">
            <p>Views of your post</p>
               <p className="sidebar_statNumber">791</p>
               </div>
           </div>
         
         <div className="sidebar_bottom">
             <p>Recent</p>
             {recentItem('reactjs')}
             {recentItem('programming')}
             {recentItem('software')}
             {recentItem('UX/UI')}
             {recentItem('frontend')}
             </div> 


           </div>
      
    )
}

export default Sidebar;
