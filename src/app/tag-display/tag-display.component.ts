import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TagData } from '../tags.interface';
import { TagsService } from '../tags.service';
export enum PAGE_STATE {
  List = 0,
  Thumbs = 1
}
@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.scss']
})
export class TagDisplayComponent implements OnInit {
  tags$: Observable<TagData[]>;
  pageStateEnum = PAGE_STATE;
  pageState: PAGE_STATE = PAGE_STATE.List;
  search: string = '';

  constructor(
    private tagsService: TagsService
  ) { }

  ngOnInit(): void {
    this.tags$ = this.tagsService.getTagsData();
  }
  switchState(switchToState: PAGE_STATE, e: Event) {
    this.pageState = switchToState;
    e.preventDefault();
  }
  filterTags() {
    if (this.search.length > 2) {
      this.tags$ = this.tagsService.getTagsDataByTitle(this.search);
    } else {
      this.tags$ = this.tagsService.getTagsData();
    }
  }
}
