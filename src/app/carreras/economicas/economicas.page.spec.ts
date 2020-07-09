import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EconomicasPage } from './economicas.page';

describe('EconomicasPage', () => {
  let component: EconomicasPage;
  let fixture: ComponentFixture<EconomicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
