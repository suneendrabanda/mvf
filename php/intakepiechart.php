<?php
include('connect.php');
$arr=array();
$patient_id=$_GET['patient_id'];
 $result=mysqli_query($con,"select ie.date,ie.time,sum(ie.result) as result,pv.Patient_ID,it.Intake_ID,it.Name from intake_exam ie join patient_visit pv on pv.Visit_ID=ie.Visit_ID
                            join intake it on it.Intake_ID=ie.Intake_ID where pv.Patient_ID='$patient_id' group by it.Name");
  while($row = mysqli_fetch_array($result)) {
      
        $output=$row['Name'];
        $outputresult=(int)$row['result'];
         //array_push($arr, array('outputname'=> $output, 'result'=> $outputresult));
       if($output=='Total In'){
           // do nothing
       }
       else{
        array_push($arr, array('intakename'=> $output . " ".$outputresult , 'result'=> $outputresult));
       }

    }
    echo json_encode($arr);