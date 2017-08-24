import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';


export const chatRoutes: Routes = [
  {path: 'chat', component: ChatComponent }
];

export const ChatRouter = RouterModule.forChild(chatRoutes);
