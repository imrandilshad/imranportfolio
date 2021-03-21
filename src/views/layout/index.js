import { Route, Switch } from 'react-router-dom';
import SideBar from '../sideBar';
import Home from '../home';
import Contact from '../contact';
import Portfolio from '../portfolio';
import Skills from '../skills'

const Layout = () => {
    return (
        <div className="port-layout-container">
        	<div className="sidebar-layout">
		        <SideBar />
	      	</div>
	      	<div className="content-layout">
	      		<Switch>
			        <Route exact path="/" component={Home}/>
			        <Route exact path="/portfolio" component={Portfolio}/>
			        <Route exact path="/skills" component={Skills}/>
			        <Route exact path="/contact-me" component={Contact}/>
			    </Switch>
	      	</div>
        </div>
    );
};

export default Layout;
