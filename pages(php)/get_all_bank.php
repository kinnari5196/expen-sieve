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
$is=0;
$bid=1;
$gid=3;
$acNo=0;
$sel="SELECT * FROM bank where  isactive=".$is.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{

                $pincode=$data["pincode"];
                $acNo=$data["account_no"];


                $sel5="SELECT * FROM ac_master where  entity_id=".$acNo." AND group_id=".$gid.";";
                $x5=0;
                $rs5=mysqli_query($conn,$sel5);
                    if($rs5)
                    {
                        if(mysqli_num_rows($rs5)>0)
                        {
                            while ($data5=mysqli_fetch_assoc($rs5)) 
                            {
                                    $date_since=$data5["date_since"];
                                    $opening_balance=$data5["amount"];
                            }
                        }
                    }



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
                                                            
                                                              $x1111=$x1111+1;
                                                          }
                                                      }
                                                  }

                                               $x111=$x111+1;
                                           }
                                       }
                                   }

                                $x11=$x11+1;
                            }
                        }
                    }
                
                 $data1[$x] = array("balance" => stripslashes($opening_balance),"dateSince"=> stripslashes($date_since),"pincode" => stripslashes($pincode),"area" => stripslashes($area),"state" => stripslashes($state),"city" => stripslashes($city),"acNo" => stripslashes($data["account_no"]), "name" => stripslashes($data["name"]), "bsrCode" => stripslashes($data["bsrcode"]), "address" => stripslashes($data["addressline"]), "gstNo" => stripslashes($data["gst_no"]));
                    
				 $x=$x+1;
			}
		}
	}



	$output= array('bank'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>