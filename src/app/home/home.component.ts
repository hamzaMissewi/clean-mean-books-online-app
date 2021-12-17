import { Component, OnInit } from '@angular/core';
import { books } from '../books-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public booksList = books;

  constructor() { }

  ngOnInit(): void {
    console.log(this.booksList);
  }

}
