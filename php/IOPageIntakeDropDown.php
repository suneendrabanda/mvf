<?php
include('connect.php');
$arr=array();
$result=mysqli_query($con,"select * from intake order by Name");
while($row = mysqli_fetch_array($result)){
    $name= $row['Name'];
    $text= $row['Intake_ID'];
    array_push($arr, array('name'=>$name,'value'=>$text));
}
echo json_encode($arr);