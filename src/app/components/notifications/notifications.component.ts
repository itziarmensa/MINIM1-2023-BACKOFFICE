import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service.service';
import { NotificationService } from 'src/app/services/notification-service.service';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  currentPage: number = 1;
  totalPages: number = 1; 
  limit: number = 2; 

  constructor( private _notService: NotificationService, private _router: Router, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  notifications: Notification [] = [];

  getNotifications(){
    this._notService.getNots(this.currentPage, this.limit).subscribe(data => {
      this.notifications = data.notifications;
      this.totalPages = data.totalPages;
    }, error => {
      console.log(error);
    })
  }

  prevPage() {
    this.currentPage = this.currentPage - 1; 
    this.getNotifications();
  }

  nextPage() {
    this.currentPage = this.currentPage + 1; 
    this.getNotifications();
  }

  addNot(){
    this._router.navigate(['/add-notification']);
  }

  confirmDelete(id: any) {
    this.dialogService.openConfirmDialog("Are you sure you wish to delete this element?", "Yes", "No")
    .afterClosed().subscribe(res => {
      if(res){
        this.deleteANot(id);
        this.getNotifications();
      }
    });
  }

  deleteANot(id:any){
    this._notService.deleteNot(id).subscribe(data => {
      this.notifications = [];
      this.getNotifications();    
    }, error => {
      console.log(error);
    })   
  }

  passNot(notification: any) {
    this._router.navigate(['/edit-not/' + notification._id]);
  }

}
