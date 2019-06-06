import React, { Component } from 'react';
import styles from '../css/productProfile.module.css';
import Background from '../../images/example_pic.jpg';
import { ImageHover } from '..';
import { NavLink } from 'react-router-dom';

export default class ProductProfile extends Component {
  state = { isMouseOver: false };
  // handleMouse = () => {
  //   const { isMouseOver } = this.state;
  //   console.log('outside', isMouseOver);
  //   this.setState({ isMouseOver: !isMouseOver });
  // };
  render() {
    const { isMouseOver } = this.state;
    const { name, description } = this.props;
    return (
      <NavLink>
        <div
          className={styles['product-item']}
          // onMouseOver={this.handleMouse}
          // onMouseOut={this.handleMouse}
        >
          <ImageHover
            name={name}
            //  isMouseOver={isMouseOver}
          />
          <div>{name}</div>
          <div>{description}</div>
        </div>
      </NavLink>
    );
  }
}
