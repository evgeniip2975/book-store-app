import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../../types/book';

@Pipe({
  name: 'sortProducts',
})
export class SortProductsPipe implements PipeTransform {
  transform(
    products: IBook[],
    sortingColumn: string,
    isDesc: boolean
  ): IBook[] {
    if (
      products &&
      sortingColumn &&
      products.length > 0 &&
      sortingColumn.length > 0
    ) {
      products.sort((prod1, prod2) => {
        if (prod1[sortingColumn] < prod2[sortingColumn]) {
          return -1;
        } else {
          return 1;
        }
      });
      if (isDesc === false) {
        products.sort((prod1, prod2) => {
          if (prod1[sortingColumn] > prod2[sortingColumn]) {
            return -1;
          } else {
            return 1;
          }
        });
      }
    }
    return products;
  }
}
