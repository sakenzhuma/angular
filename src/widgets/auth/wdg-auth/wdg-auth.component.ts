import { Component } from '@angular/core';
import { AppIconLg } from '../../../components/icons.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-wdg-auth', standalone: true,
  imports: [AppIconLg, LoginComponent],
  templateUrl: './wdg-auth.component.html'
})

export class WdgAuthComponent {
  idx = 0
  setIdx(n: number){
    this.idx = n
  }
}
