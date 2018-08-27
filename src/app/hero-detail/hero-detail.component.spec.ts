import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ HeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should correctly render the passed @Input value', () => {
    // there shouldn't be any value initially
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('');

    // let's set the @Input value and then verify again
    component.hero.name = 'Fabien';

    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('Fabien');
  });
  */
});
