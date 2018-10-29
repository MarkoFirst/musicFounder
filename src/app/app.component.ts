import {Component, OnInit} from '@angular/core';
import {DataBaseService} from './services/db/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myList: any[];

  constructor(private db: DataBaseService) {
  }

  ngOnInit(): void {
    this.db.selectDB('list').subscribe(value => this.myList = value);
  }
}
