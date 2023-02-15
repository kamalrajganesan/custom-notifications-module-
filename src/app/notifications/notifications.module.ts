import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsService } from './services/notifications.service';
@NgModule({
  imports: [CommonModule],
  declarations: [NotificationsComponent, NotificationComponent],
  exports: [NotificationsComponent],
  providers: [NotificationsService],
  bootstrap: []
})
export class NotificationsModule { }
