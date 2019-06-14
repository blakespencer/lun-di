import React, { Component } from 'react';

export default class CartItemProfile extends Component {
  render() {
    const { item } = this.props;
    return <div>{item.productId}</div>;
  }
}
