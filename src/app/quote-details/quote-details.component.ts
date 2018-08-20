import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() complete = new EventEmitter<boolean>();

  upVote() {
    this.quote.upVotes ++;
  }
  downVote() {
    this.quote.downVotes --;
  }

  deleteQuote(deleteIt: boolean) {
    this.complete.emit(deleteIt);
  }



  constructor() { }

  ngOnInit() {
  }

}

