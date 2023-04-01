import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age:16,
    avatar:'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] =['Nico','Juli','Santi'];
  newName = '';
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/foto.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 565,
      image: './assets/images/paisaje1.jpg'
    },
    {
      name: 'Colleccion de albunes',
      price: 565,
      image: './assets/images/paisaje2.jpg'
    },

  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';

  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
}