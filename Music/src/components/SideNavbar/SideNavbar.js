//import classes from '*.module.css';
import React, { Component } from 'react';

import { Group, GroupHeader, Navbar, NavItem } from './styled';
import classes from './SideNavbar.module.css';

class SideNavbar extends Component {
  render() {
    return (
      <Navbar>
        <GroupHeader>
          <h1
            styles={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            Groovy
          </h1>
          <h2>You've logged into nirvana!</h2>
          <h3>Pick your Jam</h3>
        </GroupHeader>
        <Group>
          <NavItem to="/browse">Home</NavItem>
        </Group>
        <Group
          styles={{
            textAlign: 'center',
          }}
        >
          <a href="http://localhost:3000/dashboard">
            <h4 className={classes.bottom}>Back</h4>
            
          </a>
        </Group>
       
      </Navbar>
    );
  }
}

export default SideNavbar;
