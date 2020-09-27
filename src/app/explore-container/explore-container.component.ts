import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  readonly icMenuBold = '/assets/images/ic_menu_bold.svg';
  readonly icMenuBlocks = '/assets/images/ic_menu_blocks.svg';
  readonly icFilter = '/assets/images/ic_filter.svg';
  readonly sales = '/assets/images/graph.svg';
  readonly support = '/assets/images/support.svg';
  readonly marketing = '/assets/images/marketing.svg';
  readonly chart = '/assets/images/chart-pie.svg';
  readonly next = '/assets/images/next.svg';
  constructor() { }

  ngOnInit() {}

}
