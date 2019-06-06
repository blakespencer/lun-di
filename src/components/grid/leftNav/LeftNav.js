import React, { Component } from 'react';
import styles from '../../css/left-nav.module.css';
import { connect } from 'react-redux';
import { Catagory } from '../../';
import { withRouter } from 'react-router-dom';

class Menu extends Component {
  state = { clicked: 'null' };

  handleClick = async evt => {
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
    const { catagory } = this.props.match.params;
    return (
      <div className={styles['menu']}>
        {catagories.map(el => {
          return (
            <Catagory
              key={el.name}
              {...el}
              clicked={clicked}
              handleClick={this.handleClick}
              bold={catagory === el.name}
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

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Menu)
);
