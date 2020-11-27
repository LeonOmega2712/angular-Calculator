import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ResultadoComponent } from "../resultado/resultado.component";
import { HelloComponent } from "./hello.component";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { ResponseState } from "../modelo/operador.redux";
import { OperadorService } from "../servicio/operador.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([ResponseState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [OperadorService],
  declarations: [AppComponent, ResultadoComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
