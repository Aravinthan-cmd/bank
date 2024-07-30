import React from 'react';
import Chart from 'react-apexcharts';

class ChartTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-line',
          toolbar: {
            show: false  // Hides the toolbar with zoom in/out buttons
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yaxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },tooltip: {
          enabled: true,
          theme: 'dark',
          fixed: {
            enabled: true,
            position: 'topRight', // keeps tooltip in a fixed position
            offsetY: -30,
            offsetX: 60
          }
        },
      },
      series: [
        {
          name: 'Temperature',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    }
  }

  render() {
    return (
      <div className="chart">
        <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="720"
              height="290"
            />
      </div>
    );
  }
}

export default ChartTransaction;
