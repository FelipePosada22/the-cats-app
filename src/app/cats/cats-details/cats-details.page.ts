import { Component, OnInit } from '@angular/core';
import { CatsService } from '../service/cats.service';

@Component({
  selector: 'app-cats-details',
  templateUrl: './cats-details.page.html',
  styleUrls: ['./cats-details.page.scss'],
})
export class CatsDetailsPage implements OnInit {
  cat = this._catsService.currentCatDetails;
  constructor(private _catsService: CatsService) { }

  ngOnInit() {
  }


}
