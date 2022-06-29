import { Component, Input, OnInit } from '@angular/core';
import { ISubitem } from './subitem/subitem.interface';

@Component({
  selector: 'lib-menuItem',
  templateUrl: './menu-item.html',
  styleUrls: ['menu-item.css'
  ]
})
export class MenuItemComponent implements OnInit {
  @Input() text: string;
  @Input() small: boolean;
  @Input() help: boolean;
  opened: boolean;

  subitems: Array<ISubitem> = [
    {
      text: 'Text 1',
      selected: false
    },
    {
      text: 'Text 2',
      selected: false
    },
    {
      text: 'Text 3',
      selected: false
    }
  ];


  constructor() {
    this.text = "";
    this.small = true;
    this.opened = false;
    this.help = false;
  }

  ngOnInit(): void {
    
  }

  openSubitems() {
    this.opened = !this.opened;
  }

  changeSubitemsState(selectedId: number) {
    var i: number = 0;
    for (i = 0; i < this.subitems.length; i++) {
      if (i == selectedId)
        this.subitems[i].selected = true;
      else
        this.subitems[i].selected = false;
    }
  }
}
