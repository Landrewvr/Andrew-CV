import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BioComponent } from './components/bio/bio.component';
import { RelatedInfoComponent } from './components/related-info/related-info.component';
import { MomentModule } from 'ngx-moment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModuleModule } from './modules/my-material-module/my-material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { ExpandibleListContentComponent } from './shared/expandible-list-content/expandible-list-content.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BioComponent,
    RelatedInfoComponent,
    ExpandibleListContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MomentModule,
    MyMaterialModuleModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
