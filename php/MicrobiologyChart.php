<?php
include('connect.php');
$MBvalueselected =  $_GET['MBvalue']; //'pH';//
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
$NO_OF_ROWS_FETCH=mysqli_num_rows($result);
if($NO_OF_ROWS_FETCH>0){
    while($row = mysqli_fetch_array($result)) {
        $MBlabresult=$row['result'];
        $time=$row['time'];
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $Resultdate=date("m/d",strtotime($row['date']));
        if(is_numeric($MBlabresult)){
            if(!$exact){
                array_push($arr, array('result'=>$MBlabresult,'exact'=>'null','min'=>$min,'max'=>$max,'date'=>$Resultdate,'time'=>$time));
            }
            else{
                array_push($arr, array('result'=>$MBlabresult,'exact'=>$exact,'min'=>'null','max'=>'null','date'=>$Resultdate,'time'=>$time));
            }
        }
        else{
            $MBlabresult='0';
            array_push($arr, array('result'=> $MBlabresult, 'exact'=>$exact,'min'=>$min, 'max'=>$max ,'date'=>$Resultdate,'time'=>$time));
        }
    }
    // to display min and max range in chart
    if($formatted_start_date==$formatted_end_date){
        $start_date=date("m/d",strtotime($formatted_start_date));
        $end_date=date("m/d",strtotime($formatted_start_date+7));
        if(!$exact){
            array_push($arr, array('result'=>'null','exact'=>'null','min'=>$min,'max'=>$max,'date'=>$start_date,'time'=>$time));
            array_push($arr, array('result'=>'null','exact'=>'null','min'=>$min,'max'=>$max,'date'=>$end_date,'time'=>$time));
        }
        else{
            array_push($arr, array('result'=>'null','exact'=>$exact,'min'=>'null','max'=>'null','date'=>$start_date,'time'=>$time));
            array_push($arr, array('result'=>'null','exact'=>$exact,'min'=>'null','max'=>'null','date'=>$end_date,'time'=>$time));
        }
    }
    else{
        $start_date=date("m/d",strtotime($formatted_start_date));
        $end_date=date("m/d",strtotime($formatted_end_date));
        if(!$exact){
            array_push($arr, array('result'=>'null','exact'=>'null','min'=>$min,'max'=>$max,'date'=>$start_date,'time'=>$time));
            array_push($arr, array('result'=>'null','exact'=>'null','min'=>$min,'max'=>$max,'date'=>$end_date,'time'=>$time));
        }
        else{
            array_push($arr, array('result'=>'null','exact'=>$exact,'min'=>'null','max'=>'null','date'=>$start_date,'time'=>$time));
            array_push($arr, array('result'=>'null','exact'=>$exact,'min'=>'null','max'=>'null','date'=>$end_date,'time'=>$time));
        }
    }
}
 
   
    echo json_encode($arr);