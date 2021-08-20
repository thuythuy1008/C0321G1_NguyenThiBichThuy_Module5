import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstOperand: number;
  secondOperand: number;
  operator: string;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  setValue1(number1): void {
    this.firstOperand = number1;
  }

  setValue2(number2): void {
    this.secondOperand = number2;
  }

  sum(): void {
    switch (this.operator) {
      case '+':
        this.result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        this.result = this.firstOperand / this.secondOperand;
        break;
    }
  }
}
