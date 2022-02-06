import { Component, Input, OnInit } from '@angular/core';
import { TagData } from '../tags.interface';

@Component({
  selector: 'app-tag-display-list',
  templateUrl: './tag-display-list.component.html',
  styleUrls: ['./tag-display-list.component.scss']
})
export class TagDisplayListComponent implements OnInit {
  @Input() tags: TagData[] = []; 
  constructor() { }

  ngOnInit(): void {
  }

}
