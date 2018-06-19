import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { Contact } from './contact';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class ContactService{

    constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
          console.log(data)
      });
    }
  
    public getJSON(): Observable<any> {
        return this.http.get("../../data/ads.json")
    }

    //Deprecated
    public getContact(): Observable<any> {
         return this.http.get("../../data/ads.json")
    }

}
