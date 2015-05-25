<?php
include('connect.php');
$arr=array();
$result=mysqli_query($con,"select  t.tst_cat_ID,tc.item_name,tc.Item_desc from test_item_cat tc join test_cat t on tc.Tst_cat_ID=t.Tst_cat_id where t.Tst_cat_ID='TCAT101'");
while($row = mysqli_fetch_array($result)){
    array_push($arr, array('text'=>$row['item_name'],'value'=>$row['Item_desc']) );
}
echo json_encode($arr);