import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductlistService } from './productlist.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})

export class ProductlistComponent implements OnInit {
    public productlist:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        productname: '',
        price: '',
        details: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private productlistService: ProductlistService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.productlist.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }



  modalpopup: boolean = false;
  Updatemodalpopup: boolean = false;
  show:any = -999;
  deleteshow:any;

       Create() {
      this.isVisibleCreate = false;
        this.productlistService.PostAllproductlistValues(this.productlist).subscribe((data:any) => {
            this.productlist.productname = '',
            this.productlist.price = '',
            this.productlist.details = '',
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: any[] = [];

    Update() {
        this.productlistService.Updateproductlist(this.productlist).subscribe((data:any) => {
            this.productlist.productname = '';
            this.productlist.price = '';
            this.productlist.details = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.productlistService.DeleteproductlistValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.productlistService.GetAllproductlistValues().subscribe((data: any) => {
            this.listOfData = data;
            console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }


    search(search:any){
    if(search.length >= 2){
        const targetValue: any[] = [];
        this.listOfData.forEach((value: any) => {
            let keys = Object.keys(value);
            for (let i = 0; i < keys.length; i++) {
                if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                    targetValue.push(value);
                    break;
                }
            }
        });
        this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }


    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirmDelete(data:any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

  openModal() {
    this.modalpopup = true;
  }

  updateModelPopup(){
    this.Updatemodalpopup = true;
  }

  deleteShow(index:any){
    this.deleteshow = index;
  }

  deleteConfirm(data:any){
    this.Delete(data.id);
    this.deleteshow = -999
  }

    getUpdateById(data:any){
        this.isVisibleUpdate = true;
        this.productlist = data;
    }
}





