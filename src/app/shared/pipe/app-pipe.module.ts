import { NgModule } from "@angular/core";
import { replacePipe } from "./replace.pipe";

@NgModule ({
    declarations: [
        replacePipe
    ],
    exports: [
        replacePipe
    ]
})
export class AppPipeModule {

}