import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {

  public list: any;

  constructor(
    private readonly api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getList().subscribe(list => this.list = list?.data);
  }

}
