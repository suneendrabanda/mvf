<?php
include('connect.php');
$arr=array();

 $result=mysqli_query($con,"select X.Name, sum(X.result) as intake , X.date, X.time from (select pr.fname, pr.lname, ip.Name, ie.date, ie.time, ie.result from intake ip join intake_Exam ie on ip.intake_ID = ie.intake_ID join Patient_Visit pv on pv.Visit_ID = ie.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  "
                    . " where X.time in('0700','0800','0900','1000','1100','1200','1300','1400') and  X.fname = 'Hunter' group by X.Name");
  while($row = mysqli_fetch_array($result)) {
      
        $output=$row['Name'];
        $outputresult=(int)$row['intake'];
         //array_push($arr, array('outputname'=> $output, 'result'=> $outputresult));
       if($output=='Total In'){
           // do nothing
       }
       else{
        array_push($arr, array('intakename'=> $output . " ".$outputresult , 'result'=> $outputresult));
       }

    }
    echo json_encode($arr);