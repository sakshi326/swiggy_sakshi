import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FavoriteItem {
  id: string;
  foodItemName: string;
  imageSource: string;
  price: number;
  restaurantID: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteItems = new BehaviorSubject<FavoriteItem[]>([]);
  favoriteItems$ = this.favoriteItems.asObservable();

  toggleFavorite(item: FavoriteItem) {
    const currentItems = this.favoriteItems.value;
    const itemIndex = currentItems.findIndex(favItem => favItem.id === item.id);

    if (itemIndex > -1) {
      currentItems.splice(itemIndex, 1);
    } else {
      currentItems.push(item);
    }
    this.favoriteItems.next([...currentItems]);
  }

  isFavorite(itemId: string): boolean {
    return this.favoriteItems.value.some(item => item.id === itemId);
  }
}
