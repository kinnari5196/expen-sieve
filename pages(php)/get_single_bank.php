<?php
    header('Access-Control-Allow-Origin: *');
     require 'connection.php';       
     $post_date=file_get_contents('php://input');
      $data=json_decode($post_date);

      $ano=$data->accountNo;
      //$ano=524;
      //0 is cash 1 is credit
      $bid=1;
      $is=0;
      
     // $id="0";
      //echo json_encode($items[$id]->$id);

      $qry22=" SELECT * from bank WHERE account_no=".$ano."";
      $rs22=mysqli_query($conn,$qry22);
      if($rs22)
      {
        if(mysqli_num_rows($rs22)>0)
		{
			while ($data=mysqli_fetch_assoc($rs22)) 
			{
                  //  $eid=$data["account_no"];
                    $gid=3;
                        $qry222=" SELECT * from ac_master WHERE entity_id=".$ano." AND group_id=".$gid."";
                        $rs222=mysqli_query($conn,$qry222);
                        if($rs222)
                        {
                            if(mysqli_num_rows($rs222)>0)
                            {
                                while ($data222=mysqli_fetch_assoc($rs222)) 
                                {
                                   $dateSince=$data222["date_since"];
                                   $amount=$data222["amount"];
                                }
                            }
                        }
                        $x=0;
                $data1[$x] = array("dateSince"=>stripslashes($dateSince),"balance"=>stripslashes($amount),"pincode" => stripslashes($data["pincode"]),"acNo" => stripslashes($data["account_no"]), "name" => stripslashes($data["name"]), "bsrCode" => stripslashes($data["bsrcode"]), "address" => stripslashes($data["addressline"]), "gstNo" => stripslashes($data["gst_no"]));
				 
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