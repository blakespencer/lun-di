import React, { Component } from 'react';

export default class CartPopup extends Component {
  render() {
    return (
      <span>
        <div>
          <div>
            <h3>Your Bag Summary</h3>
            <div>Close</div>
            <span>
              <button>X</button>
            </span>
          </div>
          <div>You have nothing in your bag</div>
        </div>
      </span>
    );
  }
}
