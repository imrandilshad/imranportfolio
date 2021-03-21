import {useState, useEffect} from 'react';
import {
    Container
} from 'react-bootstrap';
const data = [
    {name: 'HTML', percent: "80", class: "html"},
    {name: 'CSS | SASS', percent: "80", class: "css"},
    {name: 'BOOTSTRAP', percent: "65", class: "bootstrap"},
    {name: 'REACT JS', percent: "80", class: "react"},
    {name: 'JAVASCRIPT', percent: "65", class: "js"},
    {name: 'REDUX | MIDDLEWARES', percent: "70", class: "redux"},
    // {name: 'THUNK', percent: "60", class: "thunk"},
    // {name: 'SAGAS', percent: "40", class: "saga"},
    {name: 'NODE | EXPRESS', percent: "20", class: "node"},
    {name: 'GIT | BITBUCKET | GITHUB', percent: "65", class: "git"},
]

const Skills = () => {
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div className="port-sills-container">
            <Container>
                <div className="page-info">
                    <div className="page-title">SKILLS</div>
                    <div className="page-desc">
                        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                    </div>
                </div>
            	<div className="skills-box">
                {
                    data.map((item,index) => (
                        <div className="skill-item" key={'skill- ' + index}>
                            <div className="name">{item.name}</div>
                            <div className="bar-width">
                                <div 
                                    className={`percent-width ${isLoaded && item.class}`}
                                >
                                    {item.percent}%
                                </div>
                            </div>
                        </div>
                    ))
                }
            	</div>
            </Container>
        </div>
    );
};

export default Skills;
