import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
   journey!: string;
  userName!: string;
  constructor() { }
}
