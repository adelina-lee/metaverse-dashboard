 // setup 
 var data = {
    datasets: [{
        label: 'Affiliates',
        data: [50, 50], //depends like this half data so donut show half
        backgroundColor: [
            '#42b7c1', //right side
            '#352a6e', //left side
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
        ctx.fillText('50%', width / 2, height / 2 + top);
        ctx.restore();

        // Affiliates text
        ctx.font = `${halffontHeight}px Inter`;
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Received', width / 2, height / 2 + top + fontHeight);
        ctx.restore();

    }
}

// config 
const donutZeroEarningsConfig = {
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
const donutHalfAffiliate = new Chart(
    document.getElementById('donutZeroEarnings'),
    donutZeroEarningsConfig
);

donutHalfAffiliate.setOptions({
    responsive: true,
    maintainAspectRatio: true
  });