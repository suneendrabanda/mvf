<?php
include('connect.php');
$shift = $_GET['shiftvalue']; //'day';//
$startdate=$_GET['startdate']; //'2013-01-10';//
$enddate=$_GET['enddate'];  //'2013-01-13';//
$IntakeValue=$_GET['IntakeValue']; //'IN101';//
$arr=array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
//if loop to return the records at the time page loads, it returns the records for updted or inserted in last 7 days.
if($shift=='null'){
    $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, it.Name, ie.date, ie.time, ie.result,ie.Visit_ID from intake it join intake_exam ie on it.Intake_ID = ie.Intake_ID join Patient_Visit pv on pv.Visit_ID = ie.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where X.date>=DATE(NOW())-INTERVAL 7 DAY and  X.VisiT_ID = 'V141' group by X.Name");
    while($row = mysqli_fetch_array($result)) {
        $Intake=$row['Name'];
        $Intakeresult=(int)$row['total'];
         array_push($arr, array('intakename'=> $Intake, 'result'=> $Intakeresult));
    }
}
else{
    // check for wheather to retrieve all the records for all output ID's
    if($IntakeValue=='all'){
          $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from intake op join intake_Exam oe on op.intake_ID = oe.intake_ID join Patient_Visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = 'V141' group by X.Name");
      }
      else{
          $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.intake_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.intake_ID from intake op join intake_Exam oe on op.intake_ID = oe.intake_ID join Patient_Visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.intake_ID='$IntakeValue' and X.VisiT_ID = 'V141' group by X.Name");
      }// end of check
      if($shift=='day'){
          while($row = mysqli_fetch_array($result)){
              $Intake=$row['Name'];
              $Intakeresult=(int)$row['total'];
              $time=(int)$row['time'];
              if($time>0700 && $time<1400){
                  array_push($arr, array('intakename'=> $Intake, 'result'=> $Intakeresult));
              }
         }
      }
      elseif($shift=='evening'){
          while($row = mysqli_fetch_array($result)){
              $Intake=$row['Name'];
              $Intakeresult=(int)$row['total'];
              $time=(int)$row['time'];
              if($time>1400 && $time<2200){
                  array_push($arr, array('intakename'=> $Intake, 'result'=> $Intakeresult));
              }
         }
      }
      else{
          while($row = mysqli_fetch_array($result)){
              $Intake=$row['Name'];
              $Intakeresult=(int)$row['total'];
              $time=(int)$row['time'];
              if($time>2200 || $time<0700){
                  array_push($arr, array('intakename'=> $Intake, 'result'=> $Intakeresult));
              }
         }
      }
  
}
    echo json_encode($arr);