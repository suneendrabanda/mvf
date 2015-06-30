
<?php
include('connect.php');
$vitalselected = $_GET['vitalvalue'];
$shiftselected = $_GET['shiftvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 
$startdate=$_GET['startdate'];
$enddate=$_GET['enddate'];
$patient_id=$_GET['patient_id'];
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
if($vitalselected!='bp'){
    if($shiftselected=='day'){
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time,X.Patient_ID from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result,pv.Patient_ID from vital_signs vs join vs_exam ve on vs.VS_ID = ve.VS_ID
                                    join patient_visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.Patient_ID = '$patient_id' and X.Name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date' and X.time in('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30') order by X.time");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
    elseif($shiftselected=='evening'){
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time,X.Patient_ID from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result,pv.Patient_ID from vital_signs vs join vs_exam ve on vs.VS_ID = ve.VS_ID
                                    join patient_visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.Patient_ID = '$patient_id' and X.Name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30') order by X.time");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
      else{
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time,X.Patient_ID from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result,pv.Patient_ID from vital_signs vs join vs_exam ve on vs.VS_ID = ve.VS_ID
                                    join patient_visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.Patient_ID = '$patient_id' and X.Name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30') order by X.time");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
    

    //$result = mysqli_query($con,"select vs.Name, ve.time, ve.result  from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID where pr.fname = 'Sandra' and vs.Name = '$vitalselected'");
    
   
}

echo json_encode($arr);


