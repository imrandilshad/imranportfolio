import React, { useReducer } from 'react'
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames'

import Header from '../header';
import SideBar from '../sideBar';
import Home from '../home';
import Contact from '../contact';
import Portfolio from '../portfolio';
import Skills from '../skills'

export const SidebarContext = React.createContext();

const initialState = false;
const reducer = (state , action) => {
	switch(action) {
		case 'toggleSideBar':
			return !state
		default: 
			return false
	} 
}


const Layout = () => {
	const [sidebar, dispatch] = useReducer(reducer, initialState)
	const sidebarClasses = classNames('sidebar-layout',
		{
		  'layout--collapse': sidebar,
		}
	);
	const contentClasses = classNames('content-layout',
		{
		  'layout--collapse': sidebar,
		}
	);
	// console.log(sidebarClasses)
	// console.log(contentClasses)
    return (
    	<SidebarContext.Provider value={{isSidebarCollapsed: sidebar, setSidebarCollapsed: dispatch}}>
	        <div className="port-layout-container">
	        	<div className="header-layout">
	        		<Header />
	        	</div>
	        	<div className={sidebarClasses}>
			        <SideBar />
		      	</div>
		      	<div className={contentClasses}>
		      		<Switch>
				        <Route exact path="/" component={Home}/>
				        <Route exact path="/portfolio" component={Portfolio}/>
				        <Route exact path="/skills" component={Skills}/>
				        <Route exact path="/contact-me" component={Contact}/>
				    </Switch>
		      	</div>
	        </div>
        </SidebarContext.Provider>
    );
};

export default Layout;
