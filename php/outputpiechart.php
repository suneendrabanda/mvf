<?php
include('connect.php');
$arr=array();

 $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result from output op join output_Exam oe on op.output_ID = oe.output_ID join Patient_Visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where X.fname = 'Sandra' group by X.Name");
  while($row = mysqli_fetch_array($result)) {
      
        $output=$row['Name'];
        $outputresult=(int)$row['total'];
         //array_push($arr, array('outputname'=> $output, 'result'=> $outputresult));
       if($output=='Total Out'){
           // do nothing
       }
       else{
        array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
       }

    }
    echo json_encode($arr);