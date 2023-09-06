import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
status: boolean = false;
body = document.body;
  constructor() { }

  ngOnInit(): void {

  }
  dirlang(){
    this.body.classList.add('rtl');
    this.status = !this.status;
  }
  lrtlang(){
    this.body.classList.remove('rtl');
    this.status = !this.status;
  }
}
