<?php
include('connect.php');
$absvalueselected =$_GET['absSelectedValue']; //'BE';// 
$startdate=$_GET['StartDate']; //'2013-01-12';//
$enddate=$_GET['EndDate'];  //'2013-01-12';//
$shift=$_GET['shiftvalue'];//'day';//
$patient_id=$_GET['patient_id'];//'71013';//
//echo $shift;
$arr = array();

$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
//Get Item_desc from test_item_cat table
$item_desc=  mysqli_query($con, "select Item_desc from test_item_cat where Tst_Cat_ID='TCAT104' and item_name='$absvalueselected'");
while($Item_desc_row = mysqli_fetch_array($item_desc)){
    $absvalueselected = $Item_desc_row['Item_desc'];
}
//echo $absvalueselected;
$result=mysqli_query($con,"select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from patient_exam pe join patient_visit pv on pe.Visit_ID = pv.Visit_ID
                            join test_cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join test_item_cat tic on pe.Item_desc = tic.Item_desc
                            inner join test_range_age_category tac on tac.Item_desc = tic.Item_desc
                            join patient p on pv.Patient_ID = p.Patient_ID
                            join person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = '$patient_id' and tc.Tst_Cat_ID = 'TCAT104' and pe.date BETWEEN  '$formatted_start_date' and '$formatted_end_date' and tic.Item_desc='$absvalueselected'");
$NO_OF_ROWS_FETCH=mysqli_num_rows($result);
//echo '$NO_OF_ROWS_FETCH'.$NO_OF_ROWS_FETCH;
if($NO_OF_ROWS_FETCH>0){
    if($shift=='day'){
        //echo 'in day';
        while($row = mysqli_fetch_array($result)) {
            $abslabresult=$row['result'];
            $time=$row['time'];
            $modified_time=(int)str_replace(":","",$time);
            //echo 'modified time'.$modified_time.'<br>';
            $min=$row['Min_Range'];
            $max=$row['Max_Range'];
            $exact=$row['Exact_Range'];
            if($modified_time>700 && $modified_time<1500){
               // echo 'dat time condition satisfied<br>';
                if(!$exact){
                 array_push($arr, array('result'=> $abslabresult, 'time' =>$time, 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
                }
                else{
                    array_push($arr, array('result'=> $abslabresult, 'time' =>$time, 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
                }
            }
        }
    }
    elseif($shift=='evening'){
       // echo 'in evening';
        while($row = mysqli_fetch_array($result)) {
            $abslabresult=$row['result'];
            $time=$row['time'];
            $modified_time=(int)str_replace(":","",$time);
            //echo 'modified time'.$modified_time.'<br>';
            $min=$row['Min_Range'];
            $max=$row['Max_Range'];
            $exact=$row['Exact_Range'];
            if($modified_time>=(int)1500 && $modified_time<2300){
                if(!$exact){
                 array_push($arr, array('result'=> $abslabresult, 'time' =>$time, 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
                }
                else{
                    array_push($arr, array('result'=> $abslabresult, 'time' =>$time, 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
                }
            }
        }
    }
    else{
        //echo 'in night';
        while($row = mysqli_fetch_array($result)) {
            $abslabresult=$row['result'];
            $time=$row['time'];
            $modified_time=(int)str_replace(":","",$time);
            //echo 'modified time'.$modified_time.'<br>';
            $min=$row['Min_Range'];
            $max=$row['Max_Range'];
            $exact=$row['Exact_Range'];
            if($modified_time>=2300 || $modified_time<700){
                if(!$exact){
                 array_push($arr, array('result'=> $abslabresult, 'time' =>$time, 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
                }
                else{
                    array_push($arr, array('result'=> $abslabresult, 'time' =>$time, 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
                }
            }
        }
    }
    
    if($formatted_start_date==$formatted_end_date){
       // echo 'in $NO_OF_ROWS_FETCH<=1';
        if(!$exact){
            array_push($arr, array('result'=> 'null', 'time' =>'06:00', 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
            array_push($arr, array('result'=> 'null', 'time' =>'12:00', 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
        else{
            array_push($arr, array('result'=> 'null', 'time' =>'06:00', 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
            array_push($arr, array('result'=> 'null', 'time' =>'12:00', 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
        }
    }
    else{
        if(!$exact){
            array_push($arr, array('result'=> 'null', 'time' =>'06:00', 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
            array_push($arr, array('result'=> 'null', 'time' =>'12:00', 'exact'=>'null','minimunvalue'=>$min, 'maximumvalue'=>$max ,'date'=>$row['date']));
        }
        else{
            array_push($arr, array('result'=> 'null', 'time' =>'06:00', 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
            array_push($arr, array('result'=> 'null', 'time' =>'12:00', 'exact'=>$exact,'minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>$row['date']));
        }
    }
    function subval_sort($a,$subkey) {
	foreach($a as $k=>$v) {
		$b[$k] = strtolower($v[$subkey]);
	}
	asort($b);
	foreach($b as $key=>$val) {
		$c[] = $a[$key];
	}
	return $c;
    }
     $arr= subval_sort($arr, 'time');
    
}
else{
    array_push($arr, array('result'=> 'null', 'time' =>'null', 'exact'=>'null','minimunvalue'=>'null', 'maximumvalue'=>'null' ,'date'=>'null'));
}

   
    echo json_encode($arr);