import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from 'src/app/models/notification';
import { DialogService } from 'src/app/services/dialog-service.service';
import { NotificationService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-edit-not',
  templateUrl: './edit-not.component.html',
  styleUrls: ['./edit-not.component.css']
})
export class EditNotComponent {

  form: FormGroup;

  notId: any;
  notData: Notification = { description: '', issuer: '', receptor: '', state: false};
  showMessage = false;

  constructor(private route: ActivatedRoute, private _notService: NotificationService, private _fb: FormBuilder, private _router: Router, private dialogService: DialogService) {
    this.form = this._fb.group({
      "description": ['', Validators.required],
      "issuer": ['', Validators.required],
      "receptor": ['', Validators.required],
      "state": ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.notId = this.route.snapshot.params['id'];
    this.getNotData();
  }

  getNotData(): void {
    this._notService.getNot(this.notId).subscribe(
      (data: Notification) => {
        this.notData = data;
        this.form.patchValue({
          description: this.notData.description,
          issuer: this.notData.issuer,
          receptor: this.notData.receptor,
          state: this.notData.state
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  editNot():void{

    this.dialogService.openConfirmDialog("The changes where done correctly.", "OK", "Cancel")
    .afterClosed().subscribe(res => {
      if(res){
        this._notService.updateNot(this.notId,this.form.value).subscribe(data =>{
          this._router.navigate(['/notifications']);            
        }, error => {
          console.log(error);
        })
      }
    });
    
  }

}
