import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';  

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  userImage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user; 
      if (this.isLoggedIn) {
        this.userImage = ""; 
      }
    });
  }

  logout() {
    this.authService.logout();  
    this.router.navigate(['/login']);  
  }

}
