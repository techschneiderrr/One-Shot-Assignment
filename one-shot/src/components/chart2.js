import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


function Chart2() {
    const data = {
        labels: ['India', 'Bangladesh', 'Swaziland', ' Brunei', 'Pakistan', 'Sweden'],
        datasets: [
          {
            label: 'number of Colleges',
            data: [8, 9, 5, 7, 4, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
      
  return(
    <>
    <div style={{width:"350px",margin:"auto auto"}}>
        <Radar data={data} />
        <br/>
        <center><h6>Number of colleges per country</h6></center>
    </div>
  </>
  );
}

export default Chart2;