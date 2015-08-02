<?php
include('connect.php');

$arr = array();
$patient_id='71013';//$_GET['patient_id'];//
$Nurse_id='S1019';//$_GET['Nurse_id'];//
$LabName='Chemistry';
//Get Lab id From tst_cat table
$Lab_ID_Result=mysqli_query($con,"select * from test_cat where Test_Category='$LabName'");
while ($row = mysqli_fetch_array($Lab_ID_Result)) {
    $Lab_ID=$row['Tst_Cat_ID'];
}
//echo $Lab_ID;
//fetch result from patient_exam_note table
$PE_notes=mysqli_query($con,"select * from patient_exam_note where Patient_ID='$patient_id' and Tst_Cat_ID='$Lab_ID' and Emp_ID='$Nurse_id'");
//$NO_OF_ROWS_FETCH=mysqli_num_rows($result);
while ($row = mysqli_fetch_array($PE_notes)) {
    $title=$row['Subject'];
    $date=$row['Date'];
    $Note=$row['NOTE'];
    array_push($arr,array(
                        'title'=>$title,
                        'date'=>$date,
                        'leaf' => 'false',
                        'items'=>array(
                            'notes'=>$Note,
                            'leaf' => 'true',
                        )
     ));
}
// array_push($arr,array(
//                        'title'=>'Chemistry 0',
//                        'date'=>'2015-01-12',
//                        'leaf' => 'false',
//                        'items'=>array(
//                            'notes'=>'An arterial blood gas (ABG) is a blood test that is performed using blood from an artery. It involves puncturing an artery with a thin needle and syringe and drawing a small volume of blood.',
//                            'leaf' => 'true',
//                        )
//     ));
 
 //echo '<pre>', print_r($arr), '</pre>';
         
 echo json_encode($arr);