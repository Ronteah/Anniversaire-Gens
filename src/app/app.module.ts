import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircuitCardComponent } from './shared/circuit-card/circuit-card.component';
import { CircuitChoiceComponent } from './shared/circuit-choice/circuit-choice.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GiftRevealComponent } from './pages/gift-reveal/gift-reveal.component';
import { InstructionOneComponent } from './pages/instruction-one/instruction-one.component';
import { RecapComponent } from './pages/recap/recap.component';
import { InstructionTwoComponent } from './pages/instruction-two/instruction-two.component';
import { FinalResultComponent } from './pages/final-result/final-result.component';
import { FormsModule } from '@angular/forms';
import { EndComponent } from './pages/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    CircuitCardComponent,
    CircuitChoiceComponent,
    WelcomeComponent,
    GiftRevealComponent,
    InstructionOneComponent,
    RecapComponent,
    InstructionTwoComponent,
    FinalResultComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
