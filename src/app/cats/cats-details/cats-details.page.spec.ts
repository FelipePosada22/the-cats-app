import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatsDetailsPage } from './cats-details.page';

describe('CatsDetailsPage', () => {
  let component: CatsDetailsPage;
  let fixture: ComponentFixture<CatsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
