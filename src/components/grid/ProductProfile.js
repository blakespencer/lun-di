import React, { Component } from 'react';
import styles from '../css/product-profile.module.css';
import { ImageHover } from '..';
import { NavLink } from 'react-router-dom';

export default class ProductProfile extends Component {
  state = {
    sister: 0,
  };

  handleClick = (evt, sister) => {
    evt.preventDefault();
    console.log(sister);
    this.setState({ sister: sister.valueSequence || 0 });
  };

  render() {
    let { title, brand, price, id, skus } = this.props;

    let { Sisters } = this.props;
    const sisters = [...Sisters];
    sisters.unshift({ title, brand, price, id, skus });
    const brandName = brand.name.replace(/-/g, ' ');
    const { sister } = this.state;
    const currentProduct = sisters[sister];
    console.log(currentProduct);
    title = currentProduct.title;
    price = currentProduct.price;
    id = currentProduct.id;
    skus = currentProduct.skus;

    return (
      <NavLink to={`/product/${id}`} className={styles['a']}>
        <div className={styles['product-item']}>
          <ImageHover name={title} id={id} skus={skus} />
          <div className={styles['text']}>
            <div className={styles['text-brand']}>{brandName}</div>
            <div className={styles['text-info']}>{title}</div>
            <div className={styles['text-info']}>{`$${price}`}</div>
            <div className={styles['color-container']}>
              {sisters.map(el => {
                return (
                  <div
                    key={el.id}
                    className={styles['color-circle']}
                    style={{ backgroundColor: el.color }}
                    onClick={evt => this.handleClick(evt, el)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
