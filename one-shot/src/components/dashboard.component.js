import React, { Component } from 'react'
import Chart1 from './chart1'
import Chart2 from './chart2'
import Chart3 from './chart3'
export default class Dashboard extends Component {
    render() {
        return(
            <div className='container'>
                <h3>Dashboard</h3>
                <div style={{margin:"10vh"}}></div>
                <div class="row">
                    <div class="col-md-3"><Chart1 /></div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3"> <Chart2 /></div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3"> <Chart3 /></div>
                </div>
            </div>
        )
    }
}
