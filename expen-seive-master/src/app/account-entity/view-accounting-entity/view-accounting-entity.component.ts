import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { Router } from '@angular/router';
//import { BackEndCalls } from '../../services/backendcalls.service';
import { accounting_entity_manager } from './accounting-entity-manager';
import { AccountEntityService } from './accounting-entity-manager.service';


@Component({
  selector: 'view-accounting-entity',
  templateUrl: './view-accounting-entity.component.html',
  styleUrls: ['./view-accounting-entity.component.scss']
})
export class ViewAccountEntity implements OnInit {

  allEntity:accounting_entity_manager[]= [];

  constructor(public data1:AccountEntityService,public _router:Router) { }

  ngOnInit() {


         this.data1.getAllMaster().subscribe(

          (data:any)=>{
            this.allEntity=data;
            this.allEntity=data;
            
            console.log(this.allEntity);

          }
    ); 
  }

  deleteentity(item:accounting_entity_manager){

  this.data1.deleteEntity(item.entity_id).subscribe(

    (data:any)=>{
      this.allEntity.splice(this.allEntity.indexOf(item),1);
      alert('udi gayu');
    },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
  );

  }

  /*addMenuitem(item:accounting_entity_manager)
  {
    this._router.navigate(['/addmenuitems',0]);
  }*/

  updateEntity(item:accounting_entity_manager)
  {
       this._router.navigate(['/addmenuitems',item.entity_id]);
  }
}
