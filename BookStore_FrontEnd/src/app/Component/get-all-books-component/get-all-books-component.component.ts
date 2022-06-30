import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../Service/book.service';

@Component({
  selector: 'app-get-all-books-component',
  templateUrl: './get-all-books-component.component.html',
  styleUrls: ['./get-all-books-component.component.scss']
})
export class GetAllBooksComponentComponent implements OnInit {
  booksArray: any = [];
  bookQuantity : any;
  Book:any; //variable for store id of book
  book:any;
  default_Image= "https://res.cloudinary.com/guruprasad489/image/upload/v1653326452/BookStore/default_book_cover_2015_fiqpmu.jpg";
  sortBy:any="Sort by relevence";
  orderQuantity=1;
  bookList: any;
  
  constructor(private bookService:BookService,private route:Router) { }

  ngOnInit(): void {
    // this.bookService.getAllBook.subscribe((response: any) => {
    //   //console.log("Data recieved", response);
    //   this.searchString = response
    // })
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBook().subscribe((response: any) => {
      console.log("GetAll Books successful", response.data);
      this.bookList = response.data;
      // this.bookList.reverse();
    });
  }

  relevence(){  
    this.bookList = this.bookList.sort((x: any, y: any) => x.bookId - y.bookId);
    this.sortBy="Sort by relevence";

  }

  PriceLowToHigh(){
    this.bookList = this.bookList.sort((x: any, y: any) => x.discount_Price - y.discount_Price);
    this.sortBy="Price -- Low to High";
  }

  PriceHighToLow(){ 
    this.bookList = this.bookList.sort((x: any, y: any) => y.discount_Price - x.discount_Price);
    this.sortBy="Price -- High to low";
  }

  newestFirst(){
     this.bookList = this.bookList.sort((x: any, y: any) => y.bookId - x.bookId);
     this.sortBy="newest First";
  }

  quickView(bookId:any){
    this.route.navigateByUrl('/dashBoard/quick-view/' + bookId);
  }
}