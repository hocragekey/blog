import React from 'react';

import StockStreamer from './StockStreamer.jsx';

require('../scss/MainContentView.scss');

class MainContentView extends React.Component {
  
  constructor(props) {
    super(props);
    var me = this,
        m = this.message = "Coming Soon!",
        s = this.state = {
          'cnt' : 0
        },
        f = function() {
            if(!this.state) {
              this.state = s;
            }

            var c = me.state.cnt + 1
            console.log("count " + c);

            if(c > 20) {
              c = 0;
            }

            me.setState({cnt: c})
        };

    setInterval(f, 100);
  }

  render () {
    return (
        <div className="container main">
             <h1><span id="main-text" ref="mainText">{this.message.substring(0, this.state.cnt)} </span></h1>
        </div>
    );
  }
}

export default MainContentView;