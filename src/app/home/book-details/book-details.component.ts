import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
// import { LocalStorageService } from 'src/app/services/local-storage.service';
import { books } from "src/app/books-list";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book?: any;

  constructor(
    private route: ActivatedRoute,
    // private localStorage: LocalStorageService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      this.book = books.filter((book) => book.id == bookId)[0];
     });
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }


}
