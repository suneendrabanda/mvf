<?php
include('connect.php');
//$hematologyvalueselected = $_GET['hematologyvalue']; //'BANDS';// 
$startdate=$_GET['startdate']; //'2013-01-12';//
$enddate=$_GET['enddate'];  //'2013-01-28';//
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
$result=mysqli_query($con,"select ip.Name,ie.date,ie.time,ie.result from intake_exam ie join Intake ip on ip.Intake_ID=ie.`Intake_ID` where ie.date between '$startdate' and '$enddate' and ie.`Visit_ID`='V141' order by ie.date,ie.time,ip.Name");
while($row=  mysqli_fetch_array($result)){
    $name=$row['Name'];
    $date=$row['date'];
    $time=$row['time'];
    $value=$row['result'];
    array_push($arr, array('Name'=>$name,'result'=>$value,'date'=>$date,'time'=>$time));
}
echo json_encode($arr);