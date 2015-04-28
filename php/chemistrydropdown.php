<?php
include('connect.php');
$arr=array();
$result=mysqli_query($con,"select * from test_item_cat");
while($row = mysqli_fetch_array($result)){
    array_push($arr, array('text'=>$row['item_name'],'value'=>$row['item_name']) );
}
echo json_encode($arr);