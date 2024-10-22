import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrItemComponent } from './asr-item.component';

describe('AsrItemComponent', () => {
  let component: AsrItemComponent;
  let fixture: ComponentFixture<AsrItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsrItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
