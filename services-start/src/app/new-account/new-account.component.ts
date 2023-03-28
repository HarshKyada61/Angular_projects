import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.services';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService, private accountSrvice: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountSrvice.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  
  }
}
