import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  
  addNewQuotes(Quote){
    let QuoteLength = this.addNewQuotes.length;
    Quote.id=QuoteLength+1;
   
   

}
constructor() { }

  ngOnInit() {
  }
  
 
  }


