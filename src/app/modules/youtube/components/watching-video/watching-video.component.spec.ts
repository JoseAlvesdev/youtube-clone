import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingVideoComponent } from './watching-video.component';

describe('WatchingVideoComponent', () => {
  let component: WatchingVideoComponent;
  let fixture: ComponentFixture<WatchingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchingVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
