import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
currRoute:any = "home"
  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
    this.toaster.show('Explore our services')
  }

}
