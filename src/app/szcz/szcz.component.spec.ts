import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczComponent } from './szcz.component';

describe('SzczComponent', () => {
  let component: SzczComponent;
  let fixture: ComponentFixture<SzczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzczComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
