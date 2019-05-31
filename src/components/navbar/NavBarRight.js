import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

export default class NavBarRight extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <ul>
            <li className="nav-hover">About</li>
            <li className="nav-hover">UK</li>
            <li className="nav-hover">GBP</li>
            <li className="nav-hover" id="nav-user">
              <i class="far fa-user" />
              {/* <hr /> */}
              <span id="user-popup" className="toolbox-user">
                <ul>
                  <li>Login</li>
                  <li>My Profile</li>
                  <li>My Orders</li>
                </ul>
              </span>
            </li>
            <li>
              <i class="fas fa-shopping-cart" />
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <ul>
            <li>
              <i class="far fa-user" />
            </li>
            <li>
              <i class="fas fa-shopping-cart" />
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
