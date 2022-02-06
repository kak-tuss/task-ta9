import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDisplayListComponent } from './tag-display-list.component';

describe('TagDisplayRowComponent', () => {
  let component: TagDisplayListComponent;
  let fixture: ComponentFixture<TagDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDisplayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
