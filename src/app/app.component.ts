import { Component } from '@angular/core';

enum TEN_LITTLE {
        "Ten"=10, 
        "Nine"=9, 
        "Eight"=8, 
        "Seven"=7,
        "Six"=6, 
        "Five"=5, 
        "Four"=4, 
        "Three"=3, 
        "Two"=2, 
        "One"=1, };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  name: string = `Gene`;
  age: number = 37;
  sentence: string;

  decimal: number = 6;
  hex: number = 0xf00d;
  binary: number = 0b1010;
  octal: number = 0o744;
  result: number;

  list: number[] = [10, 20, 30];
  
  colors: string[] = ["red", "green", "blue"];
  
  TenLittleNiggers: any[]  = [
      "Ten", 
      "Nine", 
      "Eight", 
      "Seven",
      "Six", 
      "Five", 
      "Four", 
      "Three", 
      "Two", 
      "One", 
  ];

  Rhymes: Array<string> = [
     "boys went out to dine; One choked his little self",
     "sat up very late; One overslept himself",
     "traveling in Devon; One said he'd stay there",
     "chopping up sticks; One chopped himself in half",
     "playing with a hive; A bumble-bee stung one",
     "going in for law; One got in chancery",
     "going out to sea; A red herring swallowed one",
     "walking in the zoo; A big bear hugged one",
     "sitting in the sun; One got frizzled up",
     "left all alone; He went out and hanged himself",
  ];

  LittleNiggers:string = " little nigger boys";
  ThereWere: string = ", and then there were";

  NurseryRhyme: string;
  
  NurseryRhyme8: string;

  lists: Array<number> = [1, 2, 3];
  
  title: string; // Класс содержит поле свойства title с типом string, запол­няется в конструкторе

  static TEN_LITTLE = TEN_LITTLE;

  TenLittle: string;

  constructor() { // Функция-конструктор вы­зывается автоматически при создании экземпляра класса
   this.title = 'Peculiar Shopaholic';
   this.sentence = `Hello, my name is ${ this.name }. I'll be ${ this.age + 1 } years old next month.`
   this.result = this.octal + this.hex;
   
   this.NurseryRhyme = `${this.TenLittleNiggers[0]} ${this.LittleNiggers} ${this.Rhymes[0]} ${this.ThereWere} ${this.TenLittleNiggers[1]}.`;

   this.TenLittle = TEN_LITTLE[8];

   this.NurseryRhyme8 = `${this.TenLittle} ${this.LittleNiggers} ${this.Rhymes[TEN_LITTLE.Eight]} ${this.ThereWere} ${TEN_LITTLE.Seven}.`;
  }

}
