import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../../shared/link.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router, private linkService: LinkService) { }

  ngOnInit() {
  }

}
