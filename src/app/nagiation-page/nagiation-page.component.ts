import { Component } from '@angular/core';

@Component({
  selector: 'app-nagiation-page',
  templateUrl: './nagiation-page.component.html',
  styleUrls: ['./nagiation-page.component.scss'],
})
export class NagiationPageComponent {
  action: string[] = [
    'Mon profil',
    'Ma famille',
    'Mon Demande de facilité de circulation',
    'Mes demandes en cours',
    'Pertes et vols de vos facilités de circulation',
  ];
}
