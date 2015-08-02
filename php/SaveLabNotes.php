<?php
include('connect.php');
$Notes=$_POST['Notes'];
$Subject=$_POST['Subject'];//'BNP';//
$LabName=$_POST['LabName'];//'Chemistry';//
$patient_id=$_POST['patientId'];//'71013';//
$Nurse_id=$_POST['NurseID'];//'S1019';//
//echo '$patient_id = '.$patient_id.'$Nurse_id = '.$Nurse_id;
date_default_timezone_set("America/Chicago");
$time=date('H:i');
$date=date('Y-m-d');
//echo $date;
$Note_ID;
//check if Patient_exam_notes table as records to assign notes_id
$PE_Notes_id=mysqli_query($con,"select Note_ID as Note_ID from patient_exam_note order by Note_ID ASC");
$NO_OF_ROWS_FETCH=mysqli_num_rows($PE_Notes_id);
//echo $NO_OF_ROWS_FETCH;
if($NO_OF_ROWS_FETCH<=0){
    $Note_ID=1001;
 }
else{
    while($row = mysqli_fetch_array($PE_Notes_id)){
        $Note_ID=$row['Note_ID'];
    }
     $Note_ID++;
}
//echo $Note_ID;
// get Lab ID
$Lab_id_Result=mysqli_query($con,"select * from test_cat where Test_Category='$LabName'");
while($row = mysqli_fetch_array($Lab_id_Result)){
    $Lab_ID=$row['Tst_Cat_ID'];
}
//echo '$Lab_ID= ='.$Lab_ID;
 //insert query for patient_exam_notes
$insert_query="insert into patient_exam_note (Patient_ID,Tst_Cat_ID,Date,Time,Note_ID,Subject,NOTE,Emp_ID) "
        . "values('$patient_id','$Lab_ID','$date','$time','$Note_ID','$Subject','$Notes','$Nurse_id')";
$updateresult=  mysqli_query($con, $insert_query);
if($updateresult==true){
    echo 'Notes was successfully stored.';
}
else{
    echo 'There is an error occurred while saving your notes.';
}



