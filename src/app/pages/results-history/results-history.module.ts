import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultsHistoryPage } from './results-history.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ResultsHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultsHistoryPage]
})
export class ResultsHistoryPageModule {}
