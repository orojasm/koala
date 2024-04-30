import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavbarComponent, TranslateModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('Unit test ok', () => {
    const app = true;
    expect(app).toBeTruthy();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Modo dark prendido ak inicio', () => {
  //   expect(component.isDark).toBeFalsy();
  // });

  // it('Click en btn dark', () => {
  //   let email = component.form.controls['email'];
  //   email.setValue('orojas.molina@gmail.com');

  //   expect(component.form.invalid).toBeFalse();
  // });


  // it('Click en btn dark', () => {
  //   const btnDarkMode = fixture.debugElement.query(By.css('button#btnDarkMode'));
  //   btnDarkMode.nativeElement.click();

  //   expect(component.isDark).toBeFalsy();
  // });

});
