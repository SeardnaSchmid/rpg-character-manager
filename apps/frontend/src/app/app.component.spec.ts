import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@viewer-core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let statusBarSpy: any;
  let splashScreenSpy: any;
  let keyboardSpy: any;

  beforeEach(async(() => {
    statusBarSpy = jest.fn();
    splashScreenSpy = {
      hide: jest.fn(),
    };
    keyboardSpy = {
      hideFormAccessoryBar: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), CoreModule],
      declarations: [AppComponent],
      providers: [],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }), 30000);
});
