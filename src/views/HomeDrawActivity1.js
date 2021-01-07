import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: 'transparent',
                    borderColor: '#2A78F5',
                    data: [100000, 120000, 121000, 190000, 230000],
                    pointBackgroundColor: '#2A78F5',
                    pointRadius: 2,
                }
            ]
        },
            {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        display: false,
                    }],
                    xAxes: [{
                        display: false,
                    }]
                }
            },
            { responsive: true, maintainAspectRatio: false })
    }
}