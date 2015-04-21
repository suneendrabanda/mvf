
<?php
include('connect.php');



$vitalselected = $_GET['vitalvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 
$shiftselected = $_GET['shiftvalue'];
$startdate=$_GET['startdate'];
$enddate=$_GET['enddate'];
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));

$arr = array();
 if($shiftselected=='day'){
        $result=mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno , X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('0700','0800','0900','1000','1100','1200','1300','1400') and X.name = 'BP' and X.date between '$formatted_start_date' and '$formatted_end_date' order by X.time");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));

    }
    }
    elseif($shiftselected=='evening'){
        $result=mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno , X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('0700','0800','0900','1000','1100','1200','1300','1400') and X.name = 'BP' and X.time in ('16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00') and X.date between '$formatted_start_date' and '$formatted_end_date'");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));

    }
    }
      else{
        $result=mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno , X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('2300','2400','0100','0200','0300','0400','0500','0600') and X.name = 'BP' and X.time in ('24:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00') and X.date between '$formatted_start_date' and '$formatted_end_date'");
        
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));

    }
    }

        
   
echo json_encode($arr);


