import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IBook } from 'src/app/types/book';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService) { }

  @Input() product: IBook;

  cartSubscription: Subscription
  cart: IBook[]

  addToCart(product: IBook) {
    product.quantity = 1;
    let findItem;
    
    if(this.cart.length > 0) {
      findItem = this.cart.find((item) => item.id === product.id)
    if(findItem) this.updateToCart(findItem)
    else this.postToCart(product)
  } else this.postToCart(product)
}
  postToCart(product: IBook) {
    this.cartService.postProductToCart(product).subscribe(data => this.cart.push(data))
    window.alert('Your product has been added to the cart!')
  }

  updateToCart(product: IBook) {
    product.quantity += 1
    this.cartService.updateProductToCart(product).subscribe(data => {})
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.getItems().subscribe(data => this.cart = data)
  }

  ngOnDestroy() {
    if(this.cartSubscription) this.cartSubscription.unsubscribe()
  }
}
