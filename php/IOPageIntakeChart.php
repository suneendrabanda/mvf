<?php
include('connect.php');
$shift = $_GET['shiftvalue']; //'day';//
$startdate=$_GET['startdate']; //'2013-01-10';//
$enddate=$_GET['enddate'];  //'2015-01-13';//
$IntakeValue=$_GET['IntakeValue']; //'all';//
$patient_id=$_GET['patient_id'];//'71009';//
$arr=array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
$patient_visit_result=mysqli_query($con,"select * from patient_visit where patient_id='$patient_id'");
while($patient_visit_row = mysqli_fetch_array($patient_visit_result) ){
    $visit_id= $patient_visit_row['Visit_ID'];
    $room_id= $patient_visit_row['Room_ID'];
    $discharge_date=$patient_visit_row['Discharge_Date'];
    $visit_date=$patient_visit_row['Date'];
//    echo $discharge_date. ' in  loop ';
//    echo $visit_id.'<br>'.$room_id;
}
//if loop to return the records at the time page loads, it returns the records for updted or inserted in last 7 days.
if($shift=='null'){
    $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, it.Name, ie.date, ie.time, ie.result,ie.Visit_ID from intake it join intake_exam ie on it.Intake_ID = ie.Intake_ID join patient_visit pv on pv.Visit_ID = ie.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where X.date>=DATE(NOW())-INTERVAL 7 DAY and  X.VisiT_ID = '$visit_id' group by X.Name");
    while($row = mysqli_fetch_array($result)) {
        $Intake=$row['Name'];
        $Intakeresult=(int)$row['total'];
         array_push($arr, array('intakename'=> $Intake, 'result'=> $Intakeresult));
    }
}
else{
    
      if($shift=='day'){
          if($IntakeValue=='all'){
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from intake op join intake_exam oe on op.intake_ID = oe.intake_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30') group by X.Name");
            }
            else{
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.intake_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.intake_ID from intake op join intake_exam oe on op.intake_ID = oe.intake_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.intake_ID='$IntakeValue' and X.VisiT_ID = '$visit_id' and X.time in ('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30') group by X.Name");
            }
          while($row = mysqli_fetch_array($result)){
              $Intake=$row['Name'];
              $Intakeresult=(int)$row['total'];
              $time=$row['time'];
              if($Intake!='Total In'){
                  array_push($arr, array('intakename'=> $Intake." ".$Intakeresult, 'result'=> $Intakeresult));
              }
            }
      }
      elseif($shift=='evening'){
          if($IntakeValue=='all'){
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from intake op join intake_exam oe on op.intake_ID = oe.intake_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30') group by X.Name");
            }
            else{
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.intake_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.intake_ID from intake op join intake_exam oe on op.intake_ID = oe.intake_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.intake_ID='$IntakeValue' and X.VisiT_ID = '$visit_id' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30') group by X.Name");
            }
          while($row = mysqli_fetch_array($result)){
              $Intake=$row['Name'];
              $Intakeresult=(int)$row['total'];
              $time=$row['time'];
              if($Intake!='Total In'){
                array_push($arr, array('intakename'=> $Intake." ".$Intakeresult, 'result'=> $Intakeresult));
              }
         }
      }
      else{
          if($IntakeValue=='all'){
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from intake op join intake_exam oe on op.intake_ID = oe.intake_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30') group by X.Name");
            }
            else{
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.intake_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.intake_ID from intake op join intake_exam oe on op.intake_ID = oe.intake_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.intake_ID='$IntakeValue' and X.VisiT_ID = '$visit_id' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30') group by X.Name");
            }
          while($row = mysqli_fetch_array($result)){
              $Intake=$row['Name'];
              $Intakeresult=(int)$row['total'];
              $time=$row['time'];
              if($Intake!='Total In'){
                  array_push($arr, array('intakename'=> $Intake." ".$Intakeresult, 'result'=> $Intakeresult));
              }
            }
      }
  
}
    echo json_encode($arr);