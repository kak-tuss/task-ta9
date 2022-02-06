import { Component, Input, OnInit } from '@angular/core';
import { TagData } from '../tags.interface';

@Component({
  selector: 'app-tag-display-thumb',
  templateUrl: './tag-display-thumb.component.html',
  styleUrls: ['./tag-display-thumb.component.scss']
})
export class TagDisplayThumbComponent implements OnInit {
  @Input() tags: TagData[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
