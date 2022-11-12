import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'World';
  chartData = [];

  test = new FormControl('');

  testing() {
    const seq = this.checkIt(this.test.value);
    console.log('value', seq);

    this.chartData = [];

    for (let i = 0; i < seq.length; i++) {
      this.chartData.push([i, seq[i]]);
    }
  }

  checkIt(x, seq = []) {
    x = parseInt(x);
    seq.push(x);
    if (x === 1) {
      return seq;
    }
    if (x % 2 === 0) {
      return this.checkIt(x / 2, seq);
    }
    return this.checkIt(3 * x + 1, seq);
  }

  ngOnInit() {
    this.chartData = [];
  }
}
