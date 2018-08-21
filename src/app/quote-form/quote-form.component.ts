import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";
@Component({
  selector: "app-quote-form",
  templateUrl: "./quote-form.component.html",
  styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
  public quote: Quotes;
  quotes = [
    new Quotes( "","","", new Date(), 0, -0)
    
  ];

  public userAuthor;
  public userQuote;
  public userDate;
  public upVotes ;
  public downVotes;
  @Output()
  createQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.quote = new Quotes(
      this.userAuthor,
      this.userQuote,
      this.userDate,
      this.userDate,
      this.upVotes,
      this.downVotes
    );
    console.log(this.quotes);
    this.createQuote.emit(this.quote);
  }
  constructor() {}
  ngOnInit() {}
}
