import { Link } from '@mui/material';
import classes from './Leftbar.module.scss';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from '@mui/icons-material/Feed';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import Modal from '../LeftBar/Modal';



const Leftbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  


  

    return (
        <>
        <div className={classes.left}>
          <div className={classes.sidebar} >
            <Link className={classes.menu_item}   >
              <span className={classes.icons}><NewspaperIcon></NewspaperIcon></span>
              <h3>News</h3>
            </Link>
            
              
            <Link className={classes.menu_item}  >
              <span className={classes.icons}><FeedIcon></FeedIcon></span>
              <h3>Feeds</h3>
            </Link>

            <Link className={classes.menu_item}>
              <span className={classes.icons}><GroupsIcon></GroupsIcon></span>
              <h3>Groups</h3>
              
            </Link>

            <Link className={classes.menu_item}>
              <span className={classes.icons}><StoreIcon></StoreIcon></span>
              <h3>Store</h3>
            </Link>

            <Link className={classes.menu_item}>
              <span className={classes.icons}><VideoLibraryIcon></VideoLibraryIcon></span>
              <h3>Videos</h3>
            </Link>
            <div className={classes.eventDropDownOptions}>
              <Link className={classes.menu_item} id="eventsDropdownButton" onClick={toggling}>
                <span className={classes.icons}><CalendarMonthIcon></CalendarMonthIcon></span>
                <h3>Events</h3>
              </Link>
              {isOpen && (
              <div className={classes.eventsDropDown}>

                <div className={classes.event}>
                  <div className={classes.leftEvent}>
                      <h3 className={classes.event_date}>18</h3>
                      <span>July</span>
                  </div>
                  <div className={classes.rightEvent}>
                      <h4>Stand-Up Show with Teo</h4>
                      <p><i className="fa-solid fa-location-dot"></i> Master's Club, Iasi</p>
                      <Link> More Info</Link>
                  </div>
              </div>
  
              <div className={classes.event}>
                  <div className={classes.leftEvent}>
                      <h3 className={classes.event_date}>22</h3>
                      <span>September</span>
                  </div>
                  <div className={classes.rightEvent}>
                      <h4>Charity Marathon</h4>
                      <p><i className="fa-solid fa-location-dot"></i> Palatul Culturii, Iasi</p>
                      <Link> More Info</Link>
                  </div>
              </div>
              </div> )}

            
            

            
            
          </div>
          
          
          
        </div>
        <button className={`${classes.btn} ${classes.btn_primary} ${classes.reportButton}`} onClick={() => {setOpenModal(true);}}>
            <span>Report</span></button>
          <div className={classes.modalWindow}>
          {openModal && <Modal closeModal={setOpenModal}></Modal>}
          </div>
        </div>
        </>
    );
};















export default Leftbar;