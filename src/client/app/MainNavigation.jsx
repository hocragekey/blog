import React from 'react';

require('../scss/MainNavigation.scss');

class MainNavigation extends React.Component {
  render () {
    return (
        <div className="inner-nav">
            <div className="logo">
                <h1>lebweb.com</h1>
            </div>

            <h3>My personal projects / sample work highlighting various open source technologies</h3>
        </div>
    );
  }
}

export default MainNavigation; 