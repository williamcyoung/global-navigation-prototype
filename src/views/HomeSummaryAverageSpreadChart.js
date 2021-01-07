import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    mounted() {
        this.renderChart({
            datasets: [

                {
                    label: '<250k',
                    backgroundColor: '#CFCFCF',
                    data: [20],
                    borderWidth: 0
                },
                {
                    label: '$250 - $2m',
                    backgroundColor: '#2A78F5',
                    data: [15],
                    borderWidth: 0
                },
                {
                    label: '$2m+',
                    backgroundColor: '#B3CFFB',
                    data: [7],
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
                        ticks: {
                            beginAtZero: true
                        }
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