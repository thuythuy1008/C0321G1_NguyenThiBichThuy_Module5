import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  checkHidden: boolean = true;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }, this.check),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  ngOnInit(): void {
  }

  check(password: AbstractControl): any {
    const confim = password.value;
    return confim.password == confim.confirmPassword ? null : {invalid: true};
  }

  submitForm(): void {
    this.checkHidden = false;
  }
}
