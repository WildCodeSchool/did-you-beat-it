import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableauBordComponent } from './admin-tableau-bord.component';

describe('AdminTableauBordComponent', () => {
  let component: AdminTableauBordComponent;
  let fixture: ComponentFixture<AdminTableauBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTableauBordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTableauBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
