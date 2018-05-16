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
   
//$pi=2;
$bid=1;
$is=0;
$sel="SELECT * FROM invoice where business_id=".$bid." AND isactive=".$is." ;";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{


                $cid=$data["customer_id"];
             //   $ptid=$data["product_type_id"];
               /*  $sel11="SELECT * FROM product_type where business_id=".$bid." AND product_type_id=".$ptid.";";
                //$x=0;
                $rs11=mysqli_query($conn,$sel11);
                    if($rs11)
                    {
                        if(mysqli_num_rows($rs11)>0)
                        {
                            while ($data11=mysqli_fetch_assoc($rs11)) 
                            {
                                 $ptname=$data11["description"];               
                                 $mq=$data11["meter_qty"];
                                 if($mq=='m')
                                 {
                                     $mqty="mtr";
                                 } 
                                 else
                                 {
                                     $mqty="pcs";
                                 }
                            }
                        }
                    }



*/

                    $sel211="SELECT * FROM customer_seller where business_id=".$bid." AND isactive=".$is." AND cs_id=".$cid.";";
                //$x=0;
                $rs211=mysqli_query($conn,$sel211);
                    if($rs211)
                    {
                        if(mysqli_num_rows($rs211)>0)
                        {
                            while ($data211=mysqli_fetch_assoc($rs211)) 
                            {
                                 $cname=$data211["name"];               
                               
                            }
                        }
                    }
                                
                 $data1[$x] = array("invoiceNo" => stripslashes($data["invoice_id"]), "invoiceDate" => stripslashes($data["date"]), "customerName" => stripslashes($cname), "invoiceAmt" => stripslashes($data["grand_total"]));
				 
				 $x=$x+1;
			}
		}
	}



	$output= array('invoice'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>