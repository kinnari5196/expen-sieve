<?php
    header('Access-Control-Allow-Origin: *');
     require 'connection.php';       
     $post_date=file_get_contents('php://input');
      $data=json_decode($post_date);

      $ano=$data->entityId;
     // $ano=2;
      //0 is cash 1 is credit
      $bid=1;
      $is=0;
      $x=0;
     // $id="0";
      //echo json_encode($items[$id]->$id);

      $qry22=" SELECT * from ac_entity WHERE entity_id=".$ano."";
      $rs22=mysqli_query($conn,$qry22);
      if($rs22)
      {
        if(mysqli_num_rows($rs22)>0)
		{
			while ($data=mysqli_fetch_assoc($rs22)) 
			{
                  //  $eid=$data["account_no"];
                    $gid=4;
                        $qry222=" SELECT * from ac_master WHERE entity_id=".$ano." AND group_id>=".$gid."";
                        $rs222=mysqli_query($conn,$qry222);
                        if($rs222)
                        {
                            if(mysqli_num_rows($rs222)>0)
                            {
                                while ($data222=mysqli_fetch_assoc($rs222)) 
                                {
                                   $dateSince=$data222["date_since"];
                                   $amount=$data222["amount"];
                                   $groupId=$data222["group_id"];
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
                                   
                                }
                            }
                        }
                $data1[$x] = array("acGroup"=>stripslashes($groupname),"dateSince"=>stripslashes($dateSince),"balance"=>stripslashes($amount),"entityNo" => stripslashes($data["entity_id"]), "name" => stripslashes($data["name"]), "description" => stripslashes($data["description"]), "gstNo" => stripslashes($data["gst_no"]));
				 
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