<?php
include('connect.php');
$arr=array();
$date=$_GET['date'];//'01/20/2013';//
$formatted_date=  date("Y-m-d",strtotime($date));
date_default_timezone_set("America/Chicago");
$Today_date=date('Y-m-d');
//echo $Today_date.'today date';
//echo $formatted_date.'formarted dtae';
if($formatted_date==$Today_date){
    $result=mysqli_query($con,"select * from (select distinct pr.Person_ID, p.Patient_ID,pe.time,tc.Test_Category, tic.item_name, pe.date, pe.result, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                                    join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                                    join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                                    inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                                    join Patient p on pv.Patient_ID = p.Patient_ID
                                    join Person pr on p.Person_ID = pr.Person_ID
                                    where p.Patient_ID = 'P1013' and tc.`Tst_Cat_ID`='TCAT101') y
                                    where date = (select max(z.date) from (select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.date, pe.result, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                                    join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                                    join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                                    inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                                    join Patient p on pv.Patient_ID = p.Patient_ID
                                    join Person pr on p.Person_ID = pr.Person_ID
                                    where p.Patient_ID = 'P1013' and tc.`Tst_Cat_ID`='TCAT101') z)");

    while($row = mysqli_fetch_array($result)){
        $result1=$row['result'];
        $date=$row['date'];
        $name=$row['item_name'];
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $time=$row['time'];
        if(!$exact){
            array_push($arr,array('name'=>$name,'result'=>$result1,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min.' - '.$max,'time'=>$time,'date'=>$date));
        }
        else{
            array_push($arr,array('name'=>$name,'result'=>$result1,'min'=>'null','max'=>'null','exact'=>$exact,'range'=>$exact,'time'=>$time,'date'=>$date));
        }
    }
    
}
else{
    $result= mysqli_query($con, "select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                            join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                            inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                            join Patient p on pv.Patient_ID = p.Patient_ID
                            join Person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = 'P1013' and tc.Tst_Cat_ID = 'TCAT101' and pe.date='$formatted_date'");
    while($row = mysqli_fetch_array($result)){
        $result1=$row['result'];
        $name=$row['item_name'];
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $time=$row['time'];
        $date=$row['date'];
        if(!$exact){
            array_push($arr,array('name'=>$name,'result'=>$result1,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min.' - '.$max,'time'=>$time,'date'=>$date));
        }
        else{
            array_push($arr,array('name'=>$name,'result'=>$result1,'min'=>'null','max'=>'null','exact'=>$exact,'range'=>$exact,'time'=>$time,'date'=>$date));
        }
    }
}
 echo json_encode($arr);