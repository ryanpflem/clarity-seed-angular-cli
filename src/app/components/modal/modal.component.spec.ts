import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule } from 'clarity-angular';
import { ModalComponent } from './modal.component';

describe('AboutComponent with TCB', function () {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [ModalComponent]
    });
  });

  it('should instantiate AboutComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(ModalComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance instanceof ModalComponent).toBe(true, 'should create AboutComponent');
    });
  }));
});
