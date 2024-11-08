import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalCost: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
      this.cartService.cartItems$.subscribe(items => {
          this.cartItems = items;
          this.calculateTotalCost();
      });
  }

  calculateTotalCost() {
      this.totalCost = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(id: string) {
      this.cartService.removeFromCart(id);
      this.calculateTotalCost();
  }

  increaseQuantity(id: string) {
    this.cartService.increaseQuantity(id);
  }

  decreaseQuantity(id: string) {
      this.cartService.decreaseQuantity(id);
      this.calculateTotalCost();
  }
}
