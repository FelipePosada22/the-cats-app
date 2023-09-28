import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsDetailsPageRoutingModule } from './cats-details-routing.module';

import { CatsDetailsPage } from './cats-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsDetailsPageRoutingModule
  ],
  declarations: [CatsDetailsPage]
})
export class CatsDetailsPageModule {}
