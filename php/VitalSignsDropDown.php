<?php
include('connect.php');
$arr=array();
$result=mysqli_query($con,"select * from vital_signs order by Name");
while($row = mysqli_fetch_array($result)){
    array_push($arr, array('text'=>$row['Name'],'value'=>$row['VS_ID']));
}
echo json_encode($arr);