import React, { Component } from 'react';
import styles from '../../css/left-nav.module.css';
import { NavLink, withRouter } from 'react-router-dom';

class Catagory extends Component {
  render() {
    const { name, productTypes, clicked, handleClick } = this.props;
    return (
      <div className={styles['category-container']}>
        <div className={styles['catagory']} id={name} onClick={handleClick}>
          {name}
        </div>
        <div
          className={`${styles['productType-container']} ${
            clicked === name ? styles['visible'] : styles['hidden']
          }`}
        >
          {productTypes.map(el => {
            return (
              <div className={styles['productType']} key={el.id}>
                {el.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Catagory);
