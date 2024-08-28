import React from 'react';
import Chart from 'react-apexcharts';

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false  // Hides the toolbar with zoom in/out buttons
          }
        },
        xaxis: {
          labels: {
            show: false  // Hides x-axis labels
          },
          axisBorder: {
            show: false  // Hides x-axis border
          },
          axisTicks: {
            show: false  // Hides x-axis ticks
          }
        },
        yaxis: {
          labels: {
            show: false  // Hides y-axis labels
          },
          axisBorder: {
            show: false  // Hides y-axis border
          },
          axisTicks: {
            show: false  // Hides y-axis ticks
          }
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
          fixed: {
            enabled: true,
            position: 'topRight',
            offsetY: -30,
            offsetX: 60
          }
        },
        grid: {
          show: false  // Optionally hides the grid lines
        },
        dataLabels: {
          enabled: false  // Hides numbers inside the bars
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '80%', // Adjust this percentage to add padding between bars
            endingShape: 'flat'
          }
        },
        legend: {
          show: false
        },
        stroke: {
          show: true,
          width: 1
        }
      },
      series: [
        {
          name: 'Temperature',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 98, 80, 70, 65, 80]
        }
      ]
    }
  }

  render() {
    return (
      <div className="chart" style={{ padding: 10, margin: 0, width: '100%', height: '100%' }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
          height="80%"
        />
      </div>
    );
  }
}

export default BarChart;
