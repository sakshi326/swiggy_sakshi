import { Component } from '@angular/core';
import { dummyFoodItems } from '../../dummyFoodList';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { dummyItems } from '../../dummyItemsList';
import { RestaurantCardComponent } from '../../components/restaurant-card/restaurant-card.component';
import { dummyRestaurants } from '../../dummyRestaurantsList';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuItemComponent, RestaurantCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    foodItems = dummyFoodItems;
    itemList = dummyItems;
    restaurantList = dummyRestaurants;
}
