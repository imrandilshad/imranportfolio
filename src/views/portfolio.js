import { useState } from 'react'
import {
    Container,
    Col,
    Row
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { portfolio } from '../common/data'
import PortfolioModal from '../common/portfolioModal'
const data = portfolio;

const Portfolio = () => {
    const [modalShow, setModalShow] = useState(false);
    const [object, setObject] = useState(null);
    const handlePortfolioModal = (item) => {
        // console.log(item)
        setModalShow(true)
        setObject(item)
    }
    return (
        <div className="port-portfolio-container">
            <Container>
                <div className="page-info">
                    <div className="page-title">PORTFOLIO</div>
                    <div className="page-desc">
                        See my works below. Most of the front-end & api integrations parts were done by me.
                    </div>
                </div>
                {
                    data && data.map((item,index)=>(
                    <Row className="portfolio-wrapper" key={"portfolio-" + index}>
                        <Col md="4" className="image-box">
                            {
                                item.images && item.images.length > 0 ?
                                <div 
                                    className="image-container" 
                                    onClick={() => handlePortfolioModal(item)}
                                >
                                    <img src={item.images[0]} alt="spyin_dashboard"/>
                                    <div className="middle">
                                        <FontAwesomeIcon className="icon" icon={faEye} />
                                    </div>
                                </div>
                                :
                                null
                            }
                        </Col>
                        <Col md="8" className="detail-box">
                            <div className="product-title">
                                { 
                                    item.title ? item.title : null
                                }
                            </div>
                            <div className="product-desc">
                                {
                                    item.description ? item.description : null
                                }
                            </div>
                            <div className="tools-box">
                                <div className="tech-title">Technologies: </div>
                                <div className="techs">
                                    {
                                        item.tools && item.tools.length > 0 ?
                                        item.tools.map((item, index) => (
                                            <a 
                                                href={item.link} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                key={"tools- " + index}
                                            >
                                                <span className="item">
                                                    { item.name ? item.name : null }
                                                </span>
                                            </a>
                                        ))                                        
                                        : null
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    ))
                }
            </Container>
            {
                modalShow && object && 
                <PortfolioModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    portfolio={object}
                />
            }
        </div>
    );
};

export default Portfolio;

