<?php
    header('Access-Control-Allow-Origin: *');
     require 'connection.php';       
     $post_date=file_get_contents('php://input');
      $data=json_decode($post_date);
      $invoice_id = $data->invoiceId;
      $cid=$data->customerId;
      $date=$data->date;
      $aet=$data->additionalExpText;
      $aea=$data->additionalExpAmt;
      $sta=$data->subTotalAmt;
      $ca=$data->cgstAmt;
      $sa=$data->sgstAmt;
      $ia=$data->igstAmt;
      $gta=$data->grandTotalAmt;
      $cc=$data->cashCredit;//0 is cash 1 is credit
      $bid=1;
      $is=0;
     
      $itemCount=$data->itemsCount;
      $items = $data->items;
     // $id="0";
      //echo json_encode($items[$id]->$id);
      $qry22="UPDATE invoice SET date='".$date."',customer_id=".$cid.",cgst=".$ca.",sgst=".$sa.",igst=".$ia.",sub_total=".$sta.",grand_total=".$gta.",cash_credit=".$cc.",additional_expenses=".$aea.",additional_expenses_text='".$aet."',business_id=".$bid.",isactive=".$is." WHERE invoice_id=".$invoice_id." ";
      $rs22=mysqli_query($conn,$qry22);
       
      if($rs22)
      {
        
      }
      else
      {
        echo json_encode("Cannot update in Invoice");
        return;
      }

      $qry2222="DELETE FROM invoice_items WHERE invoice_id=".$invoice_id." ";
      $rs2222=mysqli_query($conn,$qry2222);
       
      if($rs2222)
      {
        
      }
      else
      {
        echo json_encode("Cannot delete from invoice_items");
        return;
      }

      

      $so = 0;
      //echo json_encode($items[$so]->$so);
      for ($i=0; $i < $itemCount ; $i++) 
      { 
        $str = '' . $i;
        $k1='1';
        $k2='2';
        $k3='3';
        $k4='4';
        
        $rs1=$items[$str]->$k1;
        $rs2=$items[$str]->$k2;
        $rs3=$items[$str]->$k3;
        $rs4=$items[$str]->$k4;
    

        $qry223="INSERT INTO invoice_items(invoice_id, quantity, amount, total, product_id,isactive) 
                 VALUES (".$invoice_id.",".$rs3.",".$rs2.",".$rs4.",".$rs1.",".$is.")";
        $rs223=mysqli_query($conn,$qry223);
        if($rs223)
        {
          $so++;
        }
        else
          break;
      }
      $so1="inserted successfully";
      echo json_encode($so1);
     
?>