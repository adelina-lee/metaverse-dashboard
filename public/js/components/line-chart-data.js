// setup 
var data = {
    datasets: [{
        data: [
            { x: '2022-01-26', y: 7700 },
            { x: '2022-01-27', y: 9000 },
            { x: '2022-01-28', y: 8500 },
            { x: '2022-01-29', y: 10500 },
            { x: '2022-01-30', y: 9500 },
            { x: '2022-01-31', y: 11500 },
            { x: '2022-02-01', y: 8500 },
            { x: '2022-02-02', y: 10000 },
            { x: '2022-02-03', y: 9500 },
            { x: '2022-02-04', y: 11500 },
            { x: '2022-02-05', y: 8700 },
            { x: '2022-02-06', y: 8000 },
        ],
        backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
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
const lineChartDataConfig = {
    type: 'line',
    data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,

                },
                borderColor: 'white',
                type: 'time',
                time: {
                    unit: 'day'
                },
                min: '2022-01-25',
                max: '2022-02-07',
            },
            y: {
                grid: {
                    drawOnChartArea: false,

                }
            }
        }
    }
};

// render init block
const lineChartData = new Chart(
    document.getElementById('lineChartData'),
    lineChartDataConfig
);

function bgGradient(ctx, chartArea, scales) {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0.25, '#5c80b2');
    gradientBackground.addColorStop(0.9, 'transparent');
    return gradientBackground;
}

lineChartData.setOptions({
    responsive: true,
    maintainAspectRatio: true
  });