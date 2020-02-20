import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import './unity/ShowcaseBuild/TemplateData/style.css'
import { Button, Form, FormControl, Nav as HNav, Navbar } from "react-bootstrap";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Folder from "./Folder.js";
import Chart from "./Chart.js";
import Building from "./Building.js";
import Database from "./Database.js";
import Settings from "./Settings.js";
import User from "./User.js";
import { NavbarBrand } from 'react-bootstrap';

/*export const EState = {
  CHART: "chart",
  FOLDER: "folder",
  USERS: "users",
  BUILDING: "building",
  DATABASE: "database",
  SETTINGS: "setting"
}*/

class App extends Component {
  constructor() {
    super();
    this.EState = {
      CHART: "chart",
      FOLDER: "folder",
      USERS: "users",
      BUILDING: "building",
      DATABASE: "database",
      SETTINGS: "setting"
    }
    this.state = {
      currentPage: ""
    }
    this.chosen = this.EState.CHART;
  };
/*
  getInitialState() {
    return {active: "chart"};
  }*/

  setCurrentPage(title) {
    document.getElementsByClassName(title).style.backgroundColor = "#1F1D53";
  }

  NavItem(navItems) {
    var navRows = navItems.map(navItem => {
    return (
      <NavItem className={`app-nav-item item-${navItem.name}`} eventKey={`${navItem.name}`}>
        <NavIcon>
          <NavLink className={this.state.currentPage} to={`/${navItem.name}`} activeStyle={{ 
              boxShadow: "0 0 0 1000px #1F1D53", /*To set shadow, then overflow hidden to block it*/
              backgroundColor: "#1F1D53",
              color: "#1F1D53"}}
              activeClassName={`${navItem.name}-active`}>
                <i className={`${navItem.fa}`} style={{color: "#1F1D53", fontSize: '2em'}}/>
          </NavLink>
        </NavIcon>
      </NavItem>)}
    );

    return navRows;
  }

  SetupRoute(routeItems) {
    var routes = routeItems.map(navRoute => {
      return (
        <Route exact path={`/${navRoute.name}`} component={navRoute.cname} />
      )
    });

    return routes;
  }

  render() {
    this.state = 0;
    return (
    <div className="App">
      <HNav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <Navbar.Brand href="#home" style={{textAlign:"center", margin:"auto", fontWeight:"bold"}}>Omni Developments</Navbar.Brand>
      </HNav>
      <Router>
        <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
        className="bg-light border-right">
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="chart">
          {this.NavItem([
            {name:"chart",fa:"fa fa-bar-chart"}
          ,{name:"folder",fa:"fa fa-folder-o"}
          ,{name:"user", fa: "fa fa-users"}
          ,{name:"building", fa:"fa fa-building-o"}
          ,{name:"database", fa:"fa fa-database"}
          ,{name:"settings", fa:"fa fa-cog"}])}
          </SideNav.Nav>
        </SideNav>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Chart} />
            {this.SetupRoute([          
            {name:"chart",cname:Chart}
          ,{name:"folder",cname:Folder}
          ,{name:"user", cname: User}
          ,{name:"building", cname: Building}
          ,{name:"database", cname: Database}
          ,{name:"settings", cname: Settings}])}

            {/*<Route render={function () {
                return <p>Not found</p>
              }}*/} />
          </Switch>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
