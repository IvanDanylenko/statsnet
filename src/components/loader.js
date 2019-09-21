import React from 'react';
import spinner from '../assets/spinner.svg';

const Loader = ({loading}) => {
  return (
    (loading)
    ? 
      <img src={spinner} alt="spinner" />
    :
      null
  )
}

export default Loader;
