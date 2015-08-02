<?php
include('connect.php');

$arr = array();
$patient_id=$_GET['patient_id'];
$Nurse_id=$_GET['Nurse_id'];
$LabName='Microbiology';
//Get Lab id From tst_cat table
$Lab_ID_Result=mysqli_query($con,"select * from test_cat where Test_Category='$LabName'");
while ($row = mysqli_fetch_array($Lab_ID_Result)) {
    $Lab_ID=$row['Tst_Cat_ID'];
}
//fetch result from patient_exam_note table
$PE_notes=mysqli_query($con,"select * from patient_exam_note where Patient_ID='$patient_id' and Tst_Cat_ID='$Lab_ID and Emp_ID='$Nurse_id'");
while ($row = mysqli_fetch_array($Lab_ID_Result)) {
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

echo json_encode($arr);