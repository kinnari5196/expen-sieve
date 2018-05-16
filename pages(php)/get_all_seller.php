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
$type='s';
$grup_id=1;
$sel="SELECT * FROM customer_seller where business_id=".$bid." AND isactive=".$is." AND type='".$type."';";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{


                $cs_id=$data["cs_id"];
                $pincode=$data["pincode"];
                $phone_id=$data["phone_id"];
                
                $sel1="SELECT * FROM phone_no where isactive=".$is." AND phone_id=".$phone_id.";";
                $x1=0;
                $rs1=mysqli_query($conn,$sel1);
                    if($rs1)
                    {
                        if(mysqli_num_rows($rs1)>0)
                        {
                            while ($data1=mysqli_fetch_assoc($rs1)) 
                            {
                                $phone1=$data1["phone_no1"];
                                $phone2=$data1["phone_no2"]; 
                            }
                        }
                    }

                    $sel21="SELECT * FROM address where pincode=".$pincode.";";
                    $x21=0;
                    $rs21=mysqli_query($conn,$sel21);
                        if($rs21)
                        {
                            if(mysqli_num_rows($rs21)>0)
                            {
                                while ($data21=mysqli_fetch_assoc($rs21)) 
                                {
                                    $areaname=$data21["area"];
                                    $city_id=$data21["city_id"]; 
                                }
                            }
                        }

                        $sel221="SELECT * FROM city where city_id=".$city_id.";";
                        $x221=0;
                        $rs221=mysqli_query($conn,$sel221);
                            if($rs221)
                            {
                                if(mysqli_num_rows($rs221)>0)
                                {
                                    while ($data221=mysqli_fetch_assoc($rs221)) 
                                    {
                                        $cityname=$data221["city_name"];
                                        $state_id=$data221["state_id"]; 
                                    }
                                }
                            }
                 
                            $sel2221="SELECT * FROM state where state_id=".$state_id.";";
                            $x2221=0;
                            $rs2221=mysqli_query($conn,$sel2221);
                                if($rs2221)
                                {
                                    if(mysqli_num_rows($rs2221)>0)
                                    {
                                        while ($data2221=mysqli_fetch_assoc($rs2221)) 
                                        {
                                            $statename=$data2221["state_name"];
                                        }
                                    }
                                }
                            $group_id=2;
                            $sel22221="SELECT * FROM ac_master where entity_id=".$cs_id." AND group_id=".$group_id.";";
                            $x22221=0;
                            $rs22221=mysqli_query($conn,$sel22221);
                                if($rs22221)
                                {
                                    if(mysqli_num_rows($rs22221)>0)
                                    {
                                        while ($data22221=mysqli_fetch_assoc($rs22221)) 
                                        {
                                            $balance=$data22221["amount"];
                                        }
                                    }
                                }

                 $data11[$x] = array("id" => stripslashes($data["cs_id"]), "name" => stripslashes($data["name"]), "address" => stripslashes($data["addressline"]), "pincode" => stripslashes($data["pincode"]), "gstNo" => stripslashes($data["gst_no"]),"phone1" => stripslashes($phone1),"phone2" => stripslashes($phone2),"area" => stripslashes($areaname),"city" => stripslashes($cityname),"state" => stripslashes($statename),"currentBalance" => stripslashes($balance));
				 
				 $x=$x+1;
			}
		}
	}



	$output= array('sellers'=>$data11);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>