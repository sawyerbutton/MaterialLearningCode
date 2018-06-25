import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public posts$: Observable<any>;
  public progress = 0;
  public strokeWidth = 0;
  public diameter = 30;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(posts => {
      return posts.slice(0, 6);
    }));
  }
  public plus() {
     this.progress = this.progress >= 100 ? this.progress : this.progress + 10;
  }
  public minus() {
    this.progress = this.progress <= 0 ? this.progress : this.progress - 10;
  }
}
