import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class Login {
  authService = inject(AuthService);
  router = inject(Router);

  // Initialize reactive form
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  // Getters for form controls
  get username() { return this.loginForm.get('username')!; }
  get password() { return this.loginForm.get('password')!; }

  // Handle form submission
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          alert('Logged in successfully!');
          this.router.navigate(['/products']);
        },
        error: (err) => {
          alert('Invalid username or password');
        }
      });
    } else {
      // Show validation errors if form is invalid
      this.loginForm.markAllAsTouched();
    }
  }
}