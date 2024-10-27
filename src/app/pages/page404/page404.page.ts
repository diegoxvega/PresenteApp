import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
})
export class Page404Page implements OnInit {

  pageTitle='página 404';
  isNotHome = false;

  constructor() { }

  ngOnInit() {
  }

}
