import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Notification } from '../models/notification';


@Injectable({
    providedIn: 'root'
  })
  export class NotificationService {
    url = 'http://localhost:4002/notifications';
  
    constructor(private http: HttpClient) { }
  
    getNots(page: number, limit: number): Observable<{ notifications: Notification[], totalPages: number }> {
      const url = `${this.url}/all?page=${page}&limit=${limit}`;
      return this.http.get<any>(url).pipe(
        map(res => {
          return {
            notifications: res.docs,
            totalPages: res.totalPages
          };
        })
      );
    }
  
    deleteNot(id: any): Observable<Notification> {
      return this.http.delete<Notification>(this.url + '/' + id);
    }
  
    getNot(id: any): Observable<Notification> {
      return this.http.get<Notification>(this.url + '/' + id);
    }
  
    updateNot(id: string, user: Notification): Observable<Notification> {
      return this.http.put<Notification>(this.url + '/' + id, user);
    }

    postNot(notification: Notification): Observable<Notification>{
      return this.http.post<Notification>(this.url, notification);
    }

    getNotsUser(id: any): Observable<{notifications: Notification[]}>{
      console.log(this.url + '/rec/' + id);
      return this.http.get<{notifications: Notification[]}>(this.url + '/rec/' + id);
      
    }
    
  }