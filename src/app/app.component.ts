import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
      {name: 'Angular 4', itemDate: new Date(2016, 1, 1)},
      {name: 'Laravel', itemDate: new Date(2010, 1, 1)},
      {name: 'Zend Framework', itemDate: new Date(2009, 1, 1)},
  ]
  newItem = "";
  pushItem = function(){
      if(this.newItem !+ ""){
          this.items.push({name:this.newItem, itemDate: new Date()});
          this.newItem = "";
      }
  }

  removeItem = function(index){
      this.items.splice(index, 1);//remove only one item starting from index given
  }
}
