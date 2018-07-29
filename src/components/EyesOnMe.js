// Code EyesOnMe Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class EyesOnme extends React.Component {
  const sayGood = () => {
    console.log('Good!');
    return;
  }
  const getAttention = () => {
    console.log('Hey! Eyes on me!');
    return;
  }
  render(){
    <button onFocus={sayGood()} onBlur={getAttention()}>Eyes on me</button>
  }
}
