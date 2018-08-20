import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes('Protus Bantan', 'A man who dares to waste one hour of time has not discovered the value of life','Protus Oduor',new Date(2018/1/2), 0,-0,
  )
  
  ]

  
  addNewQuote(Quote){
    let QuoteLength = this.addNewQuote.length
    Quote.id=QuoteLength+1;
  }

  deleteQuote(complete, index) {
      if (complete) {
        this.quotes.splice(index, 1);
      }
    }


constructor() { }

  ngOnInit() {
  }
  
 
  }


