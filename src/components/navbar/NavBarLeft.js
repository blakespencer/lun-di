import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

export default class NavBarLeft extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <ul>
            <li className="nav-hover">Shop</li>
            <li className="nav-hover">New In</li>
            <li>
              <i class="fas fa-search" />
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <ul>
            <li>Drop Down</li>
            <li>
              <i class="fas fa-search" />
            </li>
          </ul>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
