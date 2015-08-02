<?php
include('connect.php');
//$Nurse_id='S1019';
$patient_id='71013';

$arr = array();
$qry="SELECT p.patient_id, 
       p.person_id, 
       pr.fname, 
       pr.lname, 
       m.NAME, 
       mv.dose, 
       mv.frequency,
	   mv.route,
	   mv.date,
	   mv.time
FROM   medication_visit mv 
       JOIN medication m 
         ON mv.med_id = m.med_id 
       JOIN patient_visit pv 
         ON mv.visit_id = pv.visit_id 
       JOIN patient p 
         ON pv.patient_id = p.patient_id 
       JOIN person pr 
         ON p.person_id = pr.person_id 
WHERE  p.patient_id = '$patient_id' ";
$query=mysqli_query($con,$qry);
while($row=mysqli_fetch_array($query)){
    $med_name=$row['NAME'];
    $date=date("m/d/y",strtotime($row['date']));
    $time=$row['time'];
    $dose=$row['dose'];
    $route=$row['route'];
    $freq=$row['frequency'];
    array_push($arr, array('Name'=>$med_name,'date'=>$date,'time'=>$time,'dose'=>$dose,'route'=>$route,'freq'=>$freq));
}
echo json_encode($arr);
