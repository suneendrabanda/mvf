<?php
include('connect.php');
$MBvalueselected = $_GET['MBvalue']; // 'pH';//
$startdate=$_GET['startdate']; //'2013-01-11';//
$enddate=$_GET['enddate'];  //'2014-01-13';//
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
$result=mysqli_query($con,"select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                            join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                            inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                            join Patient p on pv.Patient_ID = p.Patient_ID
                            join Person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = 'P1013' and tc.Tst_Cat_ID = 'TCAT103' and pe.date BETWEEN  '$formatted_start_date' and '$formatted_end_date' and tic.item_name='$MBvalueselected'");
 while($row = mysqli_fetch_array($result)) {
        $MBlabresult=$row['result'];
        $time=$row['time'];
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        if(is_numeric($MBlabresult)){
            //echo 'result numeric';
            array_push($arr, array('microbiologyname'=> $MBlabresult, 'time' =>$time, 'minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
        else{
            $MBlabresult='0';
            array_push($arr, array('microbiologyname'=> $MBlabresult, 'time' =>$time, 'minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
    }
   
    echo json_encode($arr);