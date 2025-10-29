import { Component, OnInit } from '@angular/core';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-instruction-two',
  templateUrl: './instruction-two.component.html',
  styleUrl: './instruction-two.component.scss'
})
export class InstructionTwoComponent implements OnInit {
  player1Name: string = '';
  player2Name: string = '';

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.player1Name = this.giftService.getPlayerName(1);
    this.player2Name = this.giftService.getPlayerName(2);
  }
}
