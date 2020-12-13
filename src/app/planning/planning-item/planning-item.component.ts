import {Component, Input, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-planning-item',
  templateUrl: './planning-item.component.html',
  styleUrls: ['./planning-item.component.scss']
})
export class PlanningItemComponent implements OnInit {

  @Input() list: any;

  public removeItem(): void {

  }


  ngOnInit(): void {
  }

}
