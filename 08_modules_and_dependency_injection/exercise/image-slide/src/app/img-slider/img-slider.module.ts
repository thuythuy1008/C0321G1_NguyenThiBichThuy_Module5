import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';



@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImgSliderModule { }
