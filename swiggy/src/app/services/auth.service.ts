import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

export interface User {
  email: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  private apiUrl = 'https://671782c7b910c6a6e0289ae8.mockapi.io/risshabsingla/User_Auth_Swiggy_Clone'; 
  http = inject(HttpClient);

  constructor(
    private router: Router,
  ) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<User[]>(`${this.apiUrl}`).pipe(
      catchError(error => {
        return of({ success: false, message: 'Error fetching users for login' });
      }),
      map((response: any) => {
        if (Array.isArray(response)) {
          const user = response.find(u => u.email === email && u.password === password);
          if (user) {
            this.storeUser(user); 
            this.router.navigate(['/order']);  
            return { success: true, user };
          } else {
            return { success: false, message: 'Invalid email or password' };
          }
        } else {
          return { success: false, message: 'Invalid response from server' };
        }
      })
    );
  }

  register(email: string, username: string, password: string): Observable<any> {
    const newUser: User = { email, username, password };
  
    return this.http.post(`${this.apiUrl}`, newUser).pipe(
      catchError((error) => {
        return of({ success: false, message: 'Registration failed' });
      }),
      map(() => {
        this.storeUser(newUser); 
        this.router.navigate(['/order']); 
        return { success: true, user: newUser }; 
      })
    );
  }

  private storeUser(user: User) {
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
