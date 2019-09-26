import React from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class LoadingProgressBar extends React.Component {
  componentDidMount () {
    NProgress.configure({
      template: '<div class="bar" role="bar"><div class="peg"></div></div>'
    });
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
