import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') === 'true') {
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['login']);
    }
  }

  sideBarToggler($event: any): void {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
