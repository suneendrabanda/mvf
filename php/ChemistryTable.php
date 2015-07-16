<?php
include('connect.php');
//$hematologyvalueselected =$_GET['hematologyvalue']; // 'BASOPHILS';// 
$startdate=$_GET['startdate']; //'2013-01-11';//
$enddate=$_GET['enddate'];  //'2013-01-13';//
$patient_id=$_GET['patient_id'];//'71013';//
$arr = array();
$formatted_start_date=  date("Y-m-d",strtotime($startdate));
$formatted_end_date=  date("Y-m-d",strtotime($enddate));

$result=mysqli_query($con,"select distinct pr.person_id, p.patient_id,  tc.test_category, tic.item_name, pe.result,pe.date,pe.time, tac.min_range, tac.max_range, tac.exact_range, tac.units from patient_exam pe join patient_visit pv on pe.visit_id = pv.visit_id
                            join test_cat tc on tc.tst_cat_id = pe.tst_cat_id
                            join test_item_cat tic on pe.item_desc = tic.item_desc
                            inner join test_range_age_category tac on tac.item_desc = tic.item_desc
                            join patient p on pv.patient_id = p.patient_id
                            join person pr on p.person_id = pr.person_id
                            where p.patient_id = '$patient_id' and tc.tst_cat_id = 'TCAT102' and pe.date between  '$formatted_start_date' and '$formatted_end_date' order by pe.date,pe.time,tic.item_name");
while($row = mysqli_fetch_array($result)) {
        $labresult=$row['result'];
        $name=$row['item_name'];
        $time=$row['time'];
        $min=$row['min_range'];
        $max=$row['max_range'];
        $exact=$row['exact_range'];
        $Resultdate=date("m/d/Y", strtotime($row['date']));
        if(!$exact){
            array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min . " - " . $max));
        }
        else{
            $first_CharIn_Exact=  substr($exact, 1, 1);
            $exactValue=substr($exact, 2);
            if($first_CharIn_Exact=='<'){
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>'null','max'=>$exactValue,'exact'=>'$exact','range'=>$exact));
            }
            else{
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$exactValue,'max'=>'null','exact'=>'$exact','range'=>$exact));
            }
        }
        
}
 echo json_encode($arr);