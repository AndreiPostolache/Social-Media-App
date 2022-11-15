
import ProfilePic from '../Content/profile-photo.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import classes from '../TopBar/Topbar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';






const Topbar = (props) => {




  const [isLogged, setIsLogged] = useState('Log Out');

 



  const toggleLogIn = (e) => {
    if (e.target.id === 'Log In') {
      
      setIsLogged('Log In');
    } else {
      setIsLogged('Log Out');
    };
  }


  const [isOpen, setIsOpen] = useState(false);
  const [showNotificationCount, setShowNotificationCount] = useState(true);
  const togglingMenu = () => { 
    if(showNotificationCount) 
      setShowNotificationCount(false)

    setIsOpen(!isOpen);
  }

  const [isRed, setIsRed] = useState(true);
  const toggleAlert = () => setIsRed(!isRed);
  


  return (

   
    <nav>
      <div className={classes.container}>
        <h2 className={classes.logo}>andSocial</h2>
        <div className={classes.search_bar}>
          <SearchIcon className={classes.search_icon}></SearchIcon>
          <input
            type="search"
            placeholder="Search for creators, inspirations and projects"
          />
        </div>
        <div className={classes.navbar_icons} >
        <PersonIcon ></PersonIcon>
        <MessageIcon></MessageIcon>
        
        <div className={classes.notificationOptions} >
        <NotificationsIcon onClick={() => { togglingMenu(); toggleAlert();}}></NotificationsIcon> 
        {showNotificationCount && (
    <span><small className={classes.notification_count}>9+</small></span> )}
        {isOpen && (
        <div className={classes.notifications_popup} >
              <div>
                <div>
                 
                  <img src={ProfilePic} alt="Profilepic" className={classes.profile_photo}/>
                </div>
                <div className={classes.notification_body}>
                  <b>Keke Benjamin</b> accepted your friend request
                  <small className={classes.text_muted}> 2 DAYS AGO</small>
                </div>
              </div>
              <div>
                <div >
                  <img src={ProfilePic} alt="Profilepic" className={classes.profile_photo}/>
                </div>
                <div className={classes.notification_body}>
                  <b>Andreea Dumitrascu</b> accepted your friend request
                  <small className={classes.text_muted}> 2 DAYS AGO</small>
                </div>
              </div>

              <div>
                <div >
                  <img src={ProfilePic} alt="Profilepic"className={classes.profile_photo}/>
                </div>
                <div className={classes.notification_body}>
                  <b>Iulian Ciubotariu</b> liked your post
                  <small className={classes.text_muted}> 3 DAYS AGO</small>
                </div>
              </div>

              <div>
                <div>
                  <img src={ProfilePic} alt="Profilepic" className={classes.profile_photo}/>
                </div>
                <div className={classes.notification_body}>
                  <b>Andrei Andriesei</b> liked your post
                  <small className={classes.text_muted}> 4 DAYS AGO</small>
                </div>
              </div>

              <div>
                <div >
                  <img src={ProfilePic} alt="Profilepic" className={classes.profile_photo}/>
                </div>
                <div className={classes.notification_body}>
                  <b>Iulian Ciubotariu</b> liked your post
                  <small className={classes.text_muted}> 6 DAYS AGO</small>
                </div>
              </div>

              <div>
                <div>
                  <img src={ProfilePic} alt='Story3' className={classes.profile_photo}/>
                </div>
                <div className={classes.notification_body}>
                  <b>Iulian Ciubotariu</b> liked your post
                  <small className={classes.text_muted}> 7 DAYS AGO</small>
                </div>
              </div>
            </div>)}
        </div>
        
        
        
        
        </div>
        
        
            
          
          
            
          
            
        


        

        <div className={classes.create} id="topFunctions">
          <button htmlFor="create-post" className={`${classes.btn} ${classes.btn_primary} ${classes.createButton}`}>Create</button>
          <Link to="/auth">
          <button className={`${isLogged ? `${classes.btn} ${classes.btn_primary}` : null}`} onClick={toggleLogIn}>{isLogged}</button>
          </Link>
        
          <div  id="profilePhotoOptions">
            <div  id="profilePhotoButton">
              <img src={ProfilePic} className={classes.profile_photo} alt='Story3'/>
            </div>
          
            
          </div>

           

          <div className={classes.darkmode_switcher} >
            <div className={classes.navbar_icons}>
            <LightModeIcon></LightModeIcon>
            </div>
            
            <label className={classes.switch} onChange={props.toggleTheDarkMode} >
              <input type="checkbox"  />
              <span className={classes.slider}></span>
            </label>
            <div className={classes.navbar_icons}>
            <DarkModeIcon></DarkModeIcon>
            </div>
           
          </div>
         
            
            
            
          
        </div>
      </div>
    </nav>

  );
};







export default Topbar;
   