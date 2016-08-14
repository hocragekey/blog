import React from 'react';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Chart } from 'react-d3-core';
import { LineChart } from 'react-d3-basic';


require('../scss/StockStreamer.scss');

class StockStreamer extends React.Component {
  render () {
    return (
        <div className="stock-streamer-module">

            <div className="stock-streamer-title">
                <h4 className="title left">Stock Streamer w/ WebSockets/D3.js</h4>
                <div className="actions right">
                    <Form inline>
                        <FormGroup>
                            <FormControl
                                type="text"
                                placeholder="Enter valid stock symbol: "
                            />
                            <Button bsStyle="primary">Start</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>

            <div className="stock-streamer-body">

            </div>
        </div>
    );
  }
}

export default StockStreamer;