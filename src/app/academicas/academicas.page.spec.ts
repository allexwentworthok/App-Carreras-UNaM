import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademicasPage } from './academicas.page';

describe('AcademicasPage', () => {
  let component: AcademicasPage;
  let fixture: ComponentFixture<AcademicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
