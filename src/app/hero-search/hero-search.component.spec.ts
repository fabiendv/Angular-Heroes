import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroSearchComponent } from './hero-search.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['']);

    TestBed.configureTestingModule({      
      imports: [RouterTestingModule],
      declarations: [HeroSearchComponent],
      providers: [
        { provide: HeroService, useValue: svcSpy }
      ]
    }).compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be have <h4> Hero Search', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h3 = bannerElement.querySelector('h4');
    expect(h3.textContent).toContain('Hero Search');
  });

  it('should search', () => {
    component.search("A");
    component.ngOnInit;
    console.log("GAAAAAAAAAAAAAAA");
    console.log("component heroes",component.heroes$._subscribe);
    component.heroes$.subscribe()
  });
});




/*
describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],

      declarations: [ HeroSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/