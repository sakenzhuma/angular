import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-card', standalone: true,
    template: `<div class='fx-col bg-white pa3'><ng-content /></div>`
})
export class CardComponent {}

@Component({
    selector: 'span-links', standalone: true,
    template: `<div class="fx-col items-center pt4 pb2">
    <span class="dib pt2">{{title}}</span>
    <span class="dib link f4 b pt1">{{text}}</span></div>`
})
export class SpanLinks {
    @Input() title = '';
    @Input() text = '';
}