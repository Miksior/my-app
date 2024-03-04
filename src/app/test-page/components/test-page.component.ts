import { Component, inject, signal } from '@angular/core';
import { TestPageService } from '../services/test-page.service';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [],
  providers: [TestPageService],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  public testSig = signal('Hello!');
  public testPageSrv = inject(TestPageService)

  public test(){
    this.testPageSrv.testGet(1)
  }
}
