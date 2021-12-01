import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular unit-test Sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular unit-test Sample');
  });

  it('should render title in  h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Angular unit-test Sample');
  });

  it('should call constructor', () => {
   let testx: string[] =["Hey, I am constructor called"];

   const fixture = TestBed.createComponent(AppComponent);
   fixture.detectChanges();
   const app = fixture.debugElement.componentInstance;
    expect(app.testOne).toEqual(testx);
  
  });

  it('should call ngOnInit', () => {
    let testy: string[] =["Hey, I am ngOnInit called"];
    
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
     expect(app.testTwo).toEqual(testy);
   
   });

   it('should call Add method', () => {
    let a : number = 10;
    let b : number = 20;
 
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const app = fixture.debugElement.componentInstance;
     expect(app.Add(a,b)).toBe(30);
     });
});
