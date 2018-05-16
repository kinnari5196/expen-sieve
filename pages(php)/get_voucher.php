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
$sel="SELECT * FROM voucher where business_id=".$bid." AND isactive=".$is.";";
$x=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{
                $f=$data["from_id"];
              // $f="".$f;
                $t=$data["to_id"];
                //$t="".$t;

                //echo "<br>".$data["voucher_id"]." ".$data["to_id"];

              
              
                $sel1="SELECT * FROM ac_master where business_id=".$bid." AND isactive=".$is." AND account_id=".$f.";";
                $x1=0;
                $rs1=mysqli_query($conn,$sel1);
                    if($rs1)
                    {
                        if(mysqli_num_rows($rs1)>0)
                        {
                            while ($data1=mysqli_fetch_assoc($rs1)) 
                            {
                                $eid=$data1["entity_id"];
                                $gid=$data1["group_id"];
                   //   echo "<br>".$eid." ".$gid;

                             if($gid==1 || $gid==2)
                                {
                                    $sel11="SELECT * FROM customer_seller where business_id=".$bid." AND isactive=".$is." AND cs_id=".$eid.";";
                                    $x11=0;
                                    $rs11=mysqli_query($conn,$sel11);
                                        if($rs11)
                                        {
                                            if(mysqli_num_rows($rs11)>0)
                                            {
                                                while ($data11=mysqli_fetch_assoc($rs11)) 
                                                {
                                                    
                                                    $name_entity=$data11["name"];
                                                    //echo ;
                                                }
                                            }
                                        }
                                }
                                else if($gid==3)
                                {
                                    $sel11="SELECT * FROM bank where business_id=".$bid." AND isactive=".$is." AND account_no=".$eid.";";
                                    $x11=0;
                                    $rs11=mysqli_query($conn,$sel11);
                                        if($rs11)
                                        {
                                            if(mysqli_num_rows($rs11)>0)
                                            {
                                                while ($data11=mysqli_fetch_assoc($rs11)) 
                                                {
                                                    
                                                    $name_entity=$data11["name"];
                                                }
                                            }
                                        }
                                }
                                else
                                {
                                    $sel11="SELECT * FROM ac_entity where business_id=".$bid." AND isactive=".$is." AND entity_id=".$eid.";";
                                    $x11=0;
                                    $rs11=mysqli_query($conn,$sel11);
                                        if($rs11)
                                        {
                                            if(mysqli_num_rows($rs11)>0)
                                            {
                                                while ($data11=mysqli_fetch_assoc($rs11)) 
                                                {
                                                    
                                                    $name_entity=$data11["name"];
                                                }
                                            }
                                        }
                                }

                               
                            }
                        }
                    }








                    
                    $sel21="SELECT * FROM ac_master where business_id=".$bid." AND isactive=".$is." AND account_id=".$t.";";
                    $x21=0;
                    $rs21=mysqli_query($conn,$sel21);
                        if($rs21)
                        {
                            if(mysqli_num_rows($rs21)>0)
                            {
                                while ($data21=mysqli_fetch_assoc($rs21)) 
                                {
                                    $eid1=$data21["entity_id"];
                                    $gid1=$data21["group_id"];
                                  //  echo "<br>"."$eid1"." "."$gid1";
                                    if($gid1==1 || $gid1==2)
                                    {
                                        $sel211="SELECT * FROM customer_seller where business_id=".$bid." AND isactive=".$is." AND cs_id=".$eid1.";";
                                        $x211=0;
                                        $rs211=mysqli_query($conn,$sel211);
                                            if($rs211)
                                            {
                                                if(mysqli_num_rows($rs211)>0)
                                                {
                                                    while ($data211=mysqli_fetch_assoc($rs211)) 
                                                    {
                                                        
                                                        $to_entity=$data211["name"];
                                                    }
                                                }
                                            }
                                    }
                                    else if($gid1==3)
                                    {
                                        $sel211="SELECT * FROM bank where business_id=".$bid." AND isactive=".$is." AND account_no=".$eid1.";";
                                        $x211=0;
                                        $rs211=mysqli_query($conn,$sel211);
                                            if($rs211)
                                            {
                                                if(mysqli_num_rows($rs211)>0)
                                                {
                                                    while ($data211=mysqli_fetch_assoc($rs211)) 
                                                    {
                                                        
                                                        $to_entity=$data211["name"];
                                                    }
                                                }
                                            }
                                    }
                                    else
                                    {
                                        $sel211="SELECT * FROM ac_entity where business_id=".$bid." AND isactive=".$is." AND entity_id=".$eid1.";";
                                        $x211=0;
                                        $rs211=mysqli_query($conn,$sel211);
                                            if($rs211)
                                            {
                                                if(mysqli_num_rows($rs211)>0)
                                                {
                                                    while ($data211=mysqli_fetch_assoc($rs211)) 
                                                    {
                                                        
                                                        $to_entity=$data211["name"];
                                                    }
                                                }
                                            }
                                    }
                                }
                            }
                        }
    










				 $data11111[$x] = array("id" => stripslashes($data["voucher_id"]),"from" => stripslashes($name_entity),"to" => stripslashes($to_entity),"date" => stripslashes($data["date"]),"amt" => stripslashes($data["amount"]));
				 
				 $x=$x+1;
			}
		}
	}



	$output= array('voucher'=>$data11111);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>