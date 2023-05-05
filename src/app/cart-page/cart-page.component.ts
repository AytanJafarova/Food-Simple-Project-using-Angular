import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CardItem } from '../shared/models/CardItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
 
  cart !: Cart;
  constructor(private cartService:CartService, private foodService:FoodService)
  {
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[4]);
    this.setCart()
  }

  removeFromCart(cardItem:CardItem)
  {
    this.cartService.removeFromCart(cardItem.food.id)
    this.setCart();
  }

  changeQuantity(cartItem:CardItem, quantityInString:string)
  {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity)
  }
 
  ngOnInit(): void {}
  setCart()
  {
    this.cart = this.cartService.getCart();
  }
  

}
