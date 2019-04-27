import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from './book';

@Component({
    //selector:"book-details",
    templateUrl:"./book-details.component.html"
})

export class BookDetailsComponent implements OnInit{
    // book={
    //     "bookId": 101,
    //     "imageUrl": "assets/images/java8_in_action.jpeg",
    //     "title": "Java 8 in Action",
    //     "authors": [
    //           {"firstName": "Raoul-Gabriel", "lastName": "Urma"},
    //           {"firstName": "Mario", "lastName": "Fusco"},
    //           {"firstName": "Alan", "lastName": "Mycroft"}
    //      ],
    //      "category": "programming",
    //      "publisher": "Wiley",
    //      "noOfPages": 424, 
    //      "rating": 4.4,
    //      "edition": 2,
    //      "price": 618,
    //      "releaseDate": new Date(2018,5,23)
    // }

    constructor(private bookService:BookService, private route:ActivatedRoute){}
    book:Book;
    ngOnInit():void{
        this.route.paramMap.subscribe((map)=>{
    let bookId = map.get("bookId");
        console.log(bookId);
        this.bookService.findBookById(bookId).subscribe((data)=>{
            this.book=data;
        })
    });

}
}