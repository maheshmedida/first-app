import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppDataService } from '../app-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  apiStatusConst:any = {
    success: 'SUCCESS',
    failure: 'FAILURE'
  }
  apiStatus:any

  productsData:any
  currRoute:any = "products"

  notScrolly:any= true
  notEmptyData:any= true

  loadingText:any = false
  constructor(private toaster: ToastrService, private productService: AppDataService) { }

  ngOnInit(): void {
    this.toaster.show('Explore our products here')
    console.log('INITIALISED')
    this.productService.getAllProducts()
                        .subscribe((data:any) => {
                          if (data.status === 'SUCCESS'){
                            this.apiStatus = this.apiStatusConst.success
                            this.productsData = data.engagements
                          }else{
                            this.apiStatus = this.apiStatusConst.failure
                          }
                        })
  }

  onScroll(){
    console.log('Scroll Initiated')
      if (this.notScrolly && this.notEmptyData) {
        this.showLoading()
        this.notScrolly = false;
        this.loadNextPost();
       }
  }

  loadNextPost() {
    const url = '';
    // return last post from the array
    const lastProduct = this.productsData[this.productsData.length - 1];
    // get id of last post
    const lastPostId = lastProduct.id;
    // sent this id as key value pair using formdata()
    const dataToSend = new FormData();
    dataToSend.append('id', lastPostId);
    // call http request
    this.productService.getAllProducts2(dataToSend)
    .subscribe( (data: any) => {
      console.log('MAHESH')
       const newProductsData = data.engagements;
       this.loadingText = false
       if (newProductsData.length === 0 ) {
         this.notEmptyData =  false;
       }
       // add newly fetched posts to the existing post
       this.productsData = this.productsData.concat(newProductsData);
       this.notScrolly = true;
     });
  }

  showLoading(){
this.loadingText = true
  }
}
