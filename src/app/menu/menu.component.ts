import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() trigger: any = "Trigger";
  @Input() isRootNode = false;

  constructor(private database: DataService) { }
  isLoading = false;
  dataLoaded = false;
  ngOnInit(): void {
  }

  hasData(node: any) {
    const result = this.database.hasData(node.id)
    return (result > 0)?true:false;
  }  

  getData(node:any) {
    this.data = this.database.getChildren(node.id);
    }
}
