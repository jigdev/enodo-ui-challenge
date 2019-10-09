// import 'chart.js'
import {Doughnut} from 'vue-chartjs'

export default Doughnut.extend({
  mounted () {
    this.renderChart({
      labels: [
        'Salaries & Personnel',
        'Repairs & Maintenance',
        'Contract Services',
        'Marketing & Advertising',
        'Administrative',
        'Utilities'
      ],
      datasets: [
        {
          backgroundColor: [
            '#B2DFDB',
            '#80CBC4',
            '#4DB6AC',
            '#26A69A',
            '#009688',
            '#009680'
          ],
          data: [20, 30, 50, 10, 60, 80],
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
