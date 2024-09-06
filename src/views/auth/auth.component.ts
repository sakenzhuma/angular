import { Component } from '@angular/core';
import { AppIconLg } from '../../components/icons.component';
import { WdgAuthComponent } from '../../widgets/auth/wdg-auth/wdg-auth.component';

@Component({
  selector: 'app-auth', standalone: true,
  imports: [AppIconLg, WdgAuthComponent],
  templateUrl: './auth.component.html'
})

export class AuthComponent {}
