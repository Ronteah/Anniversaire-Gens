import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Circuit, CarOption } from '../../core/models/choice.model';

@Component({
  selector: 'app-circuit-card',
  templateUrl: './circuit-card.component.html',
  styleUrl: './circuit-card.component.scss'
})
export class CircuitCardComponent {
  @Input() circuit!: Circuit;
  @Input() isSelectable: boolean = true;
  @Output() optionSelected = new EventEmitter<CarOption>();
  @Output() circuitChosen = new EventEmitter<{ circuitId: string, option: CarOption }>();

  selectedOption: CarOption | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onOptionSelected(option: CarOption): void {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }

  selectCircuit(): void {
    if (this.selectedOption) {
      this.circuitChosen.emit({ circuitId: this.circuit.id, option: this.selectedOption });
    }
  }
}