import React from 'react';
import {render} from 'react-dom';

require('../scss/master.scss');

class App extends React.Component {
        
  render () {
    return (
        <div className="hero is-fullheight is-primary">
            <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Jim Lebonitte
                  </h1>
                  <h2 className="subtitle">
                    Full Stack Software Architect Specializing in Innovative Technology Implementations
                  </h2>
                  <h2 className="subtitle">
                    <i className="fa fa-docker" aria-hidden="true" />
                  </h2>
                </div> 
            </div>
            <div className="hero-foot">
                <div className="container has-text-centered">
                    <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3a">
                        <i className="hi-icon fa fa-arrow-down" aria-hidden="true">
                            <a href="#"></a>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));