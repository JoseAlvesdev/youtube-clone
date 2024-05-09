import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { WatchingVideoComponent } from '../../components/watching-video/watching-video.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, WatchingVideoComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
