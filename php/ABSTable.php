<?php
ini_set('memory_limit','1024M');
include('connect.php');
$shift=$_GET['shift'];//'night';
$startdate=date('Y-m-d',strtotime($_GET['startdate']));//'2013-01-12';
$enddate=date('Y-m-d',strtotime($_GET['enddate']));//'2013-01-14';
$patient_id=$_GET['patient_id'];
$arr=array();
$result=mysqli_query($con,"select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from patient_exam pe join patient_visit pv on pe.Visit_ID = pv.Visit_ID
                            join test_cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join test_item_cat tic on pe.Item_desc = tic.Item_desc
                            inner join test_range_age_category tac on tac.Item_desc = tic.Item_desc
                            join patient p on pv.Patient_ID = p.Patient_ID
                            join person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = '$patient_id' and tc.Tst_Cat_ID = 'TCAT104' and pe.date BETWEEN  '$startdate' and '$enddate'  order by pe.date,pe.time,tic.item_name");
  if($shift=='day'){
      while($row = mysqli_fetch_array($result)) {
       $labresult=$row['result'];
        $name=$row['item_name'];
        $time=$row['time'];
        $modified_time=(int)str_replace(":","",$time);
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $Resultdate=date("m/d/Y", strtotime($row['date']));
        if($modified_time>700 && $modified_time<1500){
            if(!$exact){
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min . " - " . $max));
            }
            else{
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>$exact,'range'=>$exact));
            }
        }
        
    }
  }
  elseif($shift=='evening'){
      while($row = mysqli_fetch_array($result)) {
        $labresult=$row['result'];
        $name=$row['item_name'];
        $time=$row['time'];
        $modified_time=(int)str_replace(":","",$time);
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $Resultdate=date("m/d/Y", strtotime($row['date']));
        if($modified_time>=(int)1500 && $modified_time<2300){
            if(!$exact){
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min . " - " . $max));
            }
            else{
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>$exact,'range'=>$exact));
            }
        }
        
    }
  }
  else{
      while($row = mysqli_fetch_array($result)) {
        $labresult=$row['result'];
        $name=$row['item_name'];
        $time=$row['time'];
        $modified_time=(int)str_replace(":","",$time);
        $min=$row['Min_Range'];
        $max=$row['Max_Range'];
        $exact=$row['Exact_Range'];
        $Resultdate=date("m/d/Y", strtotime($row['date']));
        if($modified_time>=2300 || $modified_time<700){
            if(!$exact){
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>'null','range'=>$min . " - " . $max));
            }
            else{
                array_push($arr,array('Name'=>$name,'result'=>$labresult,'date'=>$Resultdate,'time'=>$time,'min'=>$min,'max'=>$max,'exact'=>$exact,'range'=>$exact));
            }
        }
        
    }
  }
  
  
 echo json_encode($arr);
 
 
 
 

