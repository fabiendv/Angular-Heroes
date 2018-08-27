import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { MessageService } from './message.service';
import { MockBackend } from '@angular/http/testing';

describe('HeroService', () => {
  let service:HeroService;
  let httpTestingController: HttpTestingController;
  let heroServiceStub: Partial<HeroService>;

  let http: HttpClient;
  let messageService: MessageService;
  let httpClientSpy: { get: jasmine.Spy };
let heroService: HeroService;
 /*
beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  heroService = new HeroService(<any> httpClientSpy);
});
 
it('should return expected heroes (HttpClient called once)', () => {
  const expectedHeroes: Hero[] =
    [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
 
  httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
 
  heroService.getHeroes().subscribe(
    heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
 
it('should return an error when the server returns a 404', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });
 
  httpClientSpy.get.and.returnValue(asyncError(errorResponse));
 
  heroService.getHeroes().subscribe(
    heroes => fail('expected an error, not heroes'),
    error  => expect(error.message).toContain('test 404 error')
  );
});
/*
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule],
      providers: [HeroService,HttpClient]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    http=new HttpClient();
    service=new HeroService(http,messageService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should greet properly', () => {
    const test = service.getHeroes();
    console.log(test);
  });
*/
  /*
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule],
      providers: [HeroService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });
  beforeEach(inject([HeroService], s => {
    service = s;
  }));
  //const fixture = TestBed.createComponent(BannerComponent)
  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
  it('should return heroes',()=>{
    service.getHeroes().subscribe(
      heroes => expect(heroes.length).toEqual(this.mockHeroes.length),
      fail);
    var test = service.getHeroes().heroes;
    console.log("\n"+test);
    
  });

*/
});



