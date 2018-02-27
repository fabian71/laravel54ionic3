import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Teste1Page } from './teste1';

@NgModule({
  declarations: [
    Teste1Page,
  ],
  imports: [
    IonicPageModule.forChild(Teste1Page),
  ],
  exports: [
    Teste1Page
  ]
})
export class Teste1PageModule {}
