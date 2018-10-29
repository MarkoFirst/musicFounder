import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpGetterService {

  constructor(private http: HttpClient) {
  }

  getList(url) {
    return this.http.get<any>(url);
  }
}
