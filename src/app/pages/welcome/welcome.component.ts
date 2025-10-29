import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  // Liaison de données bidirectionnelle (ngModel)
  player1Name: string = '';
  player2Name: string = '';

  constructor(private router: Router, private giftService: GiftService) { }

  startGiftProcess(): void {
    const name1 = this.player1Name.trim() || 'Personne 1';
    const name2 = this.player2Name.trim() || 'Personne 2';

    // 1. Enregistre les noms des joueurs dans le service
    this.giftService.setPlayerNames(name1, name2);

    // 2. Redirige vers la page de révélation du cadeau
    this.router.navigate(['/reveal']);
  }
}
