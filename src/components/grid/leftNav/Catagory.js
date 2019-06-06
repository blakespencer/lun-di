import React, { Component } from 'react';
import styles from '../../css/left-nav.module.css';
import { NavLink } from 'react-router-dom';

class Catagory extends Component {
  render() {
    const { name, productTypes, clicked, handleClick, bold } = this.props;
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
            const productTypeName = el.name.replace(/-/g, ' ');
            return (
              <div className={styles['productType']} key={el.id}>
                <NavLink
                  to={`/shop/${name}/${el.name}`}
                  className={`${styles['a']} ${bold && 'bold'}`}
                >
                  {productTypeName}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catagory;
