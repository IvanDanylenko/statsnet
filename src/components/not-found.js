import React from 'react';
import Iframe from 'react-iframe'

const NotFound = () => {
  return <Iframe url="/404/"
      width="100%"
      height="100%"
      id="not-found"
      className="not-found"
      display="initial"
      position="relative"/>
}

export default NotFound;
