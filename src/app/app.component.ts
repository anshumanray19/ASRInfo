import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsrComponent } from "./Mycomponent/asr/asr.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
  constructor(){
    setTimeout(() => {
      this.title="Hola";
    }, 3000);
  }
}
