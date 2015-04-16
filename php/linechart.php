
<?php
include('connect.php');



$vitalselected = $_GET['vitalvalue'];
$shiftselected = 'day';//$_GET['shiftvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 
$startdate=$_GET['startdate'];
$enddate=$_GET['enddate'];
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
if($vitalselected!='bp'){
    if($shiftselected=='day'){
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID
                                    join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date' order by X.time");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
    elseif($shiftselected=='evening'){
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID
                                    join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00') and X.name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date'");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
      else{
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID
                                    join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('24:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00') and X.name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date'");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
    

    //$result = mysqli_query($con,"select vs.Name, ve.time, ve.result  from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID where pr.fname = 'Sandra' and vs.Name = '$vitalselected'");
    
   
}

echo json_encode($arr);


