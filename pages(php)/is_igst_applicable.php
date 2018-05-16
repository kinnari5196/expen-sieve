<?php
//this page will give array 
//1st	
//group_id 
//name


header('Access-Control-Allow-Origin: *');
require 'connection.php';
$post_date=file_get_contents('php://input');
$data=json_decode($post_date);
$cid=$data->customerId;
$bid=1;
$is=0;
$sel="SELECT * FROM customer_seller WHERE cs_id=".$cid." AND isactive=".$is.";";
$rs=mysqli_query($conn,$sel);                                                                               
   if($rs->num_rows>0)
  {
     
       while( $data=mysqli_fetch_assoc($rs))
       {
          $pincode=$data["pincode"];

          $sel="SELECT * FROM address WHERE pincode=".$pincode.";";
          $rs=mysqli_query($conn,$sel);                                                                             
             if($rs->num_rows>0)
            {
               
                 while( $data=mysqli_fetch_assoc($rs))
                 {
                    $city_id=$data["city_id"];
                    if($city_id>=779 && $city_id<=1095)
                    {
                        $faisla='false';
                    }
                    else
                    {
                        $faisla='true';
                    }
                    
                  }
           
           }
           else
           {
               $invoice_id=0;
           }  
          
        }
 
 }
 else
 {
     $invoice_id=0;
 }

//$invoice_id=$invoice_id+1;
echo $faisla;

	// $output= array('group'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
//  $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
// echo $response;

?>  