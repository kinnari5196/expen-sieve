<?php
//this page will give array 
//1st	
//group_id 
//name


header('Access-Control-Allow-Origin: *');
require 'connection.php';
$bid=1;
$is=0;
$sel="SELECT * FROM ac_group where business_id=".$bid." AND isactive=".$is.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{
				
				 $data1[$x] = array("id" => stripslashes($data["group_id"]),"text" => stripslashes($data["name"]));
				 
				 $x=$x+1;
			}
		}
	}



	$output= array('ac_group'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>  