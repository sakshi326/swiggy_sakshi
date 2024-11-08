import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service'; 
import { FavoritesService, FavoriteItem } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})

export class MenuItemComponent implements OnInit {
    @Input({required:true}) imageSrc!: string;
    @Input({required:true}) itemName!: string;
    @Input({required: true}) orderPage!: boolean;
    @Input({required: true}) id!: string;
    @Input({required: true}) price!: number;
    @Input({required:true }) restaurantID!: string

    itemQuantity: number = 1;
    isFavorite: boolean = false;
    defaultImageSrc = "/assets/foodImagePlaceholder.png";
    
    constructor(
      private router: Router, 
      private cartService: CartService, 
      private favoritesService: FavoritesService,
    ) {}

    ngOnInit() {
        this.isFavorite = this.favoritesService.isFavorite(this.id);
    }

    navigateToOrder() {
      if (!this.orderPage) {
        this.router.navigate(['/order']);
      }
    }

    addToCart(event: Event) {
        event.stopPropagation();

        const cartItem: CartItem = {
          id: this.id,
          foodItemName: this.itemName,
          imageSource: this.imageSrc,
          quantity: this.itemQuantity,
          price: this.price,
          restaurantID: this.restaurantID
        };
        
        this.cartService.addToCart(cartItem);
        console.log(`Added ${this.itemName} to cart with quantity: ${this.itemQuantity} and price: ₹${this.price}`);
    }

    toggleFavorite(event: Event) {
        event.stopPropagation();

        const favoriteItem: FavoriteItem = {
          id: this.id,
          foodItemName: this.itemName,
          imageSource: this.imageSrc,
          price: this.price,
          restaurantID: this.restaurantID,
        };

        this.favoritesService.toggleFavorite(favoriteItem);
        this.isFavorite = !this.isFavorite; 
    }

  setDefaultImage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = this.defaultImageSrc; 
  }
}
