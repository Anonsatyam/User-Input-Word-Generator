import { Component } from '@angular/core';
import arrayWord from '../utilities/words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  limit = 10;
  word = '';

  changeCount(newNumber: number) {
    this.limit = newNumber
  }

  generate() {
    this.word = arrayWord.slice(0, this.limit).join(" ");
  }
}
