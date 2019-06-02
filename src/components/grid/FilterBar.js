import React, { Component } from 'react';
import { BreadCrumb, FilterBox } from '..';
import styles from '../css/breadcrumb.module.css';

export default class FilterBar extends Component {
  render() {
    return (
      <div className={styles['filter-bar']}>
        <BreadCrumb />
        <FilterBox />
      </div>
    );
  }
}
