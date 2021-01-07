import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    mounted() {
        this.renderChart({
            labels: ['# of Loan'],
            datasets: [
                {
                    label: 'No draw',
                    backgroundColor: '#6CCC4D',
                    data: [155],
                    borderWidth: 0
                },
                {
                    label: 'Need monitor',
                    backgroundColor: '#FEF851',
                    data: [18],
                    borderWidth: 0
                },
                {
                    label: 'Close to maintenace line',
                    backgroundColor: '#F8C045',
                    data: [23],
                    borderWidth: 0
                },
                {
                    label: 'Broke maintenance line',
                    backgroundColor: '#FF4B4B',
                    data: [12],
                    borderWidth: 0
                },
                {
                    label: 'Being called',
                    backgroundColor: '#8944BC',
                    data: [10],
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
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            fontColor: "#7E93AE",
                        },
                        stacked: true,
                    }],
                    xAxes: [{
                        barThickness: 60,
                        stacked: true,
                        display: false,
                    }]
                }
            },
            { responsive: true, maintainAspectRatio: false })
    }
}