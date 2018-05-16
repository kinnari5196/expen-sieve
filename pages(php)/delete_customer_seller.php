

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

        $id=$data->id;
        $type=$data->type;
      $phone_id=0;
// $cn="shilpi";
//       $ob=10000;
//       $ds='1997-02-03';
//       $gn='12asd123as';
//       $ca="home sweet home";
//       $p1=9427599821;
//       $p2=9265456578;
//       $pc=380015;
//       $type='c';
if($type=='c')
{
$gp_id=1;
}
else
{
$gp_id=2;
}
      // $p1=8809960201;
      // $p2=8829304484;
      $is=1;
      $bid=1;
     // $ss="active";
    $qry="UPDATE customer_seller SET isactive=".$is." WHERE cs_id=".$id." ";
  $rs1=mysqli_query($conn,$qry);
    if($rs1)
    {
     // $msg="inserted successfully";
     

     $qry111="SELECT * from customer_seller WHERE cs_id=".$id." ";
     $rs1111=mysqli_query($conn,$qry111);
       if($rs1111)
       {
        if(mysqli_num_rows($rs1111)>0)
        {
            while ($data1111=mysqli_fetch_assoc($rs1111)) 
            {
                $phone_id=$data1111["phone_id"];
                
            }
        }
       }
       else
       {

       } 
       $qry221="UPDATE phone_no SET isactive=".$is." WHERE phone_id=".$phone_id." ";
       $rs221=mysqli_query($conn,$qry221);
         if($rs221)
         {
          // $msg="inserted successfully";
          
         } 
         else
         {

         }
         $g1=1;
         $g2=2;
         $qry2221="UPDATE ac_master SET isactive=".$is." WHERE entity_id=".$id." AND (group_id=".$g1." OR group_id=".$g2.") ";
       $rs2221=mysqli_query($conn,$qry2221);
         if($rs2221)
         {
          $msg="deleted successfully";
          echo json_encode($msg);
         } 
         else
         {

         }
       
    }
    else
    {
      $msg="phone_no not successfully";
      echo $msg;
    }

?>