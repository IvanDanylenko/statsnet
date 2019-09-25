import React from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class LoadingProgressBar extends React.Component {
  componentDidMount () {
    NProgress.start();
  }

  componentWillUnmount () {
    NProgress.done(); 
  }

  render () {
    return <div />;
  }
}

export default LoadingProgressBar;