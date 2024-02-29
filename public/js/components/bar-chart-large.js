Chart.register(ChartjsPluginStacked100.default);
// setup 
const labelChart = '1000 $XMETA'
var data = {
  labels: ['Dec, 20', 'Dec, 21', 'Dec, 22', 'Dec, 23', 'Dec, 24', 'Dec, 25', 'Dec, 26'],
  datasets: [{
    // light blue
    label: labelChart,
    data: [80, 30, 60, 90, 80, 30, 60], //remaining data with below
    backgroundColor: [
      '#42bfc1',
    ],
    borderColor: [
      '#42bfc1',
    ],
    borderWidth: 1,
    barPercentage: 0.5, //width of bar
    categoryPercentage: 1, //space between bar
  },
  {
    // dark blue
    data: [20, 70, 40, 10, 20, 70, 40,], //full 100% top
    backgroundColor: [
      '#1c163a',
    ],
    borderColor: [
      '#1c163a',
    ],
    borderWidth: 1,
    barPercentage: 0.5,
    categoryPercentage: 1,
  }]
};

// tooltip
const titleTooltip = (tooltipItems) => {
  return labelChart;
};

// tooltip
const labelTooltip = (tooltipItems) => {
  return '';
};

// config 
const affiliatesBarChartConfig = {
  type: 'bar',
  data,
  options: {
    plugins: {
      stacked100: {
        enable: true,
        replaceTooltipLabel: false,
      },
      legend: {
        display: false, //hide the top legend data
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
          footer: (context) => {
            const arrayLines = ['22/07/2023'];
            return arrayLines
          }
        },
        footerAlign: 'center',
        padding: 10,
        backgroundColor: '#352e57',
        borderColor: '#42b7c1',
        borderWidth: 2,
        cornerRadius: 20,
        titleFont: {
          size: 20
        },
        bodyFont: {
          size: 10
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // 22/7 data color
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true, //hide y axis data label
        },
        grid: {
          display: false,
          drawTicks: false,
          drawOnChartArea: false,
        }
      }
    }
  }
};

// render init block
const affiliatesBarChart = new Chart(
  document.getElementById('affiliatesBarChart'),
  affiliatesBarChartConfig
);

affiliatesBarChart.setOptions({
  responsive: true,
  maintainAspectRatio: true
});
