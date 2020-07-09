import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuAutogestionPage } from './menu-autogestion.page';

describe('MenuAutogestionPage', () => {
  let component: MenuAutogestionPage;
  let fixture: ComponentFixture<MenuAutogestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAutogestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuAutogestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
