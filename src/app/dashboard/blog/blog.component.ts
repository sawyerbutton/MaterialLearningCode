import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddPostDialogComponent} from './add-post-dialog/add-post-dialog.component';
import { delay} from 'rxjs/operators';

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
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(posts => {
      return posts.slice(0, 6);
    }), delay(1500));
    this.dialog.afterAllClosed.subscribe(() => {
      console.log('there are no dialog open now');
    });
    this.dialog.afterOpen.subscribe((dialogRef: MatDialogRef<any>) => {
      console.log(`New Dialog already been opened ${dialogRef.id}`);
      console.log(`There are ${this.dialog.openDialogs.length} dialogs opened now`);
    });
  }
  public plus() {
     this.progress = this.progress >= 100 ? this.progress : this.progress + 10;
  }
  public minus() {
    this.progress = this.progress <= 0 ? this.progress : this.progress - 10;
  }

  showAddPostDialog() {
    const confirmDialogRef = this.dialog.open(AddPostDialogComponent, {
      // hasBackdrop will show the backdrop false will allow communicating with back component
      hasBackdrop: true
    });
    // confirmDialogRef.componentInstance.doConfirm.subscribe(() => {
    //   console.log('opened dialog click the submit button');
    // });
  }

}
