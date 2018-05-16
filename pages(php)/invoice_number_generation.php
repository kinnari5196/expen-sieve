<?php
//this page will give array 
//1st	
//group_id 
//name


header('Access-Control-Allow-Origin: *');
require 'connection.php';
$bid=1;
$sel="SELECT MAX(invoice_id) as id FROM invoice;";
$rs=mysqli_query($conn,$sel);                                                                               
   if($rs->num_rows>0)
  {
     
       while( $data=mysqli_fetch_assoc($rs))
       {
          $invoice_id=$data["id"];
          
        }
 
 }
 else
 {
     $invoice_id=0;
 }

$invoice_id=$invoice_id+1;
echo $invoice_id;

	// $output= array('group'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
//  $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
// echo $response;

?>  