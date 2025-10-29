import { Component, OnInit } from '@angular/core';
import { PlayerChoice, Circuit, ALL_CIRCUITS } from '../../core/models/choice.model';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.scss']
})
export class FinalResultComponent implements OnInit {
  playerChoices: PlayerChoice[] = [];
  resultMessage: string = '';
  finalChoice: { circuit: Circuit | undefined, option: PlayerChoice | undefined } | null = null;

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    document.querySelector('.final-page')?.scrollTop;
    this.playerChoices = this.giftService.getFinalChoices();
    this.determineFinalResult();
  }

  determineFinalResult(): void {
    const choice1 = this.playerChoices[0];
    const choice2 = this.playerChoices[1];

    // Vérifier si les deux joueurs ont choisi le MÊME CIRCUIT (peu importe l'option)
    if (choice1.circuitId === choice2.circuitId) {
      this.resultMessage = "🎉 Félicitations ! Vous avez choisi le MÊME CIRCUIT ! 🎉";
      this.finalChoice = {
        circuit: ALL_CIRCUITS.find(c => c.id === choice1.circuitId),
        // Pour simplifier, si le circuit est le même, on prend l'option du Joueur 2 (le dernier validé)
        option: choice2
      };
    } else {
      // Les joueurs ont choisi des circuits différents
      this.resultMessage = "🤝 Accord en vue ! Vos choix sont différents. Pour finaliser le cadeau, vous devrez vous mettre d'accord sur l'un des deux circuits. 🤝";
      this.finalChoice = null; // Pas de choix unique validé
    }
  }

  getCircuitDetails(id: string): Circuit | undefined {
    return ALL_CIRCUITS.find(c => c.id === id);
  }

  shareResult(): void {
    const mailtoLink = this.generateMailToLink(this.playerChoices);
    this.openMailClient(mailtoLink);
  }

  generateMailToLink(choices: PlayerChoice[]): string {
    const choice1 = choices[0];
    const choice2 = choices[1];
    const recipient = 'lgtlightningolden@gmail.com';
    const subject = encodeURIComponent('Choix Cadeau Validé : Clément & Romain');

    let body = "Les choix des deux destinataires ont été enregistrés :\n\n";

    body += `--- Choix de Clément ---\n`;
    body += `Circuit : ${this.getCircuitDetails(choice1.circuitId)?.name}\n`;
    body += `Offre : ${choice1.selectedOption.lapsOrTime} au volant de la ${choice1.selectedOption.description}\n\n`;

    body += `--- Choix de Romain ---\n`;
    body += `Circuit : ${this.getCircuitDetails(choice2.circuitId)?.name}\n`;
    body += `Offre : ${choice2.selectedOption.lapsOrTime} au volant de la ${choice2.selectedOption.description}\n\n`;

    const encodedBody = encodeURIComponent(body);

    // Retourne le lien Mailto complet
    return `mailto:${recipient}?subject=${subject}&body=${encodedBody}`;
  }

  openMailClient(emailLink: string): void {
    if (!emailLink) {
      console.error('Le lien mailto: n\'a pas été généré.');
      return;
    }

    // Utilise window.open() pour simuler une navigation.
    // L'ajout d'un petit délai (setTimeout) peut être utile pour s'assurer
    // que le DOM est stable et que l'utilisateur a vu la page de résultat.
    setTimeout(() => {
      // Ouvre l'URL, ce qui déclenche l'application mail native
      window.open(emailLink, '_self');

      // NOTE : Utiliser '_self' permet de rester dans la même fenêtre, 
      // mais le navigateur passera à l'application mail.
      // Si vous voulez que la page Angular reste affichée en arrière-plan, 
      // utilisez '_blank', mais cela peut être moins intuitif sur mobile.
    }, 500); // Délai de 0.5 seconde
  }
}