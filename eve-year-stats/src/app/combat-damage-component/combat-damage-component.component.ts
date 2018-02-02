import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combat-damage-component',
  templateUrl: './combat-damage-component.component.html',
  styleUrls: ['./combat-damage-component.component.css']
})
export class CombatDamageComponentComponent implements OnInit {
  @Input() title: string;
  @Input() toAmount: Object;
  @Input() toShots: Object;
  @Input() fromAmount: Object;
  @Input() fromShots: Object;

  constructor() { }

  ngOnInit() {
  }

}
