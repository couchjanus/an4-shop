import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peculiar Shopaholic';
  // title: string; // Класс содержит поле свойства title с типом string, запол­няется в конструкторе

  // constructor() { // Функция-конструктор вы­зывается автоматически при создании экземпляра класса
  //  this.title = 'Peculiar Shopaholic';
  // }

}
