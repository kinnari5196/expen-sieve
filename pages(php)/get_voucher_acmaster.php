<?php
//this page will give array of ac_master
   
//account_id
//name(as per group_id and entity_id)


header('Access-Control-Allow-Origin: *');
require 'connection.php';
$bid=1;
$is=0;
$sel="SELECT * FROM ac_master where business_id=".$bid." AND isactive=".$is.";";
$x=0;
$rs=mysqli_query($conn,$sel);
    if($rs)
    {
        if(mysqli_num_rows($rs)>0)
        {
            while ($data=mysqli_fetch_assoc($rs)) 
            {
                
                $entity_id=$data["entity_id"];
                $group_id=$data["group_id"];
                
                if($group_id==1 || $group_id==2)
                {
                    $sel1="SELECT * FROM customer_seller where cs_id=".$entity_id." AND isactive=".$is.";";
                    $x1=0;
                    $rs1=mysqli_query($conn,$sel1);
                    if($rs1)
                    {
                          if(mysqli_num_rows($rs1)>0)
                        {
                            while ($data11=mysqli_fetch_assoc($rs1)) 
                            {
                
                                 $name=$data11["name"];
                 
                                 $x1=$x1+1;
                            }
                        }
                    }  
                }
                else if($group_id==3)
                {
                    $sel1="SELECT * FROM bank where account_no=".$entity_id." AND isactive=".$is.";";
                    $x1=0;
                    $rs1=mysqli_query($conn,$sel1);
                    if($rs1)
                    {
                          if(mysqli_num_rows($rs1)>0)
                        {
                            while ($data11=mysqli_fetch_assoc($rs1)) 
                            {
                
                                 $name=$data11["name"];
                 
                                 $x1=$x1+1;
                            }
                        }
                    }  
                }
                else
                {
                    $sel1="SELECT * FROM ac_entity where entity_id=".$entity_id." AND isactive=".$is.";";
                    $x1=0;
                    $rs1=mysqli_query($conn,$sel1);
                    if($rs1)
                    {
                          if(mysqli_num_rows($rs1)>0)
                        {
                            while ($data11=mysqli_fetch_assoc($rs1)) 
                            {
                
                                 $name=$data11["name"];
                 
                                 $x1=$x1+1;
                            }
                        }
                    }  
                }
                
                 $data1[$x] = array("id" => stripslashes($data["account_id"]),"text" => stripslashes($name));
                 
                 $x=$x+1;
            }
        }
    }



    $output= array('ac_master'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
    //echo $output.",".$output2;
    //$output_assembly->JSON->data=$output;
echo $response;

?> 