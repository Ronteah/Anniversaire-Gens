import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-instruction-one',
  templateUrl: './instruction-one.component.html',
  styleUrl: './instruction-one.component.scss'
})
export class InstructionOneComponent implements OnInit {
  player1Name: string = '';

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.player1Name = this.giftService.getPlayerName(1);
  }
}
