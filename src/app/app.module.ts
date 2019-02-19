import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpModule} from '@angular/http'; 
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TextComponent } from './text/text.component';
import { ServersComponent } from './servers/servers.component';
import { DanielaComponent } from './daniela/daniela.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TextComponent,
    ServersComponent,
    DanielaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
