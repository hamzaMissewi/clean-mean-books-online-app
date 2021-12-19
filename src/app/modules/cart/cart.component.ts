import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartContent: any = [];
  totalPrice: number = 0;
  TAX_RATE: number = 0.2;

  constructor(
    private cartService: CartService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.getCartContentDetails();
  }

  getCartContentDetails() {
    this.bookService.all().subscribe((res) => {
      const books = Object.values(res);
      for (let index = 0; index < this.cartContent.length; index++) {
        const book = books.filter(
          (book) => book._id == this.cartContent[index].id
        )[0];
        this.cartContent[index].titre = book.titre;
        this.cartContent[index].prix = book.prix;
      }
      this.computeTotalPrice();
    });
  }
  computeTotalPrice() {
    this.cartContent.forEach((item: { price: number; quantity: number }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  clearCart() {
    this.cartService.clear();
    this.ngOnInit();
  }
}
