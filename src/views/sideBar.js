import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { 
	faGithub, 
	faFacebookF, 
	faInstagram, 
	faLinkedinIn ,
	faTwitter,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import Profile_Pic from '../assets/images/profile_pic1.jpg'
import CV from '../assets/files/cv.pdf'

const data = [
    {icon: faEnvelope, link:"mailto:hafizadeel493@gmail.com"},
    {icon: faWhatsapp, link:"https://api.whatsapp.com/send?phone=923204118493&text=Hello"},
    {icon: faGithub, link:"https://github.com/Adeel1069"},
    {icon: faFacebookF, link:"https://www.facebook.com/hafiz.adeel.1069"},
    {icon: faLinkedinIn, link:"https://www.linkedin.com/in/hafiz-adeel-841a5b16a"},
    {icon: faTwitter, link:"https://twitter.com/Adeel1069"},
    {icon: faInstagram, link:"https://www.instagram.com/hafiz_adeel.1069"}
]

const SideBar = () => {
    return (
        <div className="port-sidebar-container">
        	<div className="sidebar-inner">
        		<div className="profile">
        			<div className="profile-image">
        				<NavLink to="/">
        					<img src={Profile_Pic} alt="profile_img" />
        				</NavLink>
        			</div>
        			<div className="name">HAFIZ M. ADEEL</div>
        			<div className="designation">REACT-JS FRONT-END DEVELOPER</div>
        		</div>
        		<div className="links">
        			<NavLink to="portfolio" activeClassName="active-link">
	        			<div className="link-item">
	        				<div className="item">Portfolio</div>
	        				<FontAwesomeIcon className="icon" icon={faAngleRight} />
	        			</div>
        			</NavLink>
                    <NavLink to="skills" activeClassName="active-link">
                        <div className="link-item">
                            <div className="item">Skills</div>
                            <FontAwesomeIcon className="icon" icon={faAngleRight} />
                        </div>
                    </NavLink>
        			<NavLink to="contact-me" activeClassName="active-link">
	        			<div className="link-item">
	        				<div className="item">Contact Me</div>
	        				<FontAwesomeIcon className="icon" icon={faAngleRight} />
	        			</div>
        			</NavLink>
        			<a href={CV} target="_blank" rel="noreferrer">
	        			<div className="link-item cv">
	        				<div className="item">My CV</div>
	        				<FontAwesomeIcon className="icon" icon={faAngleRight} />
	        			</div>
        			</a>
        		</div>
        	</div>
            <div className="get-in-touch">
                <div className="title">GET IN TOUCH</div>
                <div className="social-icons">
                {
                    data.map((item,index) => (
                        <a key={"side-bar- " + index} href={item.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="icon" icon={item.icon} />
                        </a>
                    ))
                }
                </div>
            </div>
            {/*<div className="collapse-icon-toggle">
                <FontAwesomeIcon className="icon" icon={faAngleRight} />
            </div>*/}
        </div>
    );
};

export default SideBar;
