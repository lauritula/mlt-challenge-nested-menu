import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wabi Challenge';
  initialData: any[] = [];
  constructor(private database: DataService) {
    this.initialData = this.database.getRootElements();
  }

  
}
