
<?php
include('connect.php');
$vitalselected = $_GET['vitalvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 
$shiftselected = $_GET['shiftvalue'];
$startdate=$_GET['startdate'];
$enddate=$_GET['enddate'];
$patient_id=$_GET['patient_id'];
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));

$arr = array();
 if($shiftselected=='day'){
        $result=mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno , X.time,X.patient_id from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result,pv.patient_id from vital_signs vs join vs_exam ve on vs.VS_ID = ve.VS_ID join patient_visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.name = 'BP' and X.patient_id='$patient_id' and X.date between '$formatted_start_date' and '$formatted_end_date' and X.time in ('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30') order by X.time");
        $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
        if($NO_OF_ROWS_FETCH<=0){
            array_push($arr, array('vitalnum'=> 'null', 'vitaldeno'=> 'null','time' =>'null' ));
        }
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));
        //array_push($arr, array('vitalnum'=> $vitalresult,'vitaldeno'=> 'null','time' =>$time ));

    }
    }
    elseif($shiftselected=='evening'){
        $result=mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno , X.time,X.patient_id from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result,pv.patient_id from vital_signs vs join vs_exam ve on vs.VS_ID = ve.VS_ID join patient_visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.name = 'BP' and X.patient_id='$patient_id' and X.date between '$formatted_start_date' and '$formatted_end_date' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30') order by X.time");
        $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
        if($NO_OF_ROWS_FETCH<=0){
            array_push($arr, array('vitalnum'=> 'null', 'vitaldeno'=> 'null','time' =>'null' ));
        }
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));

    }
    }
      else{
        $result=mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno , X.time,X.patient_id from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result,pv.patient_id from vital_signs vs join vs_exam ve on vs.VS_ID = ve.VS_ID join patient_visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.name = 'BP' and X.patient_id='$patient_id' and X.date between '$formatted_start_date' and '$formatted_end_date' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30') order by X.time");
        $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
        if($NO_OF_ROWS_FETCH<=0){
            array_push($arr, array('vitalnum'=> 'null', 'vitaldeno'=> 'null','time' =>'null' ));
        }
         while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));

    }
    }

        
   
echo json_encode($arr);


