import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';


class Books {
  id: number
  title: string
  year: number
  author: string

  constructor(id: number, title: string, year: number, author: string) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author;
  }
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})



export class CrudComponent implements OnInit {
  // url: string = "../assets/booklist.json"
  books: Array<Books> = [];
  isUpdate:boolean=false;
  index:number
  book:Books;

  constructor(private svc:CrudService) { }

  ngOnInit() {
    this.svc.client().subscribe(
      (response) => {
        console.log(response)
        this.books = response;
        console.log(this.books);

      },
      (error) => { console.log("Not responding") }

    )
  }

  add(value: any) {
    this.books.push(new Books(value.id, value.title, value.year, value.author))
  }

  deleteBook(i: number) {
    this.books.splice(i, 1)
  }

  updateBook(i:number,book2:Books) {
    this.isUpdate=true
    this.index=i;
    // this.book=this.books[i]
    this.book=book2;
   
    console.log(i)
    
  }
  updateBook2(value:any) {
    this.isUpdate=false
    this.books.splice(this.index,1,new Books(this.book.id, value.title, value.year, value.author))
    
  }



  sor(i: any) {
    console.log(i)
    switch (i) {
      case 1:
        this.books.sort( (obj1, obj2)=> obj1.id - obj2.id
          // Ascending: first age less than the previous
          
        );
        break;
      case 2:
        this.books.sort(function (a, b) {
          var nameA = a.title.toUpperCase(); // ignore upper and lowercase
          var nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        break;
      case 3:
        this.books.sort(function (obj1, obj2) {
          // Ascending: first age less than the previous
          return obj1.year - obj2.year;
        });
        break;
      case 4:
        this.books.sort(function (a, b) {
          var nameA = a.author.toUpperCase(); // ignore upper and lowercase
          var nameB = b.author.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        break;

    }

  }

}
