import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-item',
  templateUrl: './planning-item.component.html',
  styleUrls: ['./planning-item.component.scss']
})
export class PlanningItemComponent implements OnInit {

  @Input() isAdding = false;

  @Input() list: any;

  public removeItem(): void {
  }

  ngOnInit(): void {
  }

}
