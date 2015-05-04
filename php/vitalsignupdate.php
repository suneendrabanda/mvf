<?php
include('connect.php');

//$vitalname=$_GET['vitalvalue'];
$date=$_GET['datevalue'];
//$time=$_GET['timevalue'];
//$vitalresult=$_GET['vitalresult'];
$formatted_date=  date("Y-m-d",strtotime($date));
echo $formatted_date;
$vitalid=array("Pulse"=>"VS102","BP"=>"VS101","Resp"=>"VS103","Temp"=>"VS104","SaO2"=>"VS105","Pain"=>"VS106");
$result=mysqli_query($con,"select * from vs_exam");
$flag=0;
$patient_visit_result=mysqli_query($con,"select * from patient_visit where patient_id='P1013'");
while($patient_visit_row = mysqli_fetch_array($patient_visit_result) ){
    $visit_id= $patient_visit_row['Visit_ID'];
    $room_id= $patient_visit_row['Room_ID'];
    $discharge_date=$patient_visit_row['Discharge_Date'];
//    echo $discharge_date. ' in  loop ';
//    echo $visit_id.'<br>'.$room_id;
}
//echo $discharge_date;
$arr= array();
//if(!$discharge_date){
//        while($row = mysqli_fetch_array($result)){
//            if($vitalid[$vitalname]==$row['VS_ID'] && $formatted_date == $row['Date'] && $time==$row['Time'] ){
//                $flag=1;
//              //  echo 'vitalid '.$vitalid[$vitalname];
//            }
//        }
//        if($flag==1){
//            $query="update vs_exam set result='$result' where VS_ID='$vitalid[$vitalname]' and visit_id='$visit_id' and date='$formatted_date' and room_id='$room_id' and time='$time' ";
//            $updateresult=  mysqli_query($con, $query);
//        }
//        else{
//            $query="insert into vs_exam (vs_id,visit_id,room_id,date,time,result) "
//                    . "values('$vitalid[$vitalname]','$visit_id','$room_id','$formatted_date','$time','$vitalresult')";
//            $updateresult=  mysqli_query($con, $query);
//        }
//       // echo 'entered if loop';
//}
//
//else{
//    $info="You can't update vital Signs values because patient was already discharged on  $discharge_date";
//    array_push($arr, array('information'=>$info)); 
//  //  echo 'entered else loop';
//}
//echo json_encode($arr);