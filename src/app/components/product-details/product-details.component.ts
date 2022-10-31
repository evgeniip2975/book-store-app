import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBook } from 'src/app/types/book';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  product$: Observable<IBook>;

  ngOnInit(): void {
    this.product$ = this.activatedRoute.data.pipe(
      map((data) => data?.['detective'] || data?.['horror'])
    );
  }
}
