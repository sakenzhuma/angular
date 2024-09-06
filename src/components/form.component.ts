import { Component, Input } from "@angular/core";

@Component({
    selector: 'form-box', standalone: true,
    template:`<form method="post" class="fx-col" (submit)="onSubmit($event)"><ng-content /></form>`
})
export class FormBox {
    onSubmit(event: Event){
        event.preventDefault()
        alert('Form is submitted!')
    }
}

@Component({
    selector: 'form-title', standalone: true,
    template: `<h2 class="tc mv2">{{text}}</h2>`
})
export class FormTitle {@Input() text = ''}

@Component({
  selector: 'inbox', standalone: true,
  template: `<div class="fx-col mb3">
    <ng-content /></div>`  
})
export class FormInbox {@Input() label=''}

@Component({
    selector: 'text-input', standalone: true,
    template: `<input type='text' name={{name}} />`
})
export class FormInput {@Input() name='name'}

@Component({
    selector: 'form-submit', standalone: true,
    template: `<button class="w-100" type="submit">{{text}}</button>`
})
export class FormSubmit {@Input() text=''}