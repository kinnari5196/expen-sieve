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
    $post_date=file_get_contents('php://input');
    $data=json_decode($post_date);
//    $ci=1;$pi=1;
$ci=$data->companyId;
$pi=$data->productId;
$bid=1;
$is=0;
$sel="SELECT * FROM product where business_id=".$bid." AND company_id=".$ci." AND product_id=".$pi." AND isactive=".$is.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{
				echo $data["price"];
				//  $data1[$x] = array("price" => stripslashes($data["price"]));
				 
				//  $x=$x+1;
			}
		}
	}



	// $output= array('price'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
//  $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
// echo $response;

?>