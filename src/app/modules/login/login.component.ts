import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  @Input() error: string | null;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    localStorage.setItem('user', 'false');
  }

  submit(): void {
    if (this.form.valid) {

    }
  }

  logar(): void {
    if ((this.form.value.username === 'admin' && this.form.value.password === 'admin123') || (this.form.value.username === 'marcelo' && this.form.value.password === 'lima123')) {
      localStorage.setItem('user', 'true');
      this.router.navigate(['home']);
      this.error = null;
    }else{
      this.error = 'Usuário inválido!';
    }
  }
}
