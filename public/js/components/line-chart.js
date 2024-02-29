
var data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        data: [0, 10, 5, 20, 15, 30, 5, 18, 15, 30, 12, 0],
        backgroundColor: (context) => {
            const chart = context.chart;
    const {ctx, chartArea, scales} = chart;
    if (!chartArea) {
                return null;
            }
    return bgGradient(ctx, chartArea, scales);
        },
    borderColor: [
    '#42b7c1',
    ],
    borderWidth: 3,
    tension: 0.5,
    fill: true,
    pointBorderColor: 'white',
    pointBackgroundColor: 'white',
    }]
};

    // config 
    const contributionsConfig = {
        type: 'line',
    data,
    options: {
        plugins: {
        legend: {
        display: false,
            },
        },
    scales: {
        x: {
        beginAtZero: true,
    ticks: {
        display: false,
                },
    grid: {
        display: false,
    drawTicks: false,
    drawOnChartArea: false,
    drawBorder: false,
                }
            },
    y: {
        beginAtZero: true,
    ticks: {
        display: false,
                },
    grid: {
        display: false,
    drawTicks: false,
    drawOnChartArea: false,
    drawBorder: false,
                }
            }
        }
    }
};

// render init block
const contributorsLineChart = new Chart(
    document.getElementById('contributorsLineChart'),
    contributionsConfig
);

function bgGradient(ctx, chartArea, scales) {
    const {left, right, top, bottom, width, height} = chartArea;
    const {x, y} = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0.25, '#5c80b2');
    gradientBackground.addColorStop(0.95, 'transparent');
    return gradientBackground;
}

contributorsLineChart.setOptions({
    responsive: true,
    maintainAspectRatio: true
  });