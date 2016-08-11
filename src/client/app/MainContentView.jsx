import React from 'react';

import StockStreamer from './StockStreamer.jsx';

class MainContentView extends React.Component {
  render () {
    return (
        <div className="inner-main">
             <StockStreamer />
        </div>
    );
  }
}

export default MainContentView;