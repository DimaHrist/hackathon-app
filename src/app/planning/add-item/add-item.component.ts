import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  selected = 2;

  ngOnInit(): void {
  }

  select(id: number): void {
    this.selected = id;
  }

}
