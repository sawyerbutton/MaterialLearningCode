import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent, MatDialog, MatDialogRef} from '@angular/material';
import { AddPostConfirmDialogComponent} from '../add-post-confirm-dialog/add-post-confirm-dialog.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {
  public title: string;
  public tags = ['Rxjs', 'Material Design', 'Angular Material'];
  public separatorKeysCodes = [ENTER, COMMA];
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddPostDialogComponent>
  ) { }

  ngOnInit() {
  }
  public doPost() {
    this.dialog.open(AddPostConfirmDialogComponent, {
      data: {
        title: this.title
      }
    });
  }
  public move() {
    this.dialogRef.updatePosition({
      top: '0',
      left: '0'
    });
  }
  public removeTag(tagName) {
    this.tags = this.tags.filter(tag => tag !== tagName);
    console.log(this.tags);
  }
  public addTag($event: MatChipInputEvent) {
    if (($event.value || '').trim()) {
      const value = $event.value.trim();
      if (this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
    }
    $event.input.value = '';
  }
}
