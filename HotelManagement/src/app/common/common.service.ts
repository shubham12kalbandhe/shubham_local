import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
   journey!: string;
  userName!: string;
  forgetPassword! :boolean;
  id!: number;
  constructor(private toastrService :ToastrService) { }

  warningToaster(msg:any,title:any,configuratin:any){
    this.toastrService.warning(msg,title,configuratin)
  }
}
