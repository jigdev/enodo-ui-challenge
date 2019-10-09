Vue.component('pie-chart', {
  extends: VueChartJs.Pie,
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
          data: [20, 30, 50, 10, 60, 80],
          backgroundColor: [
            '#B2DFDB',
            '#80CBC4',
            '#4DB6AC',
            '#26A69A',
            '#009688',
            '#009680'
          ]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      pieceLabel: {
        mode: 'percentage',
        precision: 1
      }
    })
 }

})

