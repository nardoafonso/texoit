import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StorageService } from './storage.service';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaxDirective } from './form/custo-max-validator.directive';
import { CustomMinDirective } from './form/custo-min-validator.directive';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        ListComponent,
        FormComponent,
        PageNotFoundComponent,
        CustomMaxDirective,
        CustomMinDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [StorageService],
    bootstrap: [AppComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
