// gift.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerChoice, CarOption } from '../models/choice.model';

@Injectable({ providedIn: 'root' })
export class GiftService {
  // Initialisation des choix pour les deux joueurs
  private initialChoices: PlayerChoice[] = [
    { playerName: 'Joueur 1', circuitId: '', selectedOption: null as any, isConfirmed: false },
    { playerName: 'Joueur 2', circuitId: '', selectedOption: null as any, isConfirmed: false },
  ];

  private choicesSubject = new BehaviorSubject<PlayerChoice[]>(this.initialChoices);
  choices$: Observable<PlayerChoice[]> = this.choicesSubject.asObservable();

  constructor() { }

  // Permet de mettre à jour le choix pour un joueur donné (1 ou 2)
  updateChoice(playerIndex: number, circuitId: string, option: CarOption, isConfirmed: boolean = false): void {
    const currentChoices = this.choicesSubject.getValue();
    currentChoices[playerIndex - 1] = {
      ...currentChoices[playerIndex - 1],
      circuitId,
      selectedOption: option,
      isConfirmed
    };
    this.choicesSubject.next(currentChoices);
  }

  getChoice(playerIndex: number): PlayerChoice {
    return this.choicesSubject.getValue()[playerIndex - 1];
  }

  // Pour le composant FinalResult
  getFinalChoices(): PlayerChoice[] {
    return this.choicesSubject.getValue();
  }
}