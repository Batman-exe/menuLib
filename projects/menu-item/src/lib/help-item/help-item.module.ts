import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HelpItemComponent } from "./help-item.component";


@NgModule({
    declarations: [HelpItemComponent],
    imports: [
        CommonModule
    ],
    exports: [HelpItemComponent]
})
export class HelpItemModule { }