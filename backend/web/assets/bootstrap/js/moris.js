$(function () {
var day_data = [
    {
        "period": "Jan",
        "Hours worked": 80
    },
    {
        "period": "Feb",
        "Hours worked": 125
    },
    {
        "period": "Mar",
        "Hours worked": 176
    },
    {
        "period": "Apr",
        "Hours worked": 224
    },
    {
        "period": "May",
        "Hours worked": 265
    },
    {
        "period": "Jun",
        "Hours worked": 314
    }
];
Morris.Bar({
    element: 'graph_bar',
    data: day_data,
    hideHover: 'always',
    xkey: 'period',
    barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
    ykeys: ['Hours worked', 'sorned'],
    labels: ['Hours worked', 'SORN'],
    xLabelAngle: 60
});
});