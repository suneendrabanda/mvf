<?php
include('connect.php');
$arr=array();

$result=mysqli_query($con,"select * from test_item_cat where Tst_Cat_ID	='TCAT101' order by item_name");
while($row = mysqli_fetch_array($result)){
     $item_name=$row['item_name'];
    $Item_desc=$row['Item_desc'];
    array_push($arr, array('text'=>$item_name,'value'=>$item_name));
    
}
echo json_encode($arr);