import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDisplayThumbComponent } from './tag-display-thumb.component';

describe('TagDisplayThumbComponent', () => {
  let component: TagDisplayThumbComponent;
  let fixture: ComponentFixture<TagDisplayThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDisplayThumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDisplayThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
