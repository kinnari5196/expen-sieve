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
$sel="SELECT * FROM company where business_id=".$bid." AND isactive=".$is.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{
				
				 $data1[$x] = array("id" => stripslashes($data["company_id"]),"text" => stripslashes($data["name"]));
				 
				 $x=$x+1;
			}
		}
	}


$sel1="SELECT * FROM product_type where business_id=".$bid." AND isactive=".$is.";";
$x1=0;
$rs1=mysqli_query($conn,$sel1);
	if($rs1)
	{
	    if(mysqli_num_rows($rs1)>0)
	    {
			while ($data11=mysqli_fetch_assoc($rs1)) 
			{
					
				 $data2[$x1] = array("id" => stripslashes($data11["product_type_id"]),"text" => stripslashes($data11["description"]));
				 
				 $x1=$x1+1;
			}
		}
	}
	$output= array('company'=>$data1,'product_type'=>$data2);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>  