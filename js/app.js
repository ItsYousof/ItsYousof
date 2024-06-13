document.addEventListener('DOMContentLoaded', function () {
    // Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JS', 'NODEJS', 'PYTHON', 'C#'],
            datasets: [{
                label: '# of Time Spent',
                data: [10, 9, 15, 19, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // JustGage
    var gauge = new JustGage({
        id: 'gauge',
        value: 67,
        min: 0,
        max: 100,
        title: 'Completion Rate',
        label: 'Percent',
        gaugeWidthScale: 0.6,
        pointer: true,
        gaugeColor: "#242424",
        levelColors: ["#FF5722", "#FF9800", "#8BC34A"]
    });
});