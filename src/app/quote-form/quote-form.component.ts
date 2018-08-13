import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  Quote=new Quotes("", "",42);

  @Output() createQuote=new EventEmitter<Quotes>();
    
  submitQuote(){
      this.createQuote.emit(this.Quote);
  }
constructor() { }
ngOnInit() {
}

}
