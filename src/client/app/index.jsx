import React from 'react';
import {render} from 'react-dom';

require('../scss/master.scss');

import MainNavigation from './MainNavigation.jsx';
import MainContentView from './MainContentView.jsx';
import BottomNavigation from './BottomNavigation.jsx';

class App extends React.Component {
  render () {
    return (
        <div id="app">
            <div id="blog-app-nav">
                <MainNavigation />
            </div>
            <div className="main">
                <MainContentView />
            </div>
            <div className="footer">
                <BottomNavigation />
            </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));