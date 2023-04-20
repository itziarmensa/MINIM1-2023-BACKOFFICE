import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service.service';
import { NotificationService } from 'src/app/services/notification-service.service';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-nots-user',
  templateUrl: './nots-user.component.html',
  styleUrls: ['./nots-user.component.css']
})
export class NotsUserComponent implements OnInit{

  currentPage: number = 1;
  totalPages: number = 1; 
  limit: number = 2; 

  userId: any;

  constructor( private _notService: NotificationService, private _router: Router, private dialogService: DialogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getNotifications();
  }

  notifications: Notification [] = [];

  getNotifications(): void{
    this._notService.getNotsUser(this.userId).subscribe(
      (data) => {
        this.notifications = data.notifications;
        console.log(this.notifications);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
