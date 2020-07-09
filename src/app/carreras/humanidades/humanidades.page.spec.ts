import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumanidadesPage } from './humanidades.page';

describe('HumanidadesPage', () => {
  let component: HumanidadesPage;
  let fixture: ComponentFixture<HumanidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumanidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
