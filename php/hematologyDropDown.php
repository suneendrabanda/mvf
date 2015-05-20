<?php
include('connect.php');
$arr=array();
$result=mysqli_query($con,"select  t.tst_cat_ID,tc.item_name from test_item_cat tc join test_cat t on tc.Tst_cat_ID=t.Tst_cat_id where t.Tst_cat_ID='TCAT101'");
while($row = mysqli_fetch_array($result)){
    array_push($arr, array('text'=>$row['item_name'],'value'=>$row['item_name']) );
}
echo json_encode($arr);