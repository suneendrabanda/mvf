<?php
ini_set('memory_limit','1024M');
include('connect.php');
$vitalselected =  $_GET['vitalvalue']; //'all';  // 
$shiftselected =$_GET['shiftvalue'];//'night'; // 
$startdate=$_GET['startdate'];  // '2015-06-26';   // 
$enddate= $_GET['enddate']; //'2013-01-12';   // 
$arr=array();$value=array();$time=array();$date=array();$item_name=array();$final=array();$lab_name=array();
//ini_set('memory_limit', '-1');
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$startdate=$formatted_start_date;
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
$date_diff= floor((strtotime($enddate)-  strtotime($startdate))/(60*60*24))+1;
date_default_timezone_set("America/Chicago");
$Today_date=date('Y-m-d');
//echo 'today = '.$Today_date;
$vital_list=mysqli_query($con,"select * from vital_signs order by Name");
$q=0;
while($vital_list_row = mysqli_fetch_array($vital_list)){
    $lab_name[$q]=$vital_list_row['Name'];
    $q++;
}
if($shiftselected=='day'){
    $shift= array('0700','0800','0900','1000','1100','1200','1300','1400');
}
elseif($shiftselected=='evening'){
    $shift= array('1500','1600','1700','1800','1900','2000','2100','2200');
}
else{
    $shift= array('0100','0200','0300','0400','0500','0600','2300','2400',);
}
if($Today_date==$formatted_start_date){// This condition execute when page loaded
    //echo 'dates equal';
    $date_diff=1;
    $result=mysqli_query($con,"select vs.Name,ve.Date,ve.Time,ve.Result,ve.`Visit_ID` from vs_exam ve join vital_signs vs on vs.VS_ID=ve.VS_ID where `Visit_ID`='V141' and ve.date=(select max(`Date`) from vs_exam where `Visit_ID`='V141') order by ve.date,ve.time,vs.Name");
   
}
else{
    if($vitalselected=='all'){
        $result=mysqli_query($con,"select vs.Name,ve.Date,ve.Time,ve.Result,ve.`Visit_ID` from vs_exam ve join vital_signs vs on vs.VS_ID=ve.VS_ID where `Visit_ID`='V141' and ve.date between '$formatted_start_date' and '$formatted_end_date' order by ve.date,ve.time,vs.Name");
    }
    else{
        $result=mysqli_query($con,"select vs.Name,ve.Date,ve.Time,ve.Result,ve.`Visit_ID`,ve.VS_ID from vs_exam ve join vital_signs vs on vs.VS_ID=ve.VS_ID where `Visit_ID`='V141' and ve.date between '$formatted_start_date' and '$formatted_end_date' and vs.Name='$vitalselected' order by ve.date,ve.time,vs.Name");
    }
}
if($shiftselected=='day'){
  $i=0;
  while($row = mysqli_fetch_array($result)) {
      if($row['Time']>=0700 && $row['Time']<=1400){
        $item_name[$i]=$row['Name'];
        $value[$i]=$row['Result'];
        $time[$i]=$row['Time'];
        $date[$i]=$row['Date'];
        $i++;
        //echo $item_name[$i].'  '.$value[$i].'  '.$time[$i].'  '.$date[$i].'<br>';  
      }
      
  }
   //make startdate equal to max date fetch from the table
        if($Today_date==$formatted_start_date){
            if(sizeof($date)>0){
                $startdate=$date[0];
            }
       }
}
elseif ($shiftselected=='evening') {
    $i=0;
  while($row = mysqli_fetch_array($result)) {
      //echo $row['Time'].'<br>';
      if($row['Time']>1400 && $row['Time']<=2200){
        $item_name[$i]=$row['Name'];
        $value[$i]=$row['Result'];
        $time[$i]=$row['Time'];
        $date[$i]=$row['Date'];
        //echo $item_name[$i].'  '.$value[$i].'  '.$time[$i].'  '.$date[$i].'<br>'; 
        $i++;
         }
      }
      //make startdate equal to max date fetch from the table
        if($Today_date==$formatted_start_date){
            if(sizeof($date)>0){
                $startdate=$date[0];
            }
       }
}
else{
    $i=0;
  while($row = mysqli_fetch_array($result)) {
      if($row['Time']>2200 || $row['Time']<=0700){
        $item_name[$i]=$row['Name'];
        $value[$i]=$row['Result'];
        $time[$i]=$row['Time'];
        $date[$i]=$row['Date'];
        //echo $item_name[$i].'  '.$value[$i].'  '.$time[$i].'  '.$date[$i].'<br>';  
        $i++;
      }
      
    }
      //make startdate equal to max date fetch from the table
        if($Today_date==$formatted_start_date){
            if(sizeof($date)>0){
                $startdate=$date[0];
            }
            
        }
}


  //echo sizeof($date).'<br>';
  $r=0;//for result array's
  $v=0;// variable for final array to increament
  $timevalue=0;// variable for time 
  for($i=0;$i<$date_diff;$i++){//loop tp repeat dates
      //echo $startdate.'<br>';
      while($timevalue<8){
          for($v=0;$v<11;$v++){//loop to repeat time based on shift  to enter row values
            if($v==0){
                $final[$v]=$startdate;// enter date 
            }
            elseif ($v==1) {
                $final[$v]=$shift[$timevalue];
              // echo 'time entered '.$shift[$timevalue].'<br>';
             }
            else{
              //  echo '$r = '.$r.' sizeof($date) = '.sizeof($date).'$date[$r] = '.$date[$r].'$startdate = '.$startdate.'$time[$r] = '.$time[$r].'$timevalue = '.$timevalue.'$shift[$timevalue] = '.$shift[$timevalue];
                if($r<sizeof($date) && $date[$r]==$startdate && $time[$r]==$shift[$timevalue]){
                   // echo ' r value in if == '.$r.'<br>';
                    if($item_name[$r]==$lab_name[$v-2]){
                        $final[$v]=$value[$r];
                      // echo 'value entered <br>';
                        $r++;
                    }
                    else{
                         $final[$v]='-';
                       // echo 'entered - in if loop';
                    }
                    
                }
                else{
                    $final[$v]='-';
                   // echo ' - entered <br>';
                }
            }
          }
       array_push($arr, array('date'=>$final[0],'time'=>$final[1],'BP'=>$final[2],'Height'=>$final[3],'Pain'=>$final[4],'Pulse'=>$final[5],'Resp'=>$final[6],'SaO2'=>$final[7],'Temp'=>$final[8],'Weight'=>$final[9]));
       $timevalue++;
       $v=0;
      }
      $startdate=date('Y-m-d',strtotime("$startdate +1 day"));
      $timevalue=0;
  }
 echo json_encode($arr);
 