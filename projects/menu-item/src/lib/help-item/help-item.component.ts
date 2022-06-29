import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'help-item',
    templateUrl: './help-item.component.html',
    styleUrls: ['./help-item.component.css']
})
export class HelpItemComponent implements OnInit {
    @Input() small:boolean;

    constructor() {
        this.small = true;
    }

    ngOnInit(): void {
        
    }
}