

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<?php
$metric = $_GET["metric"];
$result = "";

switch ($metric) {
    
	case "hrsandvaluebyyear":
		$result = "{success:true,items:[{ year: '2010', hrsbilled: '130000', hrsworked: '143000', valuebilled: '475000', valueworked: '500000' }]}";
		break;
}		

header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo($result);


