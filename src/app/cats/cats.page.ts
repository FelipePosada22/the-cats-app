import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { CatsService } from './service/cats.service';
import { Cats } from './models/cats.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})
export class CatsPage implements OnInit {
primary = '#0085FE'
  cats!:any;;
  constructor(private _catsService: CatsService, private router: Router) { }

  ngOnInit() {
    this.getCats()
  }


  async getCats(){
    this.cats = await this._catsService.getCats().pipe((map((cats:Cats[]) => cats))).toPromise()
    this.cats = this.cats.map((cat:Cats) => {
      cat.url = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
      return cat
    })
}

goToDetail(id:string){
  this._catsService.updateCurrentCat(this.cats.find((cat:Cats) => cat.id === id))
  this.router.navigate(['/cats-details',id])
}

}
