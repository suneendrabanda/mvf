<?php
include('connect.php');
$arr=array();
//Get Patient Age
$patient_info=mysqli_query($con,"SELECT * FROM `person` p join patient pt on pt.`Person_ID`=p.`Person_ID` where Patient_id='P1013'");
while($row= mysqli_fetch_array($patient_info)){
    $age=(int)$row['Age'];
    //echo $age;
}
//Get Age Category
if($age<5){
    $age_cat='AGEC101';
}
elseif($age>5 && $age<15){
    $age_cat='AGEC103';
}
elseif($age>15 && $age<30){
    $age_cat='AGEC104';
}
elseif($age>30 && $age<50){
    $age_cat='AGEC105';
}
else{
    $age_cat='AGEC106'; 
}
$result=mysqli_query($con,"select  t.tst_cat_ID,tc.item_name,tc.Item_desc from test_item_cat tc join test_cat t on tc.Tst_cat_ID=t.Tst_cat_id where t.Tst_cat_ID='TCAT104' order by tc.item_name ");
while($row = mysqli_fetch_array($result)){
    $item_desc=$row['Item_desc'];
    $Range_results=mysqli_query($con,"SELECT * FROM `test_range_age_category` where `AgeCat_ID`='$age_cat' and `Tst_Cat_ID`='TCAT104' and Item_desc='$item_desc'");
    while($range_values = mysqli_fetch_array($Range_results)){
        $min=$range_values['Min_Range'];
        $max=$range_values['Max_Range'];
        $exact=$range_values['Exact_Range'];
        if(!$exact){
            array_push($arr, array('text'=>$row['item_name'],'value'=>$row['item_name'],'range'=>$min. ' - '.$max,'min'=>$min,'max'=>$max,'exact'=>'null' ));
        }
        else{
            array_push($arr, array('text'=>$row['item_name'],'value'=>$row['item_name'],'range'=>$exact,'min'=>'null','max'=>'null','exact'=>$exact ) );
        }
    }
    
}
echo json_encode($arr);