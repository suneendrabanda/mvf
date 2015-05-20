
<?php
include('connect.php');



$vitalselected = $_GET['vitalvalue'];
$shiftselected = $_GET['shiftvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 
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
                                    join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('0700','0800','0900','1000','1100','1200','1300','1400') and X.name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date' order by X.time");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
    elseif($shiftselected=='evening'){
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID
                                    join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                   join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('1500','1600','1700','1800','1900','2000','2100','2200') and X.name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date'");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
      else{
        $result=mysqli_query($con,"select X.Name, X.result,  X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID
                                    join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID 
                                    join patient p on p.patient_ID = pv.patient_ID 
                                    join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('2300','2400','0100','0200','0300','0400','0500','0600') and X.name='$vitalselected' and X.date between '$formatted_start_date' and '$formatted_end_date'");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));
    }
    }
    

    //$result = mysqli_query($con,"select vs.Name, ve.time, ve.result  from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID where pr.fname = 'Sandra' and vs.Name = '$vitalselected'");
    
   
}

echo json_encode($arr);


