<?php
ini_set('memory_limit','1024M');
include('connect.php');
$shiftselected=$_GET['shift'];//'night';
$startdate=date('Y-m-d',strtotime($_GET['startdate']));//'2013-01-12';
$enddate=date('Y-m-d',strtotime($_GET['enddate']));//'2013-01-14';

//echo $shiftselected.'<br>';
//echo $startdate.'<br>';
//echo $enddate.'<br>';
$date_diff= floor((strtotime($enddate)-  strtotime($startdate))/(60*60*24))+1;
//echo 'date difference '.$date_diff.'<br>';
$arr=array();$value=array();$time=array();$date=array();$item_name=array();$final=array();
$lab_name=array('BE','HCO3','Oxygen Saturation','PaCO2','Pao2','pH');
if($shiftselected=='day'){
            $shift= array('0700','0800','0900','1000','1100','1200','1300','1400');
        }
        elseif($shiftselected=='evening'){
            $shift= array('1500','1600','1700','1800','1900','2000','2100','2200');
        }
        else{
            $shift= array('0100','0200','0300','0400','0500','0600','2300','2400');
        }
 $result=mysqli_query($con,"select distinct pr.Person_ID, p.Patient_ID,  tc.Test_Category, tic.item_name, pe.result,pe.date,pe.time, tac.Min_Range, tac.Max_Range, tac.Exact_Range, tac.units from Patient_Exam pe join Patient_Visit pv on pe.Visit_ID = pv.Visit_ID
                            join Test_Cat tc on tc.Tst_Cat_ID = pe.Tst_Cat_ID
                            join Test_Item_Cat tic on pe.Item_desc = tic.Item_desc
                            inner join Test_Range_Age_Category tac on tac.Item_desc = tic.Item_desc
                            join Patient p on pv.Patient_ID = p.Patient_ID
                            join Person pr on p.Person_ID = pr.Person_ID
                            where p.Patient_ID = 'P1013' and tc.Tst_Cat_ID = 'TCAT104' and pe.date BETWEEN  '$startdate' and '$enddate'  order by pe.date,pe.time,tic.item_name");
  $i=0;
  while($row = mysqli_fetch_array($result)) {
      $item_name[$i]=$row['item_name'];
      $value[$i]=$row['result'];
      $time[$i]=$row['time'];
      $date[$i]=$row['date'];
      //echo $item_name[$i].'  '.$value[$i].'  '.$time[$i].'  '.$date[$i].'<br>';
      $i++;
  }
  //echo sizeof($date).'<br>';
  $r=0;//for result array's
  $v=0;// variable for final array to increament
  $timevalue=0;// variable for time 
  for($i=0;$i<$date_diff;$i++){//loop tp repeat dates
      //echo $startdate.'<br>';
      while($timevalue<8){
          for($v=0;$v<9;$v++){//loop to repeat time based on shift  to enter row values
            if($v==0){
                $final[$v]=$startdate;// enter date 
            }
            elseif ($v==1) {
                $final[$v]=$shift[$timevalue];
                //echo 'time entered '.$shift[$timevalue].'<br>';
             }
            else{
                if($r<sizeof($date) && $date[$r]==$startdate && $time[$r]==$shift[$timevalue]){
                    //echo ' r value in if == '.$r.'<br>';
                    if($item_name[$r]==$lab_name[$v-2]){
                        $final[$v]=$value[$r];
                        //echo 'value entered <br>';
                        $r++;
                    }
                    else{
                         $final[$v]='-';
                         //echo 'entered - in if loop';
                    }
                    
                }
                else{
                    $final[$v]='-';
                    //echo ' - entered <br>';
                }
            }
          }
       array_push($arr, array('date'=>$final[0],'time'=>$final[1],'be'=>$final[2],'hco3'=>$final[3],'OS'=>$final[4],'paco3'=>$final[5],'pao2'=>$final[6],'ph'=>$final[7]));
       $timevalue++;
       $v=0;
      }
      $startdate=date('Y-m-d',strtotime("$startdate +1 day"));
      $timevalue=0;
  }
 echo json_encode($arr);
 
 
 
 

