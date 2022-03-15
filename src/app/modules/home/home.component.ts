import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   cards = [
       {
         icon: 'home',
         title: 'Inicío',
         router: '/',
         color: '#4CAF50'
       },
       {
         icon: 'dashboard',
         title: 'Modelos',
         router: 'modelos/view',
         color: '#4CAF50'
       }
     ];

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  navigateToRota(rota: string): void {
    this.router.navigate([rota]);
  }

}
