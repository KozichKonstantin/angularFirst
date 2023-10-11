import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { pagSet } from 'src/app/data/paginations';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
	standalone: true,
	imports: [NgbPaginationModule]
})
export class PaginationComponent {
  
  page = pagSet.page;
  pageSize = pagSet.pageSize;
}
