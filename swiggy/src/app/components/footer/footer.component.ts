import { Component } from '@angular/core';
import { dummyCities } from '../../dummyCitiesList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  cityList = dummyCities;

  constructor(private router: Router) {}

  navigateToOrder(){
      this.router.navigate(['/order']);
  }
}
