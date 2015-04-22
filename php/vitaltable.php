<?php
   ini_set('memory_limit','1024M');
include('connect.php');
$vitalselected =     $_GET['vitalvalue']; //'all';

$shiftselected = $_GET['shiftvalue'];
$startdate=      $_GET['startdate'];  //'2013-01-12'; 
$enddate=        $_GET['enddate']; //'2013-01-12'; 
$arr = array();
$final=array();
//ini_set('memory_limit', '-1');
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));

$i=0;

$vital=array('BP','Pain','Pulse','Respiration','SaO2','Temperature');
$value= array();
$time=array();
$datearray=array();
        if($shiftselected=='day'){
            $shift= array('0700','0800','0900','1000','1100','1200','1300','1400');
        }
        elseif($shiftselected=='evening'){
            $shift= array('1500','1600','1700','1800','1900','2000','2100','2200');
        }
        else{
            $shift= array('2300','2400','0100','0200','0300','0400','0500','0600');
        }
        if($shiftselected=='day'){
                if($vitalselected=='all'){
                     $result=mysqli_query($con,"select X.Name, X.result, X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('0700','0800','0900','1000','1100','1200','1300','1400') and X.date between '$formatted_start_date' and '$formatted_end_date' order by X.date,X.time,X.Name");
                }
                else{
                    $result=mysqli_query($con,"select X.Name, X.result, X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('0700','0800','0900','1000','1100','1200','1300','1400') and X.date between '$formatted_start_date' and '$formatted_end_date' and X.Name='$vitalselected' order by X.date,X.time,X.Name");
                }
        }
        elseif($shiftselected=='evening'){
            if($vitalselected=='all'){
                     $result=mysqli_query($con,"select X.Name, X.result, X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('1500','1600','1700','1800','1900','2000','2100','2200') and X.date between '$formatted_start_date' and '$formatted_end_date' order by X.date,X.time,X.Name");
                }
                else{
                    $result=mysqli_query($con,"select X.Name, X.result, X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('1500','1600','1700','1800','1900','2000','2100','2200') and X.date between '$formatted_start_date' and '$formatted_end_date' and X.Name='$vitalselected' order by X.date,X.time,X.Name");
                }
        }
        else{
            if($vitalselected=='all'){
                     $result=mysqli_query($con,"select X.Name, X.result, X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('2300','2400','0100','0200','0300','0400','0500','0600') and X.date between '$formatted_start_date' and '$formatted_end_date' order by X.date,X.time,X.Name");
                }
                else{
                    $result=mysqli_query($con,"select X.Name, X.result, X.date, X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.time in ('2300','2400','0100','0200','0300','0400','0500','0600') and X.date between '$formatted_start_date' and '$formatted_end_date' and X.Name='$vitalselected' order by X.date,X.time,X.Name");
                }
        }

 //array_push($arr, array('vitalname'=>'Time','t1'=>'08:00','t2'=>'09:00','t3'=>'10:00','t4'=>'11:00','t5'=>'12;00','t6'=>'13:00','t7'=>'14:00','t8'=>'15:00'));
 while($row = mysqli_fetch_array($result)) {
        $vitalname=$row['Name'];
        $timesql=(int)$row['time'];
        $vitalresult=$row['result'];
        $value[$i]=$vitalresult;
        //echo $value[$i].'     --------------';
        $time[$i]=$timesql;
        $datearray[$i]=$row['date'];
        //echo $time[$i].'<br>';
        $i++;
 }

 $j=0;

 $diff=  floor((strtotime($formatted_end_date)-  strtotime($formatted_start_date))/(60*60*24))+1;

 $loop=0;
 if($vitalselected=='all'){
    array_push($arr,array('date'=>'Date','time'=>'Time','t1'=>  ucfirst($vital[0]),'t2'=>  ucfirst($vital[1]),'t3'=>  ucfirst($vital[2]),'t4'=>  ucfirst($vital[3]),'t5'=>  ucfirst($vital[4]),'t6'=>  ucfirst($vital[5])));
 }
 else{
     array_push($arr,array('date'=>'Date','time'=>'Time','t1'=>  ucfirst($vitalselected),'t2'=>$vital[1],'t3'=>$vital[2],'t4'=>$vital[3],'t5'=>$vital[4],'t6'=>$vital[5]));
 }
 while($loop<$diff){
     $daytime=0;
    // echo $startdate.' and '.$datearray[0].'<br>';
     if($j<  sizeof($datearray) && $formatted_start_date==$datearray[$j]){
         //echo 'dates are equal';
        while($daytime<8){
             for($k=0;$k<8;$k++){
                 if($k==0){
                    $final[$k]=$formatted_start_date;
                }
                elseif($k==1){
                    $final[$k]=$shift[$daytime];
                   
                }
                else{
                    if($j<  sizeof($datearray) && $time[$j]==$final[1]){
                        $final[$k]=$value[$j];
                        $j++;
                    }
                    else{
                        $final[$k]='-';
                    }
                }
             }
             array_push($arr,array('date'=>$final[0],'time'=>$final[1],'t1'=>$final[2],'t2'=>$final[3],'t3'=>$final[4],'t4'=>$final[5],'t5'=>$final[6],'t6'=>$final[7]));
             $daytime++;
         }
         
         $formatted_start_date=date('Y-m-d',strtotime("$formatted_start_date +1 day"));
    }
     else{
         
        // echo $startdate.' in else'.'<br>';
         
         while($daytime<8){
             for($k=0;$k<8;$k++){
                if($k==0){
                    $final[$k]=$formatted_start_date;
                }
                elseif($k==1 ){
                    $final[$k]=$shift[$daytime];
                    
                }
                else{
                    $final[$k]='-';
                }
                
          }
          array_push($arr,array('date'=>$final[0],'time'=>$final[1],'t1'=>$final[2],'t2'=>$final[3],'t3'=>$final[4],'t4'=>$final[5],'t5'=>$final[6],'t6'=>$final[7]));
          $daytime++;
         }
         $formatted_start_date=date('Y-m-d',strtotime("$formatted_start_date +1 day"));
     }
     $loop++;
 }
 echo json_encode($arr);
 
 
 
 

