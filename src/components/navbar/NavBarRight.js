import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

export default class NavBarRight extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <ul>
            <li>About</li>
            <li>UK</li>
            <li>GBP</li>
            <li>
              <i class="far fa-user" />
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
