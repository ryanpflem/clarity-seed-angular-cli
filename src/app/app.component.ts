import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from './shared/link.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private linkService: LinkService) {
  }


  getUrl() {

  }

  ngOnInit() {

  }

}
