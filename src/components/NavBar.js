import React, { Component } from 'react';
import './css/nav.css';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <ul>
            <li>Shop</li>
            <li>New In</li>
            <li>
              <i class="fas fa-search" />
            </li>
          </ul>
          <ul id="logo">
            <li>Lundi</li>
          </ul>

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
        </div>
      </nav>
    );
  }
}
