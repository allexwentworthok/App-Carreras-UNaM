import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForestalesPage } from './forestales.page';

describe('ForestalesPage', () => {
  let component: ForestalesPage;
  let fixture: ComponentFixture<ForestalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForestalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
