import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faBars
} from '@fortawesome/free-solid-svg-icons'
import Profile_Pic from '../assets/images/profile_pic1.jpg'
import CV from '../assets/files/cv.pdf'

const Header = () => {
	const openNav = () => {
		document.getElementById("mySidepanel").style.width = "100%";
	}
	const closeNav = () => {
		document.getElementById("mySidepanel").style.width = "0px";
	}
	return (
		<div className="port-header-container">
			<div id="mySidepanel" className="sidepanel">
				<div className="closebtn" onClick={closeNav}>×</div>
				<NavLink 
					activeClassName="active-link" 
					onClick={closeNav}
					to="portfolio"
				>
					Portfolio
				</NavLink>
				<NavLink 
					activeClassName="active-link" 
					onClick={closeNav}
					to="skills"
				>
					Skills
				</NavLink>
				<NavLink 
					activeClassName="active-link" 
					onClick={closeNav}
					to="contact-me"
				>
					Contact Me
				</NavLink>
				<a 
					href={CV} 
					target="_blank" 
					rel="noreferrer"
				>
					My CV
				</a>
			</div>
			<div className="header-box">
				<NavLink to="/">
					<div className="logo">
						<img src={Profile_Pic} alt="profile_pic"/>
					</div>
				</NavLink>
				<div className="hamburger-icon" onClick={openNav}>
					<FontAwesomeIcon className="icon" icon={faBars} />
				</div>
			</div>
		</div>
	)
}

export default Header;