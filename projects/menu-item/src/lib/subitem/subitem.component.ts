import { Component, Input, OnInit } from '@angular/core';
import { ISubitem } from './subitem.interface';

@Component({
  selector: 'subitem',
  templateUrl: './subitem.html',
  styleUrls: ['./subitem.css']
})

export class SubitemComponent implements OnInit {

  @Input() subitem?: ISubitem;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
