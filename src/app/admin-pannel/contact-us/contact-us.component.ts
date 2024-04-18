import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formValidation } from '../helper/form-validation';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(public validator: formValidation, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(20)]),
    })
  }

  ngOnInit() {
  }

  get g() {
    return this.contactForm.controls
  }

  onSubmit(form: FormGroup) {
  }

}
