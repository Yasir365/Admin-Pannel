import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formValidation } from '../helper/form-validation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  loading: boolean = false;

  constructor(public validator: formValidation, private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  ngOnInit() {
  }

  get g() {
    return this.contactForm.controls
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    setTimeout(() => {
      this.contactForm.reset();
      this.loading = false;
      this.toastr.success('Message sent successfully', 'Success');
    }, 1500);
  }

}
