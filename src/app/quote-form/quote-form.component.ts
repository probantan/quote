import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";
@Component({
  selector: "app-quote-form",
  templateUrl: "./quote-form.component.html",
  styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
  public Quote: Quotes;
    

  @Output()
  createQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.Quote = new Quotes(this.Quote.author,this.Quote.quote,this.Quote.name,this.Quote.Date,this.Quote.upVotes,this.Quote.downVotes,);
    this.createQuote.emit(this.Quote);
  
  }
  constructor() {}
  ngOnInit() {}
}
