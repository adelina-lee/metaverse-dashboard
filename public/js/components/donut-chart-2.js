 // setup 
 var data = {
    datasets: [{
        label: 'Affiliates',
        data: [100], //depends like this half data so donut show half
        backgroundColor: [
            '#352a6e',
        ],
        borderColor: [
            'transparent',
        ],
        borderWidth: 0,
        cutout: '80%', //width of donut, the higher the %, the smaller width
    }]
};

var stackedText = {
    id: 'stackedText',
    afterDatasetsDraw(chart, args, options) {
        const { ctx, chartArea: { top, bottom, left, right, width, height } } =
            chart;

        ctx.save();
        const fontHeight = 35; //size of data and text
        const halffontHeight = fontHeight / 2;

        // 25/50 data
        ctx.font = `bolder ${fontHeight}px Inter`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('0%', width / 2, height / 2 + top);
        ctx.restore();

        // Affiliates text
        ctx.font = ` ${halffontHeight}px Inter`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Received', width / 2, height / 2.2 + top + fontHeight);
        ctx.restore();

    }
}

// config 
var earningsZeroDonutConfig = {
    type: 'doughnut',
    data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            }
        }
    },
    plugins: [stackedText]
};

// render init block
const donutEarningsZero = new Chart(
    document.getElementById('donutEarningsZero'),
    earningsZeroDonutConfig
);

donutEarningsZero.setOptions({
    responsive: true,
    maintainAspectRatio: true
  });