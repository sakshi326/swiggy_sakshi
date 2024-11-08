import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true; 
  email: string = '';
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService) {}

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.error = ''; 
  }

  onLoginSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.success) {
          this.error = '';  
        } else {
          this.error = response.message; 
        }
      },
      (error) => {
        this.error = 'An error occurred. Please try again.';
      }
    );
  }

  onRegisterSubmit() {
    if (this.email && this.username && this.password) {
      this.authService.register(this.email, this.username, this.password).subscribe(
        (response) => {
          if (response.success) {
            this.error = '';
            this.toggleForm();
          } else {
            this.error = response.message;
          }
        },
        (error) => {
          this.error = 'An error occurred during registration.';
        }
      );
    } else {
      this.error = 'All fields are required!';
    }
  }
}
