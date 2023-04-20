import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent {

  form: FormGroup;

  constructor(private _fb: FormBuilder, private _notService: NotificationService, private _router: Router){
    this.form = this._fb.group({
      "description": ['', Validators.required],
      "issuer": ['', Validators.required],
      "receptor": ['', Validators.required],
      "state": ['', Validators.required],
    })
  }

  addNot(): void{
    this._notService.postNot(this.form.value).subscribe(data => {
      console.log(this.form.value);
      this._router.navigate(['/notifications']);
    }, error => {
      console.log(error);
    })
  }

}
