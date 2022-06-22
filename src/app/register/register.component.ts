import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  addressForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    company: new FormControl(),
    address: new FormGroup({
      addressLine1: new FormControl(null, Validators.required),
      addressLine2: new FormControl(),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      postalCode: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ])
      ),
    }),
  });

  hide = true;
  hasUnitNumber = false;

  states = [
    { name: 'New South Wales', abbreviation: 'NSW' },
    { name: 'Queensland', abbreviation: 'QLD' },
    { name: 'Victoria', abbreviation: 'VIC' },
    { name: 'Western Australia', abbreviation: 'WA' },
    { name: 'Northern Territory', abbreviation: 'NT' },
    { name: 'South Australia', abbreviation: 'SA' },
    { name: 'Tasmania', abbreviation: 'TAS' },
  ];

  onSubmit(): void {
    console.log(this.addressForm.value);
    const formData = {
      first_name: this.addressForm.value.firstName,
      last_name: this.addressForm.value.lastName,
      email: this.addressForm.value.email,
      password: this.addressForm.value.password,
      company: this.addressForm.value.company,
      address_line_1: this.addressForm.value.address?.addressLine1,
      address_line_2: this.addressForm.value.address?.addressLine2,
      city: this.addressForm.value.address?.city,
      state: this.addressForm.value.address?.state,
      postcode: this.addressForm.value.address?.postalCode,
    };
    alert('Thanks! \n\nYour submission: ' + JSON.stringify(this.addressForm.value, null, 4));
  }
}
