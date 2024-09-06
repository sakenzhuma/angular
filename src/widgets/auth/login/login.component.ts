import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'
import { FormInbox } from '../../../components/form.component';
import { SpanLinks } from '../../../components/htm.component';

@Component({
  selector: 'auth-login', standalone: true,
  imports: [ReactiveFormsModule, FormInbox, SpanLinks],
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  
  ob = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('') 
  })

  onSubmit(){
    alert(this.ob.value.email)
  }

  setFormData(){
    this.ob.setValue({
      email: 'saken.zhuma@gmail.com',
      password: '12341234'
    }) 
  }

  setIdx(n: number){
    alert(n)
  }

  ngOnInit(): void {
    this.setFormData()
  }
}
