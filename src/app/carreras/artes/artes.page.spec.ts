import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtesPage } from './artes.page';

describe('ArtesPage', () => {
  let component: ArtesPage;
  let fixture: ComponentFixture<ArtesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
