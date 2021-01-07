import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart({
      datasets: [
        {
          label: 'New',
          backgroundColor: '#00BCD4',
          data: [11],
          borderWidth: 0
        },
        {
          label: 'Actual',
          backgroundColor: '#CFCFCF',
          data: [15],
          borderWidth: 0
        },
        {
          label: 'Active',
          backgroundColor: '#FF7085',
          data: [24],
          borderWidth: 0
        },
        {
          label: 'Inactive',
          backgroundColor: '#2A78F5',
          data: [32],
          borderWidth: 0
        },
        {
          label: 'Goal',
          backgroundColor: '#B3CFFB',
          data: [40],
          borderWidth: 0
        }
      ]
    },
      {
        legend: {
          align: 'center',
          position: 'right',
          labels: {
            boxWidth: 10,
            fontColor: '#7E93AE'
          }
        },
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 1.0,
          }]
        }
      },
      { responsive: true, maintainAspectRatio: false })
  }
}