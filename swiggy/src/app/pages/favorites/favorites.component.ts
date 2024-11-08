import { Component, OnInit } from '@angular/core';
import { FavoritesService, FavoriteItem } from '../../services/favorites.service'
import { CartService, CartItem } from '../../services/cart.service'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favoriteItems: FavoriteItem[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private cartService: CartService  
  ) {}

  ngOnInit() {
    this.favoritesService.favoriteItems$.subscribe(items => {
      this.favoriteItems = items;
    });
  }

  removeFromFavorites(id: string) {
    const itemToRemove = this.favoriteItems.find(item => item.id === id);
    if (itemToRemove) {
      this.favoritesService.toggleFavorite(itemToRemove);
    }
  }

  addToCart(item: FavoriteItem) {
    const cartItem: CartItem = {
      id: item.id,
      foodItemName: item.foodItemName,
      imageSource: item.imageSource,
      quantity: 1,
      price: item.price,
      restaurantID: item.restaurantID
    };

    this.cartService.addToCart(cartItem); 
    console.log(`Added ${item.foodItemName} to cart.`);
  }
}