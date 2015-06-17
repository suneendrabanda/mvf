<?php
include('connect.php');
$arr=array();

$result=mysqli_query($con,"select * from (select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.date, pe.result, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                                join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                                join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                                inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                                join Patient p on pv.Patient_ID = p.Patient_ID
                                join Person pr on p.Person_ID = pr.Person_ID
                                where p.Patient_ID = 'P1013' and tc.`Tst_Cat_ID`='TCAT102') y
                                where date = (select max(z.date) from (select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.date, pe.result, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                                join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                                join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                                inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                                join Patient p on pv.Patient_ID = p.Patient_ID
                                join Person pr on p.Person_ID = pr.Person_ID
                                where p.Patient_ID = 'P1013' and tc.`Tst_Cat_ID`='TCAT102') z);");
while ($row = mysqli_fetch_array($result)) {
    $name=$row['item_name'];
    $rel=$row['result'];
    $min=$row['Min_Range'];
    $max=$row['Max_Range'];
    $exact=$row['Exact_Range'];
    if(!$row['Exact_Range']){
        array_push($arr,array('name'=>$name,'result'=>$rel,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min.' - '.$max));
    }
    else{
        $first_CharIn_Exact=  substr($exact, 1, 1);
        $exactValue=substr($exact, 2);
        if($first_CharIn_Exact=='<'){
               array_push($arr, array('name'=>$name,'result'=>$rel,'min'=>'null','max'=>$exactValue,'exact'=>$exact ,'range'=>$exact) );
            }
        else{
                array_push($arr, array('name'=>$name,'result'=>$rel,'min'=>$exactValue,'max'=>'null','exact'=>$exact,'range'=>$exact ) );
            }
       
    }
    
}
 echo json_encode($arr);