<?php
include('connect.php');
$MBselected =$_GET['MBvalue']; // 'BASOPHILS';// 
$startdate=$_GET['startdate']; //'2013-01-11';//
$enddate=$_GET['enddate'];  //'2013-01-13';//
$patient_id=$_GET['patient_id'];
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));
////Get Hematology desc from Item_test_Cat table
//$Item_desc_name=mysqli_query($con,"select * from test_item_cat where item_name='$MBselected' and Tst_Cat_ID='TCAT103'");
//while($Item_desc_row = mysqli_fetch_array($Item_desc_name)){
//    $hematologyvalueselected=$Item_desc_row['Item_desc'];
//}
$result=mysqli_query($con,"select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from patient_exam pe join patient_visit pv on pe.Visit_ID = pv.Visit_ID
                            join test_cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join test_item_cat tic on pe.Item_desc = tic.Item_desc
                            inner join test_range_age_category tac on tac.Item_desc = tic.Item_desc
                            join patient p on pv.Patient_ID = p.Patient_ID
                            join person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = '$patient_id' and tc.Tst_Cat_ID = 'TCAT103' and pe.date BETWEEN  '$formatted_start_date' and '$formatted_end_date' order by pe.date,pe.time,tic.item_name");
while($row = mysqli_fetch_array($result)) {
        $MBlabresult=$row['result'];
        $name=$row['item_name'];
        $time=$row['time'];
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $Resultdate=date("m/d/Y", strtotime($row['date']));
        if(!$exact){
            array_push($arr,array('Name'=>$name,'result'=>$MBlabresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min . " - " . $max));
        }
        else{
            array_push($arr,array('Name'=>$name,'result'=>$MBlabresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>$exact,'range'=>$exact));
        }
        
}
 echo json_encode($arr);