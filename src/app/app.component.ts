import { Component } from '@angular/core';
import { NotificationsService } from './notifications/services/notifications.service';
import { Notification } from './notifications/model/notification';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notification = { title: 'Title', text: 'Some random notification text.', level: 'success', options: { timeout: 8 } };
  test = 'test';
  constructor(private _notificationsService: NotificationsService) {
  }

  addNotification() {
    const n = new Notification(this.notification);
    this._notificationsService.addNotification(n);
  }
}
