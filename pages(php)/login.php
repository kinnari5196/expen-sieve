

<?php
    header('Access-Control-Allow-Origin: *');
session_start();   
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


      $bn=$data->businessName;
      $pass=$data->password;
     
// $cn="shilpi";
//       $ob=10000;
//       $ds='1997-02-03';
//       $gn='12asd123as';
//       $ca="home sweet home";
//       $p1=9427599821;
//       $p2=9265456578;
//       $pc=380015;
//       $type='c';

      // $p1=8809960201;
      // $p2=8829304484;
      
     // $bid=1;
     // $ss="active";
  $qry="SELECT * FROM business_info WHERE business_name='".$bn."' AND password='".$pass."'";
  $rs=mysqli_query($conn,$qry);
                                                                                   
                   if($rs->num_rows>0)
                  {
                    $row = mysqli_fetch_assoc($rs);
                    $_SESSION['bid']=$row['business_id'];
                    $msg=$_SESSION['bid'];
                      echo $msg;
                   }
                  else
                  {
                    $msg=-1;
                      echo $msg;
                  }

?>