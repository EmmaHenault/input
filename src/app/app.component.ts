import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { BoutonComponent } from './bouton/bouton.component';
import { CommonModule } from '@angular/common';
import { OutputBoutonComponent } from './output-bouton/output-bouton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    BoutonComponent,
    DeveloperComponent,
    OutputBoutonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 colors: string[] = ["orange", "green","transparent","orange", "green"];
 names: string[] = ["bouton1", "bouton2","bouton3","bouton4", "bouton5"];

buttonName(data:string){
  console.log(data)
}

}
