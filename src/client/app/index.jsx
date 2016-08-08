import React from 'react';
import {render} from 'react-dom';
import MainNavigation from './MainNavigation.jsx';
import MainContentView from './MainContentView.jsx';

class App extends React.Component {
  render () {
    return (
        <div id="outer">
            <div id="nav">
                <MainNavigation />
            </div>
            <div id="main">
                <MainContentView />
            </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));