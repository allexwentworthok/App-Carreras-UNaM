import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExactasPage } from './exactas.page';

describe('ExactasPage', () => {
  let component: ExactasPage;
  let fixture: ComponentFixture<ExactasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExactasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExactasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
