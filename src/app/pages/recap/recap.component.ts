import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerChoice, Circuit, ALL_CIRCUITS } from '../../core/models/choice.model';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {
  playerNumber: number = 1;
  currentChoice!: PlayerChoice;
  selectedCircuit!: Circuit | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private giftService: GiftService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Récupère le numéro du joueur (1 ou 2)
      this.playerNumber = Number(params.get('player')) || 1;
      this.loadChoiceData();
    });
  }

  loadChoiceData(): void {
    this.currentChoice = this.giftService.getChoice(this.playerNumber);
    // Trouve le circuit complet correspondant à l'ID choisi
    this.selectedCircuit = ALL_CIRCUITS.find(c => c.id === this.currentChoice.circuitId);
  }

  confirmAndContinue(): void {
    // Met à jour le choix comme confirmé
    this.giftService.updateChoice(
      this.playerNumber,
      this.currentChoice.circuitId,
      this.currentChoice.selectedOption,
      true // CONFIRMATION !
    );

    if (this.playerNumber === 1) {
      // Joueur 1 a confirmé -> passe au Joueur 2 (via page instruction)
      this.router.navigate(['/instruction/2']);
    } else {
      // Joueur 2 a confirmé -> résultat final
      this.router.navigate(['/final']);
    }
  }
}