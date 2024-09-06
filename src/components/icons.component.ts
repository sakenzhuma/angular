import { Component } from "@angular/core";

@Component({
    selector:'app-icon', standalone: true,
    template:`<svg xmlns="http://www.w3.org/2000/svg" 
    width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="#2c3e50" fill="none" stroke-linecap="round" 
    stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" />
  <path d="M12 12l4 -2.25l4 -2.25" /><path d="M12 12l0 9" />
  <path d="M12 12l-4 -2.25l-4 -2.25" />
  <path d="M20 12l-4 2v4.75" /><path d="M4 12l4 2l0 4.75" />
  <path d="M8 5.25l4 2.25l4 -2.25" />
</svg>`
})
export class AppIcon {}

@Component({
  selector:'app-icon-lg', standalone: true,
  template:`<svg xmlns="http://www.w3.org/2000/svg" 
  width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" 
  stroke="#2c3e50" fill="none" stroke-linecap="round" 
  stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" />
<path d="M12 12l4 -2.25l4 -2.25" /><path d="M12 12l0 9" />
<path d="M12 12l-4 -2.25l-4 -2.25" />
<path d="M20 12l-4 2v4.75" /><path d="M4 12l4 2l0 4.75" />
<path d="M8 5.25l4 2.25l4 -2.25" />
</svg>`
})
export class AppIconLg {}

@Component({
    selector:'icon-user-circle', standalone: true,
    template:`<svg xmlns="http://www.w3.org/2000/svg" 
    width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="#00abfb" fill="none" stroke-linecap="round" 
    stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
</svg>`
})
export class IconUserCircle {}



