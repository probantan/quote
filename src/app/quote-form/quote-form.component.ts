import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  userModel=new Quotes('Protus','The hhhh jhjhjh',42);

  @Output() addQuote=new EventEmitter<Quotes>();
    
  submit addQuotes(){
      this.addQuote.emit(this.userModel);
  }
constructor() { }
ngOnInit() {
}

}
