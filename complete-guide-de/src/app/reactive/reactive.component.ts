import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {reject} from "q";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [`
    input.ng-touched.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class ReactiveComponent implements OnInit {
  myForm: FormGroup;
  genders = ['männlich', 'weiblich'];

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  onAddHobby() {
    (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required));
  }

  ngOnInit() {
    /*
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [
          Validators.required
          // Validators.pattern('\S+@\S+\.\S+')
        ])
      }),
      'password': new FormControl(null, Validators.required),
      'gender': new FormControl('männlich'),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required, this.asyncExampleValidator)
      ])
    });
    */
    // Andere Syntax mit FormBuilder
    // Mit Array Syntax ab Passwort -> noch schnelle Syntax
    this.myForm = this.formBuilder.group({
      'userData': this.formBuilder.group({
        'username': this.formBuilder.control(null, [Validators.required, this.exampleValidator]),
        'email': this.formBuilder.control(null, Validators.required)
      }),
      'password': [null, Validators.required],
      'gender': ['männlich'],
      'hobbies': this.formBuilder.array([
        [null, Validators.required, this.asyncExampleValidator]
      ])
    });
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({asyncExample: true});
          } else {
            resolve(null);
          }
        } , 1500);
      }
    );
    return promise;
  }

}
