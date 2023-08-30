import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesStudiesComponent } from './cases-studies.component';

describe('CasesStudiesComponent', () => {
  let component: CasesStudiesComponent;
  let fixture: ComponentFixture<CasesStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesStudiesComponent],
    });
    fixture = TestBed.createComponent(CasesStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
