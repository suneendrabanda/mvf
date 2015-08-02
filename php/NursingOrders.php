<?php
include('connect.php');
//$Nurse_id='S1019';
$patient_id='71013';
$dateArr = array();
$timeArr = array();
$descArr = array();
$arr = array();
$qry="SELECT p.patient_id, 
       p.person_id, 
       nro.date,
       nro.time,
       ast.description AS frequency, 
       t.description   AS task_type 
FROM   nursing_order nro 
       JOIN patient_visit pv 
         ON nro.visit_id = pv.visit_id 
       JOIN ability_status ast 
         ON nro.ability_sts_id = ast.ability_sts_id 
       JOIN task t 
         ON nro.task_id = t.task_id 
       JOIN patient p 
         ON pv.patient_id = p.patient_id 
       JOIN person pr 
         ON p.person_id = pr.person_id 
WHERE  p.patient_id = '$patient_id' order by nro.date,nro.time";
$query=mysqli_query($con,$qry);
$NO_OF_ROWS_FETCH=mysqli_num_rows($query);
//echo $NO_OF_ROWS_FETCH.'<br>';
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
array_push($dateArr,'01/14/13');array_push($timeArr,'08:00:00');array_push($descArr,'Regularly Strict I and O');
array_push($dateArr,'01/15/13');array_push($timeArr,'09:00:00');array_push($descArr,'Regularly Strict');
array_push($dateArr,'01/15/13');array_push($timeArr,'10:00:00');array_push($descArr,'Regularly Strict IO');
//echo $dateArr[$k].' '.$timeArr[$k].' '.$descArr[$k].'<br>';
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
//array_push($arr, array('date'=>'01/14/13','time'=>'08:00:00','description'=>'Regularly Strict I and O'));
//echo '<pre>', print_r($arr), '</pre>';
echo json_encode($arr);
