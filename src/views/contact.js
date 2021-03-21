import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { 
    faGithub, 
    faFacebookF, 
    faInstagram, 
    faLinkedinIn ,
    faTwitter,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

const data = [
    {label: "E-Mail", icon: faEnvelope, link:"mailto:hafizadeel493@gmail.com", linkTitle: 'hafizadeel493@gmail.com'},
    {label: "Whatsapp", icon: faWhatsapp, link:"https://api.whatsapp.com/send?phone=923204118493&text=Hello", linkTitle: '+92 320 4118493'},
    {label: "Github", icon: faGithub, link:"https://github.com/Adeel1069", linkTitle: 'Adeel1069'},
    {label: "Facebook", icon: faFacebookF, link:"https://www.facebook.com/hafiz.adeel.1069", linkTitle: 'hafiz.adeel.1069'},
    {label: "LinkedIn", icon: faLinkedinIn, link:"https://www.linkedin.com/in/hafiz-adeel-841a5b16a", linkTitle: 'hafiz-adeel-841a5b16a'},
    {label: "Twitter", icon: faTwitter, link:"https://twitter.com/Adeel1069", linkTitle: 'Adeel1069'},
    {label: "Instagram", icon: faInstagram, link:"https://www.instagram.com/hafiz_adeel.1069", linkTitle: 'hafiz_adeel.1069'},
]
const Contact = () => {
    return (
        <div className="port-contact-container">
        	<Container>
        		<div className="page-info">
                    <div className="page-title">CONTACT ME</div>
                    <div className="page-desc">
                        I am available for hire and open to any ideas of cooperation.
                    </div>
                </div>
                <Row className="social-contacts-row">
                    <Col lg="6" className="contacts-box">
                        {
                            data.map((item,index)=> (
                                <Row className="contact-item" key={"links-" + index}>
                                    <Col md="4" className="label ">{item.label}:</Col>
                                    <Col md="8" className="">
                                        <a href={item.link} target="_blank" rel="noreferrer">
                                            <div className="links-icon">
                                                <FontAwesomeIcon className="icon" icon={item.icon} />
                                                <div className="link">{item.linkTitle}</div>
                                            </div>
                                        </a>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Col>
                    <Col lg="6" className="form-box">
                    </Col>
                </Row>
        	</Container>
        </div>
    );
};

export default Contact;