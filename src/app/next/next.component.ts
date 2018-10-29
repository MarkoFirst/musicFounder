import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpGetterService} from '../services/http-getter/http-getter.service';
import {map} from 'rxjs/operators';
import {DataBaseService} from '../services/db/data-base.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  @Input() next: string;
  @Input() myList: any[];
  musicList$: Observable<any[]>;
  nextList: string;

  constructor(private httpService: HttpGetterService, private db: DataBaseService) {
  }

  ngOnInit(): void {
    this.musicList$ = this.httpService.getList(this.next)
      .pipe(map(value => {
        this.nextList = value.next;
        return value.data;
      }));
  }

  canList(arr: Array<any>) {
    if (!arr) { return []; }

    return arr.filter(value => {
      return this.myList ? !this.myList.find(item => {
        return item.song === value.title && item.artist === value.artist.name;
      }) : false;
    });
  }

  haveInTelegram({artist, title}) {
    this.db.insertDB('list', {artist: artist.name, song: title});
  }

  getSearchStr(song: string): string {
    return encodeURIComponent(song);
  }
}
