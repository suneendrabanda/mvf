<?php
include('connect.php');
//$patient_id=$_GET['patient_id'];//'71013';//
$arr = array();

 array_push($arr,array(
                        'title'=>'Intake ',
                        'date'=>'2015-01-12',
                        'leaf' => 'false',
                        'items'=>array(
                            'notes'=>'An arterial blood gas (ABG) is a blood test that is performed using blood from an artery. It involves puncturing an artery with a thin needle and syringe and drawing a small volume of blood.',
                            'leaf' => 'true',
                        )
     ));
 echo json_encode($arr);

