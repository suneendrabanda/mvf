
<?php
ini_set('memory_limit','1024M');
include('connect.php');
$vitalselected =  $_GET['vitalvalue']; //'all';  // 
$shiftselected = $_GET['shiftvalue'];//'evening'; //
$startdate=$_GET['startdate'];  // '2013-01-12';   // 
$enddate= $_GET['enddate']; //'2013-01-12';   // 
$patient_id=$_GET['patient_id'];//'71013';//
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
//get patient visit id
$visit_result= mysqli_query($con, "select * from patient_visit where Patient_ID=$patient_id");
while($patient_visit_row=mysqli_fetch_array($visit_result)){
    $visit_id=$patient_visit_row['Visit_ID'];
}
if($shiftselected=='day'){
      $shift= ['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30'];
   }
else if($shiftselected==='evening'){
      $shift= ['15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'];
   }
else{
      $shift= ['01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30'];
    }
if($Today_date==$formatted_start_date){// This condition execute when page loaded
    //echo 'dates equal';
    $date_diff=1;
    $result=mysqli_query($con,"select vs.Name,ve.Date,ve.Time,ve.Result,ve.`Visit_ID` from vs_exam ve join vital_signs vs on vs.VS_ID=ve.VS_ID where `Visit_ID`='$visit_id' and ve.date=(select max(`Date`) from vs_exam where `Visit_ID`='$visit_id') order by ve.date,ve.time,vs.Name");
   
}
else{
    if($vitalselected=='all'){
        $result=mysqli_query($con,"select vs.Name,ve.Date,ve.Time,ve.Result,ve.`Visit_ID` from vs_exam ve join vital_signs vs on vs.VS_ID=ve.VS_ID where `Visit_ID`='$visit_id' and ve.date between '$formatted_start_date' and '$formatted_end_date' order by ve.date,ve.time,vs.Name");
    }
    else{
        $result=mysqli_query($con,"select vs.Name,ve.Date,ve.Time,ve.Result,ve.`Visit_ID`,ve.VS_ID from vs_exam ve join vital_signs vs on vs.VS_ID=ve.VS_ID where `Visit_ID`='$visit_id' and ve.date between '$formatted_start_date' and '$formatted_end_date' and vs.Name='$vitalselected' order by ve.date,ve.time,vs.Name");
    }
}
if($shiftselected=='day'){
  $i=0;
  while($row = mysqli_fetch_array($result)) {
      $modified_time=(int)str_replace(":","",$row['Time']);
      if($modified_time>=700 && $modified_time<1500){
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
      $modified_time=(int)str_replace(":","",$row['Time']);
      if($modified_time>=(int)1500 && $modified_time<2300){
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
      $modified_time=(int)str_replace(":","",$row['Time']);
      if($modified_time>=2300 || $modified_time<700){
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
      while($timevalue<16){
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
       // array_push($arr, array('date'=>$final[0],'time'=>$final[1],'BP'=>$final[2],'Pain'=>$final[3],'Pulse'=>$final[4],'Resp'=>$final[4],'SaO2'=>$final[5],'Temp'=>$final[6]));
       $timevalue++;
       $v=0;
      }
      $startdate=date('Y-m-d',strtotime("$startdate +1 day"));
      $timevalue=0;
  }
 echo json_encode($arr);
 