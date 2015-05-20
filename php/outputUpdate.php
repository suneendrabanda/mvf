<?php
include('connect.php');

$outputname = $_GET['outputnm']; //'Urine';//
$outputdate =$_GET['outputdate']; //'2013-01-12';//// 
$outputtime=$_GET['outputtime']; //'0800';//
$outputresult=$_GET['outputresult']; //'120';//
$formatted_date=  date("Y-m-d",strtotime($outputdate));
$arr=array();
// assign output ids to array
$outputids=array('Urine'=>'OUT101','Emesis'=>'OUT102','Drains'=>'OUT103','Other'=>'OUT104','Stool'=>'OUT105','Ostomy'=>'OUT106',
                 'Unmeasured'=>'OUT107','Incontinent'=>'OUT108','Blood'=>'OUT109','CRRT'=>'OUT110','Total Out'=>'OUT111');
// flag to check wheather record exist in output_exam table or not
$flag=0;
$patient_visit_result=mysqli_query($con,"select * from patient_visit where patient_id='P1013'");
while($patient_visit_row = mysqli_fetch_array($patient_visit_result) ){
    $visit_id= $patient_visit_row['Visit_ID'];
    $room_id= $patient_visit_row['Room_ID'];
    $discharge_date=$patient_visit_row['Discharge_Date'];
    $visit_date=$patient_visit_row['Date'];
//    echo $discharge_date. ' in  loop ';
//    echo $visit_id.'<br>'.$room_id;
}
// check is patient is discharged or not, if discharged execute else loop if not execute if loop

if(!$discharge_date){
    $output_result=mysqli_query($con,"select * from output_exam");
    //check if record exist in output_exam table. if exist set $flag to 1
    while($row = mysqli_fetch_array($output_result)){
         if($outputids[$outputname]==$row['Output_ID'] && $formatted_date == $row['Date'] && $outputtime==$row['Time'] && $visit_id==$row['Visit_ID'] ){
               $flag=1;
               //echo 'flag set to one';
            }
      }
    if($flag==1){
        $query="update output_exam set result='$outputresult' where Output_ID='$outputids[$outputname]' and visit_id='$visit_id' and date='$formatted_date' and room_id='$room_id' and time='$outputtime'";
        $updateresult=  mysqli_query($con, $query);
        //echo 'update query executed';
    }
    else{
         $query="insert into output_exam (visit_id,room_id,Output_ID,date,time,result) "
                                . "values('$visit_id','$room_id','$outputids[$outputname]','$formatted_date','$outputtime','$outputresult')";
         $updateresult=  mysqli_query($con, $query);
         //echo 'insert query executed';
    }
   $info="result Updated";
   array_push($arr, array('information'=>$info)); 
}
else{
    $info="You can't update Output values because patient was already discharged on  $discharge_date";
     array_push($arr, array('information'=>$info)); 
              
  }
  echo json_encode($arr);