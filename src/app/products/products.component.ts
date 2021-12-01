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
  constructor(private toaster: ToastrService, private productService: AppDataService) { }

  ngOnInit(): void {
    this.toaster.show('Explore our products here')
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
    console.log('agsndxnsksmccnfudksxc dusi')
  }
}
