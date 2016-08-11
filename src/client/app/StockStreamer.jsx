import React from 'react';

require('../scss/StockStreamer.scss');

class StockStreamer extends React.Component {
  render () {
    return (
        <div className="stock-streamer">
            <h4 className="title">Stock Streamer w/ WebSockets/D3.js</h4><button className="actions">Start</button>
        </div>
    );
  }
}

export default StockStreamer;