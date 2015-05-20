<?php
include('connect.php');
$absvalueselected = 'pH';//$_GET['absSelectedValue']; // 
$startdate='2013-01-11';//$_GET['StartDate']; //
$enddate='2013-01-13';//$_GET['EndDate'];  //
$shift='evening';//$_GET['shiftvalue'];
echo $shift;
$arr = array();

$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));

$result=mysqli_query($con,"select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                            join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                            inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                            join Patient p on pv.Patient_ID = p.Patient_ID
                            join Person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = 'P1013' and tc.Tst_Cat_ID = 'TCAT104' and pe.date BETWEEN  '$formatted_start_date' and '$formatted_end_date' and tic.item_name='$absvalueselected'");
while($row = mysqli_fetch_array($result)) {
        $abslabresult=$row['result'];
        $time=$row['time'];
        echo (int)$time;
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
 
        if($shift=='day' && ((int)$time>700 || (int)$time<1400) ){
            array_push($arr, array('absvalue'=> $abslabresult, 'time' =>$time, 'minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
        elseif($shift=='evening' && ((int)$time>1400 || (int)$time<2200)){
            echo $time.'<br>';
            array_push($arr, array('absvalue'=> $abslabresult, 'time' =>$time, 'minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
        else{
            array_push($arr, array('absvalue'=> $abslabresult, 'time' =>$time, 'minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
}
   
    echo json_encode($arr);