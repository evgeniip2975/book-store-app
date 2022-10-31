import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../../types/book';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IBook[], value: string = ''): IBook[] {
    if (!value.trim()) {
      return products;
    }
    return products.filter((el) => {
      return (
        el.title.toLowerCase().includes(value.toLowerCase()) ||
        el.author.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
}
