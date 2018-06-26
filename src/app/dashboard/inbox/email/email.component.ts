import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, PageEvent, MatSort, Sort, MatPaginatorIntl} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import { Observable, fromEvent} from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;
  public emailsDataSource  = new MatTableDataSource();
  public totalCount: number;
  public currentPage: PageEvent;
  public currentSort: Sort;
  public currentFilterData: string;
  constructor(
    private http: HttpClient,
    private matPaginatorIntl: MatPaginatorIntl
  ) { }

  ngOnInit() {
    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getIssues();
    // initial status for paginator
    // this.paginator.page.subscribe((page: PageEvent) => {
    //   this.getIssues();
    // });
    // page change, drag data back
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage = page;
      this.getIssues();
    });
    fromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
        // front end way
        // this.emailsDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
        this.currentFilterData = this.currentFilterData = (this.filter.nativeElement as HTMLInputElement).value;
        this.getIssues();
      });
    // focus on filter column by front end
    // this.emailsDataSource.filterPredicate = (data: any, filter: string): boolean => {
    //     return data.title.indexOf(filter) !== -1;
    //   };
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return `第 0 个、共 ${length} 个`;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `第 ${startIndex + 1} - ${endIndex} 个,共 ${length} 个`;
    };

    // setting other display description
    this.matPaginatorIntl.itemsPerPageLabel = '每页个数：';
    this.matPaginatorIntl.nextPageLabel = '下一页';
    this.matPaginatorIntl.previousPageLabel = '上一页';
  }
  public changeSort(sortInfo: Sort) {
    if (sortInfo.active === 'date') {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssues();
  }
  public getIssues() {
    const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    if (this.currentSort.direction) {
      targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }
    // backend way for filtering data
    if (this.currentFilterData) {
      targetUrl = `${targetUrl}&q=${this.currentFilterData}+in:title`;
    }
    this.http
      .get<any>(targetUrl)
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource.data = data.items;
      });
    // if use front end sort and paginator, code below
    // this.emailsDataSource.sort = this.sortTable;
    // this.emailsDataSource.paginator = this.paginator;
  }

  public reply(emailRow) {
    console.log('reply mail', emailRow);
  }
  public delete(emailRow) {
    console.log('delete mail', emailRow);
  }
}
