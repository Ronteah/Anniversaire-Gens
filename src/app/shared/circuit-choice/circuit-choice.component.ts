import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Circuit, ALL_CIRCUITS, CarOption } from '../../core/models/choice.model';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-circuit-choice',
  templateUrl: './circuit-choice.component.html',
  styleUrl: './circuit-choice.component.scss'
})
export class CircuitChoiceComponent implements OnInit {
  playerNumber: number = 1;
  circuit1: Circuit = ALL_CIRCUITS[0];
  circuit2: Circuit = ALL_CIRCUITS[1];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private giftService: GiftService
  ) { }

  ngOnInit(): void {
    // Récupère le numéro du joueur (1 ou 2) depuis l'URL (ex: /choice/1)
    this.route.paramMap.subscribe(params => {
      this.playerNumber = Number(params.get('player')) || 1;
    });
  }

  handleChoice(circuitId: string, option: CarOption): void {
    // Stocke le choix temporairement (isConfirmed = false)
    this.giftService.updateChoice(this.playerNumber, circuitId, option, false);

    // Redirige vers la page de récap
    this.router.navigate(['/recap', this.playerNumber]);
  }
}
