import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let service;
  const arrayHeroes = [
    {id: 0, name: 'Atta Boy'},
    {id: 1, name: 'Thatsmy Girl'},
    {id: 2, name: 'Iron Man'},
    {id: 3, name: 'Hulk'},
    {id: 4, name: 'Ant Man'},
    {id: 5, name: 'Spider Man'},
    {id: 6, name: 'Thor'},
    ];
    
  beforeEach(async(() => {  

    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes','getHero','addHero','deleteHero']);
    svcSpy.getHeroes.and.returnValue(of(
        arrayHeroes,
    ));
    svcSpy.getHero.and.returnValue(of(
    [
      console.log("HERO ADDED"),

         // arrayHeroes[5],
    ]));
    svcSpy.addHero.and.returnValue(of(
     [
       //arrayHeroes.push({id: 7, name: 'Doctor Strange'}),
       console.log("HERO ADDED"),
     ]));
    svcSpy.deleteHero.and.returnValue(of(
    [
      //arrayHeroes.slice(0,6),
      console.log("HERO DELETED"),

    ]));

    TestBed.configureTestingModule({
//      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      imports: [RouterTestingModule,FormsModule],
      declarations: [HeroesComponent, HeroDetailComponent],
      providers: [
        { provide: HeroService, useValue: svcSpy },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be have <h2> My Heroes', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h2 = bannerElement.querySelector('h2');
    expect(h2.textContent).toContain('My Heroes');
  });

  it('get heroes', () => {
    console.log("DEBUUUUUUUUUUUUUUUUUUUUUUUUUT");
    console.log(component.heroes);

    component.ngOnInit();
    console.log(component.heroes);
    expect(component.heroes).toEqual(arrayHeroes);
  });
/*
  it('add heroes', () => {
    console.log("DEBUUUUUUUUUUUUUUUUUUUUUUUUUT");

    component.ngOnInit();
    console.log(component.heroes);

    component.add("TestMan");
    component.getHeroes()

    console.log(component.heroes);

  });

  it('delete heroes', () => {
    console.log("DEBUUUUUUUUUUUUUUUUUUUUUUUUUT");
    component.ngOnInit();

    component.delete({id: 1, name: 'Thatsmy Girl'});

    console.log(component.heroes);
  });
  */

  //Training Test
  it('#clicked() should toggle #isOn', () => {
    //const comp = new HeroesComponent(service);
    expect(component.isOn).toBe(false, 'off at first');
    component.clicked();
    expect(component.isOn).toBe(true, 'on after click');
    component.clicked();
    expect(component.isOn).toBe(false, 'off after second click');
  });
});
