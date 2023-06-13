import { Component } from '@angular/core';

export interface Price {
  service: string,
  price: string,
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  prices: Price[] = [
    {
      service: 'Консультація первинна',
      price: '100 грн'
    },
    {
      service: 'Професійна чистка зубів із застосуванням ультразвукового скалера',
      price: '950 грн'
    },
    {
      service: 'Анестезія провідникова (Septonest)',
      price: '120 грн'
    },
    {
      service: 'Пломбування зуба при поверхневому карієсі',
      price: '300 грн'
    },
    {
      service: 'Пломбування  зуба при середньому карієсі',
      price: '400 грн'
    },
    {
      service: 'Пломбування зуба при глибокому карієсі',
      price: '500 грн'
    },
    {
      service: 'Фотополімерна реставрація фронтальної групи зубів',
      price: '750 грн'
    },
    {
      service: 'Художня реставрація фронтальної групи зубів 3/4 поверхні зуба',
      price: '1000 грн'
    },
    {
      service: 'Художня реставрація фронтальної групи зубів  1/2 поверхні зуба',
      price: '800 грн'
    },
    {
      service: 'Художня реставрація фронтальної групи зубів  1/3 поверхні зуба',
      price: '600 грн'
    },
    {
      service: 'Художня реставрація фронтальної групи зубів  1/4 поверхні зуба',
      price: '500 грн'
    },
    {
      service: 'Видалення однокореневого зуба',
      price: '300 грн'
    },
    {
      service: 'Видалення зуба 2 ст. складності',
      price: '400 грн'
    },
    {
      service: 'Видалення зуба 3 ст. складності',
      price: '500 грн'
    },
    {
      service: 'Відбиток С-силікона',
      price: '200 грн'
    },
    {
      service: 'Металокерамічна коронка',
      price: '2200 грн'
    },
    {
      service: 'Нейлоновий протез',
      price: '6500 грн'
    },
    {
      service: 'Акриловий протез',
      price: '5500 грн'
    },
  ];
}
