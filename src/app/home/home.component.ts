import { Component, OnInit } from '@angular/core';
import { books } from '../books-list';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public booksList = books;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.booksList);
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }
}
