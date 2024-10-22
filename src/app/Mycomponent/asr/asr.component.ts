import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Asr } from '../../asr';
import { AsrItemComponent } from "../asr-item/asr-item.component";

@Component({
  selector: 'app-asr',
  standalone: true,
  imports: [CommonModule, AsrItemComponent], // Import CommonModule here
  templateUrl: './asr.component.html',
  styleUrls: ['./asr.component.css'],
})
 

export class AsrComponent implements OnInit {

  asr:Asr[];

  constructor() {
    this.asr = [
      { name: "anshuman", id: 75, description: 'blr', active: true },
      { name: "anshuman2", id: 80, description: 'blr', active: true },
      { name: "anshuman3", id: 85, description: 'blr3', active: false },
    ];
  }

  ngOnInit(): void {
    // Any logic that needs to run on component initialization can go here
  }

}
