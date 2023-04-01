import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    TranslateModule.forChild({
    extend:true
    })
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SelectComponent,
    RouterModule,
    FormsModule,
    NotFoundComponent
  ],
  providers: [],
})
export class SharedModule { }

