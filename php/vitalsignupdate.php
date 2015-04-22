<?php
include('connect.php');

$vitalname='Pulse';//$_GET['vitalvalue'];
//$date=$_GET['datevalue'];
//$time=$_GET['timevalue'];
//$result=$_GET['vitalresult'];
$vitalid=array("Pulse"=>"VS102","BP"=>"VS101","Resp"=>"VS103","Temp"=>"VS104","SaO2"=>"VS105","Pain"=>"VS106");
$result=mysqli_query($con,"select * from vs_exam");
//echo $vitalid[$vitalname];
while($row = mysqli_fetch_array($result)){
    
}