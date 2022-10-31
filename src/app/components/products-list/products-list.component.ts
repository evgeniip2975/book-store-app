import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBook } from 'src/app/types/book';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  products$: Observable<IBook[]>;
  productItems: IBook[] = []
  pageSlice = this.productItems.slice(0, 3)
  searchValue: string = '';
  sortingColumn: string;
  isDesc: boolean = false;
  isRateValue: boolean = false;
  isPriceValue: boolean = false;
  isAuthorValue: boolean = false;
  isTitleValue: boolean = false;


  ngOnInit(): void {
    this.products$ = this.activatedRoute.data.pipe(
      map((data) => data?.['detectives'] || data?.['horrors']
      )
    )
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.productItems.length) {
      endIndex = this.productItems.length
    }
    this.pageSlice = this.productItems.slice(startIndex, endIndex)
  }
  sortBy(colName: string): void {
    this.sortingColumn = colName;
    this.isDesc = !this.isDesc;
  }
}
