import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ContainerComponent } from './container/container.component';
import { MapComponent } from './map/map.component';
import { BurgerMenuButtonComponent } from './burger-menu-button/burger-menu-button.component';



@NgModule({
  declarations: [
    InputComponent,
    LogoComponent,
    ButtonComponent,
    TextareaComponent,
    ContainerComponent,
    MapComponent,
    BurgerMenuButtonComponent
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    ContainerComponent,
    MapComponent,
    BurgerMenuButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
