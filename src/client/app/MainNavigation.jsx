import React from 'react';

require('../scss/MainNavigation.scss');

class MainNavigation extends React.Component {
  render () {
    return (
        <div className="inner-nav">
            <div className="logo">
                <h1>lebweb.com</h1>
            </div>
        </div>
    );
  }
}

export default MainNavigation;