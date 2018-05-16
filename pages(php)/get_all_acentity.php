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
$gid=4;
$acNo=0;
$sel="SELECT * FROM ac_entity where  isactive=".$is.";";
$x=0;
$groupId=0;
$rs=mysqli_query($conn,$sel);
	if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
		{
			while ($data=mysqli_fetch_assoc($rs)) 
			{

                $entityId=$data["entity_id"];


                $sel5="SELECT * FROM ac_master where  entity_id=".$entityId." AND group_id>=".$gid.";";
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
                                    $groupId=$data5["group_id"];
                            }
                        }
                    }
                        $qry2222=" SELECT * from ac_group WHERE group_id=".$groupId."";
                        $rs2222=mysqli_query($conn,$qry2222);
                        if($rs2222)
                        {
                            if(mysqli_num_rows($rs2222)>0)
                            {
                                while ($data2222=mysqli_fetch_assoc($rs2222)) 
                                {
                                   $groupname=$data2222["name"];
                                  // echo "<br>".$groupname."<br>";
                                }
                            }
                        }


                    $data1[$x] = array("acGroup"=>stripslashes($groupname),"dateSince"=>stripslashes($date_since),"balance"=>stripslashes($opening_balance),"entityNo" => stripslashes($data["entity_id"]), "name" => stripslashes($data["name"]), "description" => stripslashes($data["description"]), "gstNo" => stripslashes($data["gst_no"]));
			   
				 $x=$x+1;
			}
		}
	}



	$output= array('acentity'=>$data1);
//$output2= json_encode(array('product_type'=>$data2));
 $response = json_encode($output);
	//echo $output.",".$output2;
	//$output_assembly->JSON->data=$output;
echo $response;

?>