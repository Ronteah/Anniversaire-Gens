// gift.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerChoice, CarOption } from '../models/choice.model';

@Injectable({ providedIn: 'root' })
export class GiftService {
  // Initialisation des choix pour les deux personnes
  private initialChoices: PlayerChoice[] = [
    { playerName: 'Personne 1', circuitId: '', selectedOption: null as any, isConfirmed: false },
    { playerName: 'Personne 2', circuitId: '', selectedOption: null as any, isConfirmed: false },
  ];

  private playerNamesSubject = new BehaviorSubject<{ name1: string; name2: string }>({ name1: 'Personne 1', name2: 'Personne 2' });
  playerNames$ = this.playerNamesSubject.asObservable();

  private choicesSubject = new BehaviorSubject<PlayerChoice[]>(this.initialChoices);
  choices$: Observable<PlayerChoice[]> = this.choicesSubject.asObservable();

  constructor() { }

  setPlayerNames(name1: string, name2: string): void {
    this.playerNamesSubject.next({ name1, name2 });

    // Mettre à jour l'initialisation des choix avec les noms réels
    const currentChoices = this.choicesSubject.getValue();
    currentChoices[0].playerName = name1;
    currentChoices[1].playerName = name2;
    this.choicesSubject.next(currentChoices);
    console.log(currentChoices);
  }

  getPlayerName(playerIndex: number): string {
    const names = this.playerNamesSubject.getValue();
    console.log(this.playerNamesSubject.getValue());
    return playerIndex === 1 ? names.name1 : names.name2;
  }

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