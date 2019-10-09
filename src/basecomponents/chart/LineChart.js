import 'chart.js'
import {Line} from 'vue-chartjs'



const horizonalLinePlugin = {
  id: 'horizontalLine',
  afterDraw: function(chartInstance) {

    var yValue;
    var yScale = chartInstance.scales["y-axis-0"];
    var canvas = chartInstance.chart;
    var ctx = canvas.ctx;
    var index;
    var line;
    var style;

    if (chartInstance.options.horizontalLine) {

      for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
        line = chartInstance.options.horizontalLine[index];

        if (!line.style) {
          style = "#080808";
        } else {
          style = line.style;
        }

        if (line.y) {
          yValue = yScale.getPixelForValue(line.y);
        } else {
          yValue = 0;
        }
        ctx.lineWidth = 3;

        if (yValue) {
          window.chart = chartInstance;
          ctx.beginPath();
          ctx.moveTo(0, yValue);
          ctx.lineTo(canvas.width, yValue);
          ctx.strokeStyle = style;
          ctx.stroke();
        }

        if (line.text) {
          ctx.fillStyle = style;
          ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
        }
      }
      return;
    }
  }
}

// eslint-disable-next-line no-undef
export default Line.extend({
  beforeMount () {
    this.addPlugin(horizonalLinePlugin)
  },
  mounted () {
    this.renderChart({
    labels: [
            '1/1/2019',
            '2/1/2019',
            '3/1/2019',
            '4/1/2019',
            '5/1/2019',
            '6/1/2019',
            '7/1/2019',
            '8/1/2019',
            '9/1/2019',
            '10/1/2019',
            '11/1/2019',
            '12/1/2019'],
       datasets: [
            {
              label: 'Net Rentable Income',
              data: [
                1670544,
                1655497,
                1666943,
                1655449,
                1632173,
                1608995,
                1635788,
                1624149,
                1649718,
                1656558,
                1659918,
                1643396],
              backgroundColor: '#F9E79F'
            },
            {
              label: 'Less Vacancy Loss',
              data: [14551,
                21936,
                22973,
                23239,
                31656,
                44917,
                39591,
                28994,
                15946,
                15026,
                21762,
                27914
              ],
              backgroundColor: '#ABEBC6'
            },
            {
              label: 'Less Bad Debt',
              data: [
                541314,
                531571,
                534541,
                530717,
                518161,
                510531,
                514059,
                521692,
                535988,
                537458,
                532731,
                528998
              ],
              backgroundColor: '#AED6F1'
            },
            {
              label: 'Less Concessions',
              data: [
                0,
                0,
                0,
                0,
                2060,
                29118,
                2575,
                15353,
                7318,
                3430,
                0,
                16877
              ],
              backgroundColor: '#CCD1D1'
            }
          ],
    }, {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: false,
                  min: 1448095.5,
                  autoSkip: true
                }
              }
            ]
          },
         tooltips: {
            mode: 'index',
            intersect: false,
            bodySpacing: 8,
            callbacks: {}
          },
      legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 25
            }
          }
    })
  }
})
