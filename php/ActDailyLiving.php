<?php
include('connect.php');
//$Nurse_id='S1019';
$patient_id='71013';
$dateArr = array();
$timeArr = array();
$descArr = array();
$arr = array();
$qry="SELECT pr.person_id, 
       p.patient_id, 
       ad.description 
FROM   activity_daily ad 
       JOIN visit_activity_daily vad 
         ON ad.activity_id = vad.activity_id 
       JOIN patient_visit pv 
         ON vad.visit_id = pv.visit_id 
       JOIN patient p 
         ON pv.patient_id = p.patient_id 
       JOIN person pr 
         ON p.person_id = pr.person_id 
WHERE  p.patient_id = '$patient_id' ";
$query=mysqli_query($con,$qry);
if($query==true){
    $NO_OF_ROWS_FETCH=mysqli_num_rows($query);
    $i=0;
    while($row=mysqli_fetch_array($query)){
        $date=date("m/d/y",strtotime($row['date']));
        $time=$row['time'];
        $freq=$row['frequency'];
        $task_type=$row['task_type'];
        $dateArr[$i]=$date;
        $timeArr[$i]=$time;
        $descArr[$i]=$freq.' '.$task_type;
        $i++;
    }

    if($NO_OF_ROWS_FETCH>0){
        $PrevDate=$dateArr[0];
        $PrevTime=$timeArr[0];
    }
    $desc='';
    for($k=0;$k<$NO_OF_ROWS_FETCH+3;$k++){
        if($dateArr[$k]==$PrevDate && $timeArr[$k]==$PrevTime){
            $desc=$desc.'<br>'.$descArr[$k];
        }
        else{
            array_push($arr, array('date'=>$PrevDate,'time'=>$PrevTime,'description'=>$desc));
            $PrevDate=$dateArr[$k];
            $PrevTime=$timeArr[$k];
            $desc='';
            $desc=$desc.'<br>'.$descArr[$k];
        }
        if($k==$NO_OF_ROWS_FETCH+2){
            array_push($arr, array('date'=>$PrevDate,'time'=>$PrevTime,'description'=>$desc));
        }
    } 
    echo json_encode($arr);
}
else{
    echo json_encode($arr);
}

//array_push($arr, array('date'=>'01/14/13','time'=>'08:00:00','description'=>'Regularly Strict I and O'));
//echo '<pre>', print_r($arr), '</pre>';

