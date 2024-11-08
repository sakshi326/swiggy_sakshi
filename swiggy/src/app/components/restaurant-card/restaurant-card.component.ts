import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) imageSrc!: string;
  @Input({required:true}) location!: string;
  @Input({required:true}) cuisines!: string[];
  @Input({required:true}) rating!: number;
  @Input({required:true}) price!: string;

  constructor(private router: Router) {}

  navigateToOrder(){
      this.router.navigate(['/order']);
    }
}
