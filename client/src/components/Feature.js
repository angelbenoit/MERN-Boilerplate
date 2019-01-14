import React, { Component } from 'react';
import requireAuth from './requireAuth';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return <div>This is the feature!</div>;
  }
}

export default connect(null, actions)(requireAuth(Feature));