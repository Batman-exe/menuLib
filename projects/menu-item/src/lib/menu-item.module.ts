import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelpItemModule } from './help-item/help-item.module';
import { MenuIconModule } from './icon/menuIcon.module';
import { MenuItemComponent } from './menu-item.component';
import { SubitemModule } from './subitem/subitem.module';



@NgModule({
  declarations: [
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuIconModule,
    HelpItemModule,
    SubitemModule
  ],
  exports: [
    MenuItemComponent
  ]
})
export class MenuItemModule { }
