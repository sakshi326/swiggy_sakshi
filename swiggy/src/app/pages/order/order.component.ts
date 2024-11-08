import { Component } from '@angular/core';
import { dummyFoodList } from '../../dummyFoodItems';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { dummyDishesRestaurantList } from '../../dummy_Dishes_Restaurant_List';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
    foodList = dummyFoodList;
    restaurantDishes = dummyDishesRestaurantList;
}
