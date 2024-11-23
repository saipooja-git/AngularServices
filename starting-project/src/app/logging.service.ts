import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
log(message:string){
  const timeStamp = new Date().toLocaleTimeString();
  console.log(`$(message}+${timestamp}`)
}
  constructor() { }
}
