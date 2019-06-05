import React, { Component } from 'react';
import styles from '../../css/left-nav.module.css';
import { connect } from 'react-redux';
import { Catagory } from '../../';

class Menu extends Component {
  state = { clicked: 'null' };

  handleClick = evt => {
    const catagory = evt.target.id;
    if (this.state.clicked === catagory) {
      this.setState({ clicked: null });
    } else {
      this.setState({ clicked: catagory });
    }
  };

  render() {
    const { catagories } = this.props;
    const { clicked } = this.state;
    return (
      <div className={styles['menu']}>
        {catagories.map(el => {
          return (
            <Catagory
              key={el.name}
              {...el}
              clicked={clicked}
              handleClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ catagories }) => ({
  catagories,
});

export default connect(
  mapStateToProps,
  null
)(Menu);
