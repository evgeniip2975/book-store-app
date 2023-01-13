import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IBook } from 'src/app/types/book';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService) { }

  cartSubscription: Subscription;
  cart: IBook[];

  removeItemFromBasket(id: number) {
    this.cartService.removeItemFromBasket(id).subscribe(() => {
      let idx = this.cart.findIndex(data => data.id === id)
      this.cart.splice(idx, 1)
    })
  }

  minusItemFromCart(item: IBook) {
    if(item.quantity === 1) {
      this.cartService.removeItemFromBasket(item.id).subscribe(() => {
        let idx = this.cart.findIndex(data => data.id === item.id)
        this.cart.splice(idx, 1)
      })
    } else {
      item.quantity -= 1
      this.cartService.updateProductToCart(item).subscribe((data) => {

      })
    }
  }

  plusItemToCart(item: IBook) {
    item.quantity += 1
    this.cartService.updateProductToCart(item).subscribe((data) => {
      
    })
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.getItems().subscribe((data) => {
    this.cart = data
   })
  }

  ngOnDestroy(): void {
    if(this.cartSubscription) this.cartSubscription.unsubscribe()
  }
}
