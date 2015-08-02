<?php
include('connect.php');
$shift ='evening';// $_GET['shiftvalue']; //
//echo $shift.'in';
$startdate='2013-01-12';//$_GET['startdate']; //
$enddate='01/18/2013';//$_GET['enddate'];  //
$OutputValue='all';//$_GET['OutputValue']; //
$patient_id='71013';//$_GET['patient_id'];//
$arr=array();
$total_out=0;
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
//if loop to return the records at the time page loads, it returns the records for updted or inserted in last 7 days.
if($shift=='load'){
    $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where X.date>=DATE(NOW())-INTERVAL 7 DAY and  X.VisiT_ID = '$visit_id' group by X.Name");
    while($row = mysqli_fetch_array($result)) {
        $output=$row['Name'];
        $outputresult=(int)$row['total'];
         array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
    }
}
else{
   
      if($shift=='day'){
          if($OutputValue=='all'){
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30')group by X.Name");
                $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    $total_out=$total_out+$outputresult;
                    array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
                }
                if($NO_OF_ROWS_FETCH>0){
                    array_push($arr, array('outputname'=> 'Total_Out'. " ".$total_out, 'result'=> $total_out));
                }
           }
           else if($OutputValue=='Total_out'){
               $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30')group by X.Name");
                $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    $total_out=$total_out+$outputresult;
                }
                if($NO_OF_ROWS_FETCH>0){
                    array_push($arr, array('outputname'=> 'Total_Out'. " ".$total_out, 'result'=> $total_out));
                }
           }
            else{
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.output_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.output_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.output_ID='$OutputValue' and X.VisiT_ID = '$visit_id' and X.time in ('07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30') group by X.Name");
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
                }
            }
          
      }
      elseif($shift=='evening'){
          if($OutputValue=='all'){
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30')group by X.Name");
                $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    $total_out=$total_out+$outputresult;
                    array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
                }
                if($NO_OF_ROWS_FETCH>0){
                    array_push($arr, array('outputname'=> 'Total_Out'. " ".$total_out, 'result'=> $total_out));
                }
            }
            else if($OutputValue=='Total_out'){
               $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30')group by X.Name");
                $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    $total_out=$total_out+$outputresult;
                }
                if($NO_OF_ROWS_FETCH>0){
                    array_push($arr, array('outputname'=> 'Total_Out'. " ".$total_out, 'result'=> $total_out));
                }
           }
            else{
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.output_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.output_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.output_ID='$OutputValue' and X.VisiT_ID = '$visit_id' and X.time in ('15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30') group by X.Name");
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    if($output!='Total Out'){
                        array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
                    }
                  }
            }
          
      }
      else{
          if($OutputValue=='all'){
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30')group by X.Name");
                $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    $total_out=$total_out+$outputresult;
                    array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
                }
                if($NO_OF_ROWS_FETCH>0){
                    array_push($arr, array('outputname'=> 'Total_Out'. " ".$total_out, 'result'=> $total_out));
                }
            }
            else if($OutputValue=='Total_out'){
               $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.VisiT_ID = '$visit_id' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30')group by X.Name");
                $NO_OF_ROWS_FETCH=mysqli_num_rows($result);
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    $total_out=$total_out+$outputresult;
                }
                if($NO_OF_ROWS_FETCH>0){
                    array_push($arr, array('outputname'=> 'Total_Out'. " ".$total_out, 'result'=> $total_out));
                }
           }
            else{
                $result=mysqli_query($con,"select X.Name, sum(X.result) as total, X.date, X.time,x.Visit_ID, x.output_ID from (select pr.fname, pr.lname, op.Name, oe.date, oe.time, oe.result,oe.Visit_ID,oe.output_ID from output op join output_exam oe on op.output_ID = oe.output_ID join patient_visit pv on pv.Visit_ID = oe.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X  where  X.date between '$formatted_start_date' and '$formatted_end_date' and X.output_ID='$OutputValue' and X.VisiT_ID = '$visit_id' and X.time in ('01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30') group by X.Name");
                while($row = mysqli_fetch_array($result)){
                    $output=$row['Name'];
                    $outputresult=(int)$row['total'];
                    $time=$row['time'];
                    if($output!='Total Out'){
                        array_push($arr, array('outputname'=> $output. " ".$outputresult, 'result'=> $outputresult));
                    }
                  }
            }
          
      }
  
}
    echo json_encode($arr);