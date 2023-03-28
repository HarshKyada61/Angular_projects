import { Component,  Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService: LoggingService, private accountService: AccountsService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    // this.loggingService.logStatusChange(status)
  }
}
