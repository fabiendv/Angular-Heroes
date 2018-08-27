import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';
import { HeroService } from '../hero.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let componentPage: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of(
      [
        { id: 0, name: 'Atta Boy' },
        { id: 1, name: 'Thatsmy Girl' },
        { id: 2, name: 'Iron Man' },
        { id: 3, name: 'Hulk' },
        { id: 4, name: 'Ant Man' },
        { id: 5, name: 'Spider Man' },
        { id: 6, name: 'Thor' },
      ]));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent, HeroSearchComponent],
      providers: [
        { provide: HeroService, useValue: svcSpy }
      ]
    }).compileComponents();
    //component = new DashboardComponent(svcSpy);
  }));

  beforeEach(() => {
    //component = TestBed.get(DashboardComponent);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  // //UNIT TEST
  // it('should get four heroes (id: 1,2,3 and 4)', () => {
  //   console.log(component.heroes);

  //   component.ngOnInit();
  //   console.log(component.heroes);

  //   expect(component.heroes).toEqual([{ id: 1, name: 'Thatsmy Girl' }, { id: 2, name: 'Iron Man' }, { id: 3, name: 'Hulk' },
  //   { id: 4, name: 'Ant Man' }]);
  // });

  // //INTEGRATION TESTS
  // it('should be have <h3> "Top Heroes" title', () => {
  //   const bannerElement: HTMLElement = fixture.nativeElement;
  //   const h3 = bannerElement.querySelector('h3');
  //   expect(h3.textContent).toContain('To Heroes');
  // });

  // it('should be have <h4> Hero name', () => {
  //   const bannerElement: HTMLElement = fixture.nativeElement;
  //   const h4 = bannerElement.querySelector('h4');
  //   expect(h4.textContent).toContain('Thatsmy Girl');
  // });
});

/*
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [ DashboardComponent, HeroSearchComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test', () => {

console.log(component.getHeroes.length);

});
});
*/