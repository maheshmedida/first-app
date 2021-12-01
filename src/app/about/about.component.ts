import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  currRoute:any = "about"
  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
    this.toaster.show('Know us more here')
  }

}
