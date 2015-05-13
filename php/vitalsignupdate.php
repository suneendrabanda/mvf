<?php 
include('connect.php');

$vitalname=$_GET['vitalvalue']; //'Pulse';//
$date=$_GET['datevalue']; //'2013-01-12';
$time=$_GET['timevalue']; //'0900';//
$vitalresult=$_GET['vitalresult']; //'10';//
$formatted_date=  date("Y-m-d",strtotime($date));

$vitalid=array("Pulse"=>"VS102","BP"=>"VS101","Resp"=>"VS103","Temp"=>"VS104","SaO2"=>"VS105","Pain"=>"VS106");

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
//echo $discharge_date;
$arr= array();
//array_push($arr, array('vitalsign'=>$vitalname,'date'=>$formatted_date,'time'=>$time,'result'=>$vitalresult,'information'=>'working'));
if($vitalname=='Weight'){
    $w_result=mysqli_query($con,"select * from patient_info where Visit_ID='$visit_id'");
    while($w_row = mysqli_fetch_array($w_result)){
        if($w_row['Visit_ID']== $visit_id ){
                 $flag=1;
             }
     }
     if(!$discharge_date){
         
            if($flag==1){
                $query="update patient_info set Weight='$vitalresult' where Visit_ID='$visit_id'";
                 $updateresult=  mysqli_query($con, $query);
            }
            else{
                $query="insert into patient_info (Visit_ID,date,height,weight,BSN,BMI,Head_Circ)"
                        . "values('$visit_id','$visit_date','','$vitalresult','','','')";
            }
            $info="result Updated";
            array_push($arr, array('information'=>$info)); 
     }
     else{
         $info="You can't update vital Signs values because patient was already discharged on  $discharge_date";
          array_push($arr, array('information'=>$info)); 
          
     }
      
}
        else{
            if(!$discharge_date){
                
                  $result=mysqli_query($con,"select * from vs_exam");
                    while($row = mysqli_fetch_array($result)){
                        if($vitalid[$vitalname]==$row['VS_ID'] && $formatted_date == $row['Date'] && $time==$row['Time'] ){
                            $flag=1;
                          //  echo 'vitalid '.$vitalid[$vitalname];
                        }
                    }
                    if($flag==1){
                        $query="update vs_exam set result='$vitalresult' where VS_ID='$vitalid[$vitalname]' and visit_id='$visit_id' and date='$formatted_date' and room_id='$room_id' and time='$time' ";
                        $updateresult=  mysqli_query($con, $query);
                    }
                    else{
                        $query="insert into vs_exam (vs_id,visit_id,room_id,date,time,result) "
                                . "values('$vitalid[$vitalname]','$visit_id','$room_id','$formatted_date','$time','$vitalresult')";
                        $updateresult=  mysqli_query($con, $query);
                    }

                   // echo 'entered if loop';
                    $info="result Updated";
                    array_push($arr, array('information'=>$info)); 
            }

            else{
                $info="You can't update vital Signs values because patient was already discharged on  $discharge_date";
                array_push($arr, array('information'=>$info)); 
              //  echo 'entered else loop';
            }
        }
echo json_encode($arr);