import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../common/validators/password-match.validator';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  submittedData: any = null;

  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email, 
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    mobiles: new FormArray([
      new FormControl('', [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')])
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: passwordMatchValidator });

  // Dofna ! hena 3ashan n2kd ll compiler en dol msh null w nmne3 el warnings
  get fullName() { return this.registerForm.get('fullName')!; }
  get email() { return this.registerForm.get('email')!; }
  get mobiles() { return this.registerForm.get('mobiles') as FormArray; }
  get password() { return this.registerForm.get('password')!; }
  get confirmPassword() { return this.registerForm.get('confirmPassword')!; }

  addMobile() {
    this.mobiles.push(new FormControl('', [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]));
  }

  removeMobile(index: number) {
    if (this.mobiles.length > 1) {
      this.mobiles.removeAt(index);
    }
  }

  register() {
    if (this.registerForm.valid) {
      this.submittedData = this.registerForm.value;
      this.registerForm.reset();
      this.mobiles.clear();
      this.addMobile();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.registerForm.reset();
    this.submittedData = null;
  }
}