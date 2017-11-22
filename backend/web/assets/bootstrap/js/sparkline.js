$('document').ready(function () {
$(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
    type: 'bar',
    height: '40',
    barWidth: 9,
    colorMap: {
        '7': '#a1a1a1'
    },
    barSpacing: 2,
    barColor: '#26B99A'
});

$(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
    type: 'line',
    width: '200',
    height: '40',
    lineColor: '#26B99A',
    fillColor: 'rgba(223, 223, 223, 0.57)',
    lineWidth: 2,
    spotColor: '#26B99A',
    minSpotColor: '#26B99A'
});

var doughnutData = [
    {
        value: 30,
        color: "#455C73"
    },
    {
        value: 30,
        color: "#9B59B6"
    },
    {
        value: 60,
        color: "#BDC3C7"
    },
    {
        value: 100,
        color: "#26B99A"
    },
    {
        value: 120,
        color: "#3498DB"
    }
];
var myDoughnut = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(doughnutData);


})