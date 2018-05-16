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
    // $ii=$data->invoiceId;
$ii=64;
$bid=1;
$is=0;
$invoiceId=0;
$sel="SELECT * FROM invoice where business_id=".$bid." AND isactive=".$is." AND invoice_id=".$ii.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{
                $invoiceId=$data["invoice_id"];
                $cid=$data["customer_id"];
                $cash_credit=$data["cash_credit"];
                $cgst=$data["cgst"];
                $sgst=$data["sgst"];
                $igst=$data["igst"];
                $stotal=$data["sub_total"];
                if($cash_credit==0)
                {
                    $cc="cash";
                }
                else
                {
                    $cc="credit";
                }
                if($cgst==0 && $sgst==0)
                {
                    $cp=0;
                    $sp=0;
                }
                else
                {
                    $cp=($cgst*100)/$stotal;
                    $sp=($sgst*100)/$stotal;
                }
                if($igst==0)
                {
                    $ip=0;
                   
                }
                else
                {
                    $ip=($igst*100)/$stotal;
                   
                }
                //echo $cc." ".$cp." ".$sp." ".$ip;
                $sel1="SELECT * FROM customer_seller where business_id=".$bid." AND cs_id=".$cid.";";
                $x1=0;
                $rs1=mysqli_query($conn,$sel1);
                    if($rs1)
                    {
                        if(mysqli_num_rows($rs1)>0)
                        {
                            while ($data1=mysqli_fetch_assoc($rs1)) 
                            {
                                $cname=$data1["name"];
                                $addressline=$data1["addressline"];
                                $pincode=$data1["pincode"];
                                $gstno=$data1["gst_no"];
                              //  echo $pincode;
                                $sel11="SELECT * FROM address where pincode=".$pincode.";";
                                $x11=0;
                                $rs11=mysqli_query($conn,$sel11);
                                    if($rs11)
                                    {
                                        if(mysqli_num_rows($rs11)>0)
                                        {
                                            while ($data11=mysqli_fetch_assoc($rs11)) 
                                            {
                                               
                                                $area=$data11["area"];
                                                $city_id=$data11["city_id"];
                                               
                                //                echo $area;
                                                
                                                $sel111="SELECT * FROM city where city_id=".$city_id.";";
                                                $x111=0;
                                                $rs111=mysqli_query($conn,$sel111);
                                                    if($rs111)
                                                    {
                                                        if(mysqli_num_rows($rs111)>0)
                                                        {
                                                            while ($data111=mysqli_fetch_assoc($rs111)) 
                                                            {
                                                            
                                                                $city=$data111["city_name"];
                                                                $state_id=$data111["state_id"];

                                                                $sel1111="SELECT * FROM state where state_id=".$state_id.";";
                                                                $x1111=0;
                                                                $rs1111=mysqli_query($conn,$sel1111);
                                                                    if($rs1111)
                                                                    {
                                                                        if(mysqli_num_rows($rs1111)>0)
                                                                        {
                                                                            while ($data1111=mysqli_fetch_assoc($rs1111)) 
                                                                            {
                                                                            
                                                                                $state=$data1111["state_name"];
                                                                               // $state_id=$data1111["state_id"];
                                                                                $x1111=$x1111+1;
                                                                             //  echo $state;
                                                                            }
                                                                        }
                                                                    }

                                                                $x111=$x111+1;
                                                           //    echo $city;
                                                            }
                                                        }
                                                    }
                                                    $x11=$x11+1;
                                            }
                                        }
                                    }
                                    

                                $x1=$x1+1;
                            }
                        }
                    }
                 $data100[$x] = array("customerGstNo" => stripslashes($gstno),"invoiceNo" => stripslashes($data["invoice_id"]),"customerName" => stripslashes($cname),"customerAddress" => stripslashes($addressline),"customerState" => stripslashes($state),"customerCity" => stripslashes($city),"customerArea" => stripslashes($area),"customerPincode" => stripslashes($pincode),"invoiceDate" => stripslashes($data["date"]),"invoiceCashCredit" => stripslashes($cc),"cgstPer" => stripslashes($cp),"sgstPer" => stripslashes($sp),"igstPer" => stripslashes($ip),"cgstAmt" => stripslashes($data["cgst"]),"sgstAmt" => stripslashes($data["sgst"]),"igstAmt" => stripslashes($data["igst"]),"subTotal" => stripslashes($data["sub_total"]),"grandTotal" => stripslashes($data["grand_total"]),"additionalExpTxt" => stripslashes($data["additional_expenses_text"]),"additionalExpAmt" => stripslashes($data["additional_expenses"]));
				 
				 $x=$x+1;
			}
		}
	}

//echo $invoiceId;
$sel2="SELECT * FROM invoice_items where invoice_id=".$invoiceId.";";
$x2=0;
$rs2=mysqli_query($conn,$sel2);
	if($rs2)
	{
	    if(mysqli_num_rows($rs2)>0)
		{
			while ($data2=mysqli_fetch_assoc($rs2)) 
			{
                $productId=$data2["product_id"];
             //  echo $productId;
                $sel22="SELECT * FROM product where product_id=".$productId.";";
                $x22=0;
                $rs22=mysqli_query($conn,$sel22);
                    if($rs22)
                    {
                        if(mysqli_num_rows($rs22)>0)
                        {
                            while ($data22=mysqli_fetch_assoc($rs22)) 
                            {
                                $companyId=$data22["company_id"];
                            
                                $x22=$x22+1;
                            }
                        }
                    }
                 $data2100[$x2] = array("0" => stripslashes($companyId),"1" => stripslashes($data2["product_id"]),"2" => stripslashes($data2["amount"]),"3" => stripslashes($data2["quantity"]),"4" => stripslashes($data2["total"]));
				 
				 $x2=$x2+1;
			}
		}
	}
    // // $output= array('invoice'=>$data100);
   
    
    $output1= array('items'=>$data2100);
  //  print_r( $output1);
    $data100[0]+=$output1;

    // echo $data100[0];

    // foreach ($data2100[1] as $key => $value) {

    //     echo $key;
    // }

    // echo "<br>";
    // array_merge($output,$output1);
    //print_r( $output);
// $output2= json_encode(array('product_type'=>$data2));
// array_merge($data100,$data2100);
// print_r($data100);
// $output= array('invoice'=>$data100);
 $response = json_encode(array('invoice'=>$data100[0]));
// //	echo $output.",".$output2;
// 	// $output_assembly->JSON->data=$output;
echo $response;

?>