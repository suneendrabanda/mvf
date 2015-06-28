<?php
include('connect.php');
$testname=$_GET['hematologyname'];//'aPTT';//
$date=$_GET['date'];//'01/12/2013';//
$time=$_GET['time'];//'02:00';//
$result=$_GET['result'];//'25';//
$patient_id=$_GET['patient_id'];//'71013';//
$formatted_date=  date("Y-m-d",strtotime($date));
$flag=0; // to check if records already exist in the table or not
$arr=array();
//Get Hematology desc from Item_test_Cat table
$Item_desc_name=mysqli_query($con,"select * from test_item_cat where item_name='$testname' and Tst_Cat_ID='TCAT101'");
while($Item_desc_row = mysqli_fetch_array($Item_desc_name)){
    $testname=$Item_desc_row['Item_desc'];
}
$patient_visit_result=mysqli_query($con,"select * from patient_visit where patient_id='$patient_id'");
while($patient_visit_row = mysqli_fetch_array($patient_visit_result) ){
    $visit_id= $patient_visit_row['Visit_ID'];
    $room_id= $patient_visit_row['Room_ID'];
    $discharge_date=$patient_visit_row['Discharge_Date'];
    $visit_date=$patient_visit_row['Date'];
}
// check if patient is discharged or not, if discharged execute else loop if not execute if loop
if(!$discharge_date){
    $patient_result=mysqli_query($con,"select * from patient_exam");
    //check if record exist in patient_exam table. if exist set $flag to 1
    while($row = mysqli_fetch_array($patient_result)){
         if($testname==$row['Item_desc'] && $formatted_date == $row['Date'] && $time==$row['Time'] && $visit_id==$row['Visit_ID'] ){
               $flag=1;
               //echo 'flag set to one';
            }
      }
    if($flag==1){
        $query="update patient_exam set result='$result' where Item_desc='$testname' and visit_id='$visit_id' and date='$formatted_date' and time='$time'";
        $updateresult=  mysqli_query($con, $query);
        //echo 'update query executed';
    }
    else{
         $query="insert into patient_exam (visit_id,Tst_Cat_ID,Item_desc,date,time,result) "
                                . "values('$visit_id','TCAT101','$testname','$formatted_date','$time','$result')";
         $updateresult=  mysqli_query($con, $query);
         //echo 'insert query executed';
    }
   $info="result Updated";
   array_push($arr, array('information'=>$info)); 
}
else{
    $info="You can't update  values because patient was already discharged on  $discharge_date";
     array_push($arr, array('information'=>$info)); 
              
  }
  echo json_encode($arr);

