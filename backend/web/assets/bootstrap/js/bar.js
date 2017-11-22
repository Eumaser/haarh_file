var lab=[];
var data=[];
<?php 

$array=array
(
    '0' => array
        (
            'product' => 'Cash',
            'total' => 21
        ),
    '1' => array
        (
            'product' => 'Credit Card',
            'total' => 10
        ),
    '2' => array
        (
            'product' => 'Nets Payment',
            'total' => 13
        ),
);

foreach($array as $tem)
{

    ?>

    lab.push('<?php echo $tem['product']; ?>');
    data.push('<?php echo $tem['total']; ?>');
<?php }

?>

var barChartData = {
    labels : lab,
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            data : data
        },

    ]

}

var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);