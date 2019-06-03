import React, { Component } from 'react';
import styles from '../css/breadcrumb.module.css';

export default class FilterBox extends Component {
  state = {
    isClicked: false,
    selected: { value: 'filterBy', name: 'Filter By' },
    options: [
      { value: 'filterBy', name: 'Filter By' },
      { value: 'dateAscending', name: ' Date (ascending)' },
      { value: 'dateDescending', name: 'Date (descending)' },
      { value: 'priceAscending', name: 'Price (ascending)' },
      { value: 'priceDescending', name: 'Price (descending)' },
    ],
  };

  handleClick = evt => {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  };

  handleChange = evt => {
    this.setState({
      selected: { name: evt.target.id, value: evt.target.value },
    });
  };

  // 13 charaters
  render() {
    const { isClicked, selected, options } = this.state;
    let selectedShort = selected.name;
    if (selectedShort.length > 13) {
      selectedShort = selected.name.slice(0, 14) + '...';
    }
    return (
      <div className={styles['filter']} onClick={this.handleClick}>
        <div className={styles['filter-lable']} id={selected.value}>
          {selectedShort}
        </div>
        <div className={styles['filter-right']}>
          <div className={styles['line']} />
          <i className={`fas fa-chevron-down ${styles['icon']}`} />
        </div>
        {isClicked && (
          <span className={styles['filter-popup']}>
            <ul className={styles['select']}>
              {options.map(el => {
                return (
                  <option
                    className={`${styles['li']} ${selected.value === el.value &&
                      styles['selected']}`}
                    key={el.value}
                    onClick={this.handleChange}
                    value={el.value}
                    id={`${el.name}`}
                  >
                    {el.name}
                  </option>
                );
              })}
            </ul>
          </span>
        )}
      </div>
    );
  }
}
