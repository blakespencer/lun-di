import React, { Component } from 'react';
import '../css/nav.css';
import { NavBarLeft, NavBarRight } from './';
export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <NavBarLeft />
          <ul id="logo">
            <li>LUN-DI</li>
          </ul>
          <NavBarRight />
        </div>
      </nav>
    );
  }
}
