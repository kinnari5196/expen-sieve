

<?php
    header('Access-Control-Allow-Origin: *');
   
require 'connection.php';
    $post_date=file_get_contents('php://input');
    $data=json_decode($post_date);
   // $json = json_decode(file_get_contents('php://input'), true);
     
    // if($json["email"] == "h@gmail.com" && $json["pass"] == "asas")
    //     echo '{"authentic":true}';
    // else
    // echo '{"authentic":false}';
    // echo "console.log($json)";
    // echo $json;
    // echo "asdfc";
   // echo "product name ".$data->ProductName." hsn code ". $data->hsnCode." company id ".$data->companyName." stock ".$data->productStock." product type id ".$data->productType   ;


     
    //   $gn=$data->groupName;
    //   $side=$data->side;
      $gn='tea';
      $side='debit';
      

      $is=0;
      $bid=1;
     // $ss="active";
        $qry22="INSERT INTO ac_group( name, side, business_id,isactive) VALUES('".$gn."','".$side."',".$bid.",".$is.")";
       $rs22=mysqli_query($conn,$qry22);
        if($rs22)
        {

          $msg=" inserted succesfully in ac_group";
            echo $msg;

            
        }
        else
        {
          $msg=" not successfully in ac_group";
          echo $msg;

        }
                                      
?>