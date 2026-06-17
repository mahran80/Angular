import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator to check if password and confirm password match
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    // Get password and confirm password controls
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    // If they exist and don't match, return an error object
    if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { passwordMismatch: true };
    }
    
    // Return null if they match (no error)
    return null;
};