<?php
include('connect.php');
//$hematologyvalueselected = $_GET['hematologyvalue']; //'BANDS';// 
$startdate=$_GET['startdate']; //'2013-01-12';//
$enddate=$_GET['enddate'];  //'2013-01-12';//
$shift=$_GET['shift'];//'night';//  
$patient_id=$_GET['patient_id'];
$arr = array();
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
$result=mysqli_query($con,"select ip.Name,ie.date,ie.time,ie.result from intake_exam ie join intake ip on ip.Intake_ID=ie.`Intake_ID` where ie.date between '$formatted_start_date' and '$formatted_end_date' and ie.`Visit_ID`='$visit_id' order by ie.date,ie.time,ip.Name");
if($shift=='day'){
    while($row=  mysqli_fetch_array($result)){
        $name=$row['Name'];
        $date=date("m/d/Y", strtotime($row['date']));
        $time=$row['time'];
        $modified_time=(int)str_replace(":","",$time);
        $value=$row['result'];
        if($modified_time>=700 && $modified_time<1500){
            array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
        }
    }
}
elseif ($shift=='evening') {
    while($row=  mysqli_fetch_array($result)){
        $name=$row['Name'];
        $date=date("m/d/Y", strtotime($row['date']));
        $time=$row['time'];
        $modified_time=(int)str_replace(":","",$time);
        $value=$row['result'];
        if($modified_time>=(int)1500 && $modified_time<2300){
            array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
        }
    }
}
else{
    while($row=  mysqli_fetch_array($result)){
        $name=$row['Name'];
        $date=date("m/d/Y", strtotime($row['date']));
        $time=$row['time'];
        $modified_time=(int)str_replace(":","",$time);
        $value=$row['result'];
        if($modified_time>=2300 || $modified_time<700){
            array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
        }
    }
}
echo json_encode($arr);