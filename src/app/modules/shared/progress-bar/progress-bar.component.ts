import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(private router: Router) { }

  private showLoader: Observable<boolean>
  private hideLoader: Observable<boolean>

  isLoading: Observable<boolean>

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false))
    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true))

    this.isLoading = merge(this.hideLoader, this.showLoader)
  }

}
