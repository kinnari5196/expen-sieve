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
     $ci=$data->companyId;
//$pi=2;
$bid=1;
$is=0;
$sel="SELECT * FROM company where business_id=".$bid." AND isactive=".$is." AND company_id=".$ci.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{

                 $data1[$x] = array("id" => stripslashes($data["company_id"]), "description" => stripslashes($data["description"]), "name" => stripslashes($data["name"]));
				 
				 $x=$x+1;
			}
		}
	}



	$output= array('company'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>