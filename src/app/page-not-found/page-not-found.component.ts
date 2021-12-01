import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
currRoute:any = "notfound";
  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
this.toaster.info('Page Not Found. Please redirect to login')
  }

}
