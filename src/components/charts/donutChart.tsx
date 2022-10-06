import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {},
            series: [55, 20],
            labels: {
                show: false,
            }
        }
    }
    render() {
    
        return (
            <div className="donut">
                <Chart options={this.state.options} series={this.state.series} type="donut"/>
            </div>
        );
    }
}

export default Donut;