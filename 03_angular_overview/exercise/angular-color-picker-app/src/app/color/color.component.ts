import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color1 = "red";
  color2 = "yellow";
  color3 = "green";
  color4 = "blue";
  color5 = "black";
  color6 = "gray";

  constructor() {
  }

  ngOnInit(): void {
  }

}
