import React, { Component } from 'react';
import styles from '../css/product-page.module.css';

export default class ProductSize extends Component {
  state = {
    isClicked: true,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = evt => {
    const isOutside = !this.node.contains(evt.target);
    if (isOutside && this.state.isClicked) {
      this.setState({
        isClicked: false,
      });
    }
  };

  handleClick = () => {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  };

  render() {
    const { isClicked } = this.state;
    const { size, handleChange } = this.props;
    const options = this.props.product.skus || [];
    return (
      <div
        className={styles['size-container']}
        onClick={this.handleClick}
        ref={node => (this.node = node)}
      >
        <div className={styles['size']}>{size}</div>
        <div className={styles['arrow-down']}>
          <i className={`fas fa-chevron-down ${styles['icon']}`} />
        </div>
        {isClicked && (
          <span className={styles['size-dropdown']}>
            <ul className={styles['select']}>
              {options.map(el => {
                const { id } = el;
                const { value } = el.size;
                return (
                  <li
                    className={`${styles['li']} ${size === el.value &&
                      styles['selected']}`}
                    key={el.value}
                    onClick={() => handleChange(id, value)}
                    value={value}
                    id={el.id}
                    name={el.name}
                    data-skuid={el.id}
                    data-value={value}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </span>
        )}
      </div>
    );
  }
}
