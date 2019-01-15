import React, { Component } from 'react';
import requireAuth from './requireAuth';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderUser() {
    if (this.props.userData) {
      const user = this.props.userData;
      return (
        <>
          <h3>{user.email}</h3>
        </>
      )
    }
  }

  render() {
    return (
      <div>
        This is the feature!
        {this.renderUser()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps, actions)(requireAuth(Feature));