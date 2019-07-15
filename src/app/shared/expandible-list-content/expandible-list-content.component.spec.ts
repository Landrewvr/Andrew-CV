import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandibleListContentComponent } from './expandible-list-content.component';

describe('ExpandibleListContentComponent', () => {
  let component: ExpandibleListContentComponent;
  let fixture: ComponentFixture<ExpandibleListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandibleListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandibleListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
