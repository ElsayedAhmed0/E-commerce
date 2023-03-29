import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
    extend:true
    })
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    NotFoundComponent
  ],
  providers: [],
})
export class SharedModule { }
