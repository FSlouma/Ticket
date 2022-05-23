import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbaruserComponent } from './topbaruser.component';

describe('TopbaruserComponent', () => {
  let component: TopbaruserComponent;
  let fixture: ComponentFixture<TopbaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
