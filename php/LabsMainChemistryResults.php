<?php
include('connect.php');
$arr=array();
$date=$_GET['date'];//'01/20/2013';//
$patient_id=$_GET['patient_id'];
$formatted_date=  date("Y-m-d",strtotime($date));
date_default_timezone_set("America/Chicago");
$Today_date=date('Y-m-d');
if($formatted_date==$Today_date){
        $result=mysqli_query($con,"select * from (select distinct pr.Person_ID, p.Patient_ID,pe.time,  tc.Test_Category, tic.item_name, pe.date, pe.result, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from patient_exam pe join patient_visit pv on pe.Visit_ID = pv.Visit_ID
                                    join test_cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                                    join test_item_cat tic on pe.Item_desc = tic.Item_desc
                                    inner join test_range_age_category tac on tac.Item_desc = tic.Item_desc
                                    join patient p on pv.Patient_ID = p.Patient_ID
                                    join person pr on p.Person_ID = pr.Person_ID
                                    where p.Patient_ID = '$patient_id' and tc.`Tst_Cat_ID`='TCAT102') y
                                    where date = (select max(z.date) from (select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.date, pe.result, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from patient_exam pe join patient_visit pv on pe.Visit_ID = pv.Visit_ID
                                    join test_cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                                    join test_item_cat tic on pe.Item_desc = tic.Item_desc
                                    inner join test_range_age_category tac on tac.Item_desc = tic.Item_desc
                                    join patient p on pv.Patient_ID = p.Patient_ID
                                    join person pr on p.Person_ID = pr.Person_ID
                                    where p.Patient_ID = '$patient_id' and tc.`Tst_Cat_ID`='TCAT102') z)");
        
}
else{
    $result= mysqli_query($con, "select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from patient_exam pe join patient_visit pv on pe.Visit_ID = pv.Visit_ID
                            join test_cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join test_item_cat tic on pe.Item_desc = tic.Item_desc
                            inner join test_range_age_category tac on tac.Item_desc = tic.Item_desc
                            join patient p on pv.Patient_ID = p.Patient_ID
                            join person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = '$patient_id' and tc.Tst_Cat_ID = 'TCAT102' and pe.date='$formatted_date'");
}
while ($row = mysqli_fetch_array($result)) {
            $name=$row['item_name'];
            $rel=$row['result'];
            $min=$row['Min_Range'];
            $max=$row['Max_Range'];
            $exact=$row['Exact_Range'];
            $time=$row['time'];
            $date=$row['date'];
            if(!$row['Exact_Range']){
                array_push($arr,array('name'=>$name,'result'=>$rel,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min.' - '.$max,'time'=>$time,'date'=>$date));
            }
            else{
                $first_CharIn_Exact=  substr($exact, 1, 1);
                $exactValue=substr($exact, 2);
                if($first_CharIn_Exact=='<'){
                       array_push($arr, array('name'=>$name,'result'=>$rel,'min'=>'null','max'=>$exactValue,'exact'=>$exact ,'range'=>$exact,'time'=>$time,'date'=>$date) );
                    }
                else{
                        array_push($arr, array('name'=>$name,'result'=>$rel,'min'=>$exactValue,'max'=>'null','exact'=>$exact,'range'=>$exact,'time'=>$time,'date'=>$date) );
                    }

            }

        }
 echo json_encode($arr);