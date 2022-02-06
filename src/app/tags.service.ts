import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TagData } from './tags.interface';
import { TAGS } from './tags.mock';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  getTagsData(): Observable<TagData[]> {
    return of(TAGS);
  }

  getTagsDataByTitle(title: string): Observable<TagData[]> {
    return of(TAGS.filter(tag => tag.title.toLowerCase().includes(title.toLowerCase())));
  }
}
