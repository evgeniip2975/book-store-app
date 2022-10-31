import { Component, OnInit, Input } from '@angular/core';
import { IBook } from 'src/app/types/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  @Input() product: IBook;

  ngOnInit(): void {
  }

}
