<?php
//this page will give array of 2 arrays
//1st	
//company_id 
//company_name
//2nd
//product_type_id
//description 

header('Access-Control-Allow-Origin: *');
require 'connection.php';
$bid=1;
$is=0;
//$type='c';


	$sel11="SELECT * FROM address;";
	$x11=0;
	$rs11=mysqli_query($conn,$sel11);
		if($rs11)
		{
			if(mysqli_num_rows($rs11)>0)
			{
				while ($data11=mysqli_fetch_assoc($rs11)) 
				{
					
					 $data21[$x11] = array("id"=>stripslashes($data11["pincode"]),"text"=>stripslashes($data11["pincode"]));
					 
					 $x11=$x11+1;
				}
			}
		}
	


	$output1= array('pincode'=>$data21);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output1);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>