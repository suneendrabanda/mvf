<?php
include('connect.php');
$intakename = $_GET['intakenm'];//'PO';
$intakedate =$_GET['itkdate']; //'2014-02-01';// 
$intaketime=$_GET['itktime']; //'0800'; //
$intakeresult=$_GET['itkresult']; //'100';
$patient_id=$_GET['patient_id'];
$formatted_date=  date("Y-m-d",strtotime($intakedate));
$arr=array();
//echo $formatted_date.'  '.$intakeresult;
$flag=0;//flag to check wheather record exist or not
$patient_visit_result=mysqli_query($con,"select * from patient_visit where patient_id='$patient_id'");
while($patient_visit_row = mysqli_fetch_array($patient_visit_result) ){
    $visit_id= $patient_visit_row['Visit_ID'];
    $room_id= $patient_visit_row['Room_ID'];
    $discharge_date=$patient_visit_row['Discharge_Date'];
    $visit_date=$patient_visit_row['Date'];
//    echo $discharge_date. ' in  loop ';
//    echo $visit_id.'<br>'.$room_id;
}
if(!$discharge_date){
    $result=mysqli_query($con,"select * from intake_exam");
    while($row = mysqli_fetch_array($result)){
        if($intakename==$row['Intake_ID'] && $formatted_date == $row['Date'] && $intaketime==$row['Time']&& $visit_id==$row['Visit_ID'] ){
            $flag=1;
        }
    }
    if($flag==1){
        $query="update intake_exam set result='$intakeresult' where intake_ID='$intakename' and visit_id='$visit_id' and date='$formatted_date' and room_id='$room_id' and time='$intaketime'";
        $updateresult=  mysqli_query($con, $query);
    }
    else{
        $query="insert into intake_exam (intake_id,visit_id,room_id,date,time,result) "
                . "values('$intakename','$visit_id','$room_id','$formatted_date','$intaketime','$intakeresult')";
        $updateresult=  mysqli_query($con, $query);
    }
    $info="result Updated";
   array_push($arr, array('information'=>$info)); 
}
else{
    $info="You can't update Output values because patient was already discharged on  $discharge_date";
     array_push($arr, array('information'=>$info)); 
              
  }
  echo json_encode($arr);
   
    