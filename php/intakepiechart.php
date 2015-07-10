<?php
include('connect.php');
$arr=array();
$total_intake=0;
$patient_id=$_GET['patient_id'];
 $result=mysqli_query($con,"select ie.date,ie.time,sum(ie.result) as result,pv.Patient_ID,it.Intake_ID,it.Name from intake_exam ie join patient_visit pv on pv.Visit_ID=ie.Visit_ID
                            join intake it on it.Intake_ID=ie.Intake_ID where pv.Patient_ID='$patient_id' group by it.Name");
  while($row = mysqli_fetch_array($result)) {
        $output=$row['Name'];
        $outputresult=(int)$row['result'];
        $total_intake=$total_intake+$outputresult;
        array_push($arr, array('intakename'=> $output . " ".$outputresult , 'result'=> $outputresult));
      }
   $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
   if($NO_OF_ROWS_FETCH>0){
       array_push($arr, array('intakename'=> 'Total_In' . " ".$total_intake , 'result'=> $total_intake));
   }
    echo json_encode($arr);