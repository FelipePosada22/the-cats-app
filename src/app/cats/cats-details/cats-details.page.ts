import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CatsService } from '../service/cats.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { slideInAnimation } from 'src/app/utils/animated';

@Component({
  selector: 'app-cats-details',
  templateUrl: './cats-details.page.html',
  styleUrls: ['./cats-details.page.scss'],
})
export class CatsDetailsPage {
  /**
   * Represents the details of the currently selected cat.
   */
  cat = this._catsService.currentCatDetails;

  /**
   * Represents an array of skills and their corresponding values for a cat.
   */
  skillsCat!: { key: string; value: number }[];

  /**
   * Represents the first set of skills and their corresponding values for a cat (first 3 skills).
   */
  skillsCat1: { key: string; value: number }[] = [];

  /**
   * Represents the second set of skills and their corresponding values for a cat (next 3 skills).
   */
  skillsCat2: { key: string; value: number }[] = [];

  /**
   * Constructor of the CatsDetailsPage component.
   * @param _catsService - The CatsService to retrieve cat details.
   * @param navCtrl - The Ionic NavController for navigation.
   */
  constructor(
    private _catsService: CatsService,
    private navCtrl: NavController,
  ) {
    // Initialize the skillsCat array with skills and their values for the current cat.
    this.skillsCat = [
      {
        key: 'Adaptability',
        value: this.cat.adaptability,
      },
      {
        key: 'Affection Level',
        value: this.cat.affection_level,
      },
      {
        key: 'Child Friendly',
        value: this.cat.child_friendly,
      },
      {
        key: 'Dog Friendly',
        value: this.cat.dog_friendly,
      },
      {
        key: 'Energy Level',
        value: this.cat.energy_level,
      },
      {
        key: 'Grooming',
        value: this.cat.grooming,
      },
      {
        key: 'Health Issues',
        value: this.cat.health_issues,
      },
      {
        key: 'Intelligence',
        value: this.cat.intelligence,
      },
      {
        key: 'Shedding Level',
        value: this.cat.shedding_level,
      },
      {
        key: 'Social Needs',
        value: this.cat.social_needs,
      },
      {
        key: 'Stranger Friendly',
        value: this.cat.stranger_friendly,
      },
      {
        key: 'Vocalisation',
        value: this.cat.vocalisation,
      },
      {
        key: 'Experimental',
        value: this.cat.experimental,
      },
      {
        key: 'Hairless',
        value: this.cat.hairless,
      },
      {
        key: 'Natural',
        value: this.cat.natural,
      },
      {
        key: 'Rare',
        value: this.cat.rare,
      },
      {
        key: 'Rex',
        value: this.cat.rex,
      },
    ];
    // Populate skillsCat1 with the first 3 skills.
    this.skillsCat1 = this.skillsCat.slice(0, 3);

    // Populate skillsCat2 with the next 3 skills.
    this.skillsCat2 = this.skillsCat.slice(3, 6);
  }

  /**
   * Navigates back to the cats list page.
   */
  goBack() {
    this.navCtrl.navigateBack('/cats', { animation: slideInAnimation });
  }
}
