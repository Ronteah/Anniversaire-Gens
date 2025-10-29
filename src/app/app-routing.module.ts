import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftRevealComponent } from './pages/gift-reveal/gift-reveal.component';
import { InstructionOneComponent } from './pages/instruction-one/instruction-one.component';
import { RecapComponent } from './pages/recap/recap.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CircuitChoiceComponent } from './shared/circuit-choice/circuit-choice.component';
import { InstructionTwoComponent } from './pages/instruction-two/instruction-two.component';
import { FinalResultComponent } from './pages/final-result/final-result.component';
import { EndComponent } from './pages/end/end.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'reveal', component: GiftRevealComponent },
  { path: 'instruction/1', component: InstructionOneComponent },
  { path: 'instruction/2', component: InstructionTwoComponent },
  { path: 'choice/:player', component: CircuitChoiceComponent },
  { path: 'recap/:player', component: RecapComponent },
  { path: 'final', component: FinalResultComponent },
  { path: 'end', component: EndComponent },
  { path: '**', redirectTo: '' } // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
