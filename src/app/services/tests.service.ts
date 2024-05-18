import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})

export class TestsService {

  constructor(private http: HttpClient) { 
   
  }

  private headerDict = {
    'apikey': environment.api_key,
    'Authorization': `Bearer ${environment.api_key}`
  };

  private requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders (this.headerDict), 
  };

  public loadTopics(){
    return this.http
      .get<[Topic]>(`${environment.api_url}/topics?select=*`, this.requestOptions);
  }


}
