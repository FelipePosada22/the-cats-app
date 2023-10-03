import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CatsService } from './service/cats.service';
import { Cats } from './models/cats.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit {
  /**
   * Represents an array of cats.
   */
  cats!: Cats[];

  /**
   * Constructor of the component.
   * @param _catsService - The CatsService to fetch cat data.
   * @param router - The Angular Router service for navigation.
   */
  constructor(
    private _catsService: CatsService,
    private router: Router,
  ) {}

  /**
   * Lifecycle hook called after the component is initialized.
   * It fetches cat data from the CatsService.
   */
  ngOnInit() {
    this.getCats();
  }

  /**
   * Asynchronously fetches cat data from the CatsService and processes it.
   */
  async getCats() {
    // Fetch cat data from the CatsService, map it to an array of Cats, and convert it to a Promise.
    const cats =
      (await this._catsService
        .getCats()
        .pipe(map((cats: Cats[]) => cats))
        .toPromise()) || [];

    // If cat data is available, map each cat to include a URL for its reference image.
    if (cats) {
      this.cats = cats.map((cat: Cats) => ({
        ...cat,
        url: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
      }));
    }
  }

  /**
   * Navigates to the cat details page for the cat with the specified ID.
   * @param id - The ID of the cat to navigate to.
   */
  goToDetail(id: string) {
    // Find the cat with the specified ID in the cats array.
    const cat = this.cats.find((cat: Cats) => cat.id === id);

    // If the cat is found, update the current cat in the CatsService and navigate to the cat details page.
    if (cat) {
      this._catsService.updateCurrentCat(cat);
      this.router.navigate(['/cats-details', id]);
    } else {
      // If the cat is not found, log an error message.
      console.error(`Cat with id ${id} not found`);
    }
  }
}
