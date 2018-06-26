import {Component, OnInit, Inject, EventEmitter} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {AfterPostNotifyComponent} from '../after-post-notify/after-post-notify.component';

@Component({
  selector: 'app-add-post-confirm-dialog',
  templateUrl: './add-post-confirm-dialog.component.html',
  styleUrls: ['./add-post-confirm-dialog.component.css']
})
export class AddPostConfirmDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  public confirm() {
    this.dialog.closeAll();
  }
  get title() {
    return this.data.title;
  }
  public snackConfirm() {
    this.snackBar.openFromComponent(AfterPostNotifyComponent, {
      data: { title: this.title },
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    });
  }
}
