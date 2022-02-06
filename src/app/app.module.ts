import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TagDisplayListComponent } from './tag-display-list/tag-display-list.component';
import { TagDisplayThumbComponent } from './tag-display-thumb/tag-display-thumb.component';
import { TagDisplayComponent } from './tag-display/tag-display.component';
import { TagFormComponent } from './tag-form/tag-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TagDisplayListComponent,
    TagDisplayThumbComponent,
    TagDisplayComponent,
    TagFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
