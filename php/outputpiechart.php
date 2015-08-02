<?php
include('connect.php');
$arr=array();
$total_out=0;
$patient_id=$_GET['patient_id'];
 $result=mysqli_query($con,"select ie.date,ie.time,sum(ie.result) as result,pv.Patient_ID,it.Output_ID,it.Name from output_exam ie join patient_visit pv on pv.Visit_ID=ie.Visit_ID
                            join output it on it.Output_ID=ie.Output_ID where pv.Patient_ID='$patient_id' group by it.Name order by ie.date DESC");
  while($row = mysqli_fetch_array($result)) {
       $output=$row['Name'];
       $outputresult=(int)$row['result'];
       $date=$row['date'];
       $total_out=$total_out+$outputresult;
       $time=$row['time'];
       array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult,'date'=>$date,'time'=>$time));
    }
    $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
   if($NO_OF_ROWS_FETCH>0){
        array_push($arr, array('outputname'=> 'Total_out'. " ".$total_out, 'result'=> $total_out));
   }
    echo json_encode($arr);