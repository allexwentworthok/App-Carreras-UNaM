import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FioPage } from './fio.page';

describe('FioPage', () => {
  let component: FioPage;
  let fixture: ComponentFixture<FioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
