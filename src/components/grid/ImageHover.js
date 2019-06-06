import React, { Component } from 'react';
import styles from '../css/productProfile.module.css';

export default class ImageHover extends Component {
  // state = {
  //   isMouseOverBar: false,
  // };

  // handleMouse = evt => {
  //   const { isMouseOverBar } = this.state;
  //   console.log('inside', isMouseOverBar);
  //   this.setState({
  //     isHover: !isMouseOverBar,
  //   });
  // };

  // shouldComponentUpdate = (prevProps, nextProps) => {
  //   return prevProps.isMouseOver === nextProps.isMouseOver;
  // };

  handleClick = evt => {
    // evt.nativeEvent.stopImmediatePropagation();
    evt.stopPropagation();
    console.log('hello');
  };

  render() {
    const { name, isMouseOver } = this.props;
    // const { isMouseOverBar } = this.state;
    return (
      <div
        className={styles['image-container']}
        style={{
          backgroundImage: `url(${require('../../images/product_image.jpg')})`,
        }}
        id={name}
      >
        <div
          className={`${styles['quick-add-bar-container']}`}
          onClick={this.handleClick}
        >
          <div className={`${styles['quick-add-bar']}`}>
            <div className={styles['quick-add-text']}>+ Quick Add</div>
          </div>
          <div className={`${styles['quick-add-bar-alt']}`}>
            <div className={styles['quick-add-text']}>extra small etc</div>
          </div>
        </div>
      </div>
    );
  }
}
