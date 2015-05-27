<?php
include('connect.php');
$arr=array();
$Alert_Count=0;
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
//echo $age_cat;
// GET VISIT_ID
$patient_visit_result=mysqli_query($con,"select * from patient_visit where patient_id='P1013'");
while($patient_visit_row = mysqli_fetch_array($patient_visit_result) ){
    $visit_id= $patient_visit_row['Visit_ID'];
    $room_id= $patient_visit_row['Room_ID'];
    $discharge_date=$patient_visit_row['Discharge_Date'];
    $visit_date=$patient_visit_row['Date'];
}
$Hematology_results=mysqli_query($con,"select * from patient_exam where Visit_ID='$visit_id' and Tst_Cat_ID='TCAT101'");
while($patient_exam_row = mysqli_fetch_array($Hematology_results) ){
    $Item_desc=$patient_exam_row['Item_desc'];
    $result=$patient_exam_row['Result'];
    $date=$patient_exam_row['Date'];
    // Fetch Item Name from Test_Item_Cat
    $Item_name_result=mysqli_query($con,"select * from test_item_cat where Item_desc='$Item_desc'");
    while($Item_name_row = mysqli_fetch_array($Item_name_result)){
        $Item_name=$Item_name_row['Item_desc'];
    }
    // Fetch MIN MAX EXACT VALUES from test range category
    $Max_Min_Values=mysqli_query($con,"select * from test_range_age_category where Item_desc='$Item_desc' and AgeCat_ID='$age_cat'");
    while($Max_Min_Row= mysqli_fetch_array($Max_Min_Values)){
        $Max_Value=$Max_Min_Row['Max_Range'];
        $Min_Value=$Max_Min_Row['Min_Range'];
        $Exact_Value=$Max_Min_Row['Exact_Range'];
    }
    if(!$Exact_Value){
        
        if($result>$Max_Value || $result<$Min_Value){
            $Alert_Count++;
            array_push($arr, array('Name'=>$Item_name,'Result'=>$result,'Min_Value'=>$Min_Value,'Max_Value'=>$Max_Value,'Exact_Range'=>$Exact_Value,'date'=>$date)); 
        }
    }
    else{
        //echo 'INR inside';
        if($result != $Exact_Value){
            $Alert_Count++;
            array_push($arr, array('Name'=>$Item_name,'Result'=>$result,'Min_Value'=>$Min_Value,'Max_Value'=>$Max_Value,'Exact_Range'=>$Exact_Value,'date'=>$date));
        }
    }
}
//echo $Alert_Count;
  echo json_encode($arr);
//echo $visit_id;