<?php

include('connect.php');



$intakename = $_GET['intakenm'];//'PO';
$intakedate =$_GET['itkdate']; //'2014-02-01';// 
$intaketime=$_GET['itktime']; //'0800'; //
$intakeresult=$_GET['itkresult']; //'100';
$formatted_date=  date("Y-m-d",strtotime($intakedate));
//echo $formatted_date.'  '.$intakeresult;

$intakeids=array('PO'=>'IN101','IV'=>'IN102','Blood'=>'IN103','Other'=>'IN104','IVPB'=>'IN105','Tube Fdg'=>'IN106','TPN'=>'IN107','Lipids'=>'IN1008','Breast Feed'=>'IN109','Total In'=>'IN110');
$result=mysqli_query($con,"select * from intake_exam");
$flag=0;
while($row = mysqli_fetch_array($result)){
    if($intakeids[$intakename]==$row['Intake_ID'] && $formatted_date == $row['Date'] && $intaketime==$row['Time'] ){
        $flag=1;
    }
}

if($flag==1){
    $query="update intake_exam set result='$intakeresult' where intake_ID='$intakeids[$intakename]' and visit_id='V137' and date='$formatted_date' and room_id='RM105' and time='$intaketime' ";
    $updateresult=  mysqli_query($con, $query);
}
else{
    $query="insert into intake_exam (intake_id,visit_id,room_id,date,time,result) "
            . "values('$intakeids[$intakename]','V137','RM105','$formatted_date','$intaketime','$intakeresult')";
    $updateresult=  mysqli_query($con, $query);
}
 