import { Component } from '@angular/core';
import { AppIcon, IconUserCircle } from '../../icons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header', standalone: true,
  imports: [RouterLink, AppIcon, IconUserCircle],
  templateUrl: './header.component.html',
})

export class HeaderComponent {}
