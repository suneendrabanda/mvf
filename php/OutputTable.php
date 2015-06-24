<?php
include('connect.php');
//$hematologyvalueselected = $_GET['hematologyvalue']; //'BANDS';// 
$startdate=$_GET['startdate']; //'2013-01-12';//
$enddate=$_GET['enddate'];  //'2013-01-12';//
$shift=$_GET['shift'];// 'day';// 
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
$result=mysqli_query($con,"select ip.Name,ie.date,ie.time,ie.result from output_exam ie join output ip on ip.Output_ID=ie.`Output_ID` where ie.date between '$formatted_start_date' and '$formatted_end_date' and ie.`Visit_ID`='V141' order by ie.date,ie.time,ip.Name");
if($shift=='day'){
    while($row=  mysqli_fetch_array($result)){
        $name=$row['Name'];
        $date=date("m/d/Y", strtotime($row['date']));
        $time=$row['time'];
        $value=$row['result'];
        if($time>=0700 && $time<=1400){
            array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
        }
    }
}
elseif ($shift=='evening') {
    while($row=  mysqli_fetch_array($result)){
        $name=$row['Name'];
        $date=date("m/d/Y", strtotime($row['date']));
        $time=$row['time'];
        $value=$row['result'];
        if($time>1400 && $time<=2200){
            array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
        }
    }
}
else{
    while($row=  mysqli_fetch_array($result)){
        $name=$row['Name'];
        $date=date("m/d/Y", strtotime($row['date']));
        $time=$row['time'];
        $value=$row['result'];
        if($time>2200 || $time<0700){
            array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
        }
    }
}
echo json_encode($arr);