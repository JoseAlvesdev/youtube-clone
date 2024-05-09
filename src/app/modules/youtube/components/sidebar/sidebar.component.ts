import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public arrayVideos = signal([
    {
      "src": "/assets/images/thumbnail-1.svg",
      "alt": "Video listado",
      "videoTitle": "Geração Tech Unimed - BH - Ciência de Dados",
      "nameChannel": "DigitalInnovationOne",
      "views": `
        2,1 mil visualizações<br/>
        Transmitido há 2 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-2.svg",
      "alt": "Video listado",
      "videoTitle": "Scrum Talks",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      1,6 mil visualizações<br/>
      Transmitido há 3 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-3.svg",
      "alt": "Video listado",
      "videoTitle": "Machine Learning Avançado - Fast Track",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      1,7 mil visualizações<br/>
      Transmitido há 4 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-4.svg",
      "alt": "Video listado",
      "videoTitle": "Global Skills #2 - Project Planning",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      971 visualizações<br/>
      Transmitido há 5 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-1.svg",
      "alt": "Video listado",
      "videoTitle": "Geração Tech Unimed - BH - Ciência de Dados",
      "nameChannel": "DigitalInnovationOne",
      "views": `
        2,1 mil visualizações<br/>
        Transmitido há 2 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-2.svg",
      "alt": "Video listado",
      "videoTitle": "Scrum Talks",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      1,6 mil visualizações<br/>
      Transmitido há 3 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-3.svg",
      "alt": "Video listado",
      "videoTitle": "Machine Learning Avançado - Fast Track",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      1,7 mil visualizações<br/>
      Transmitido há 4 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-4.svg",
      "alt": "Video listado",
      "videoTitle": "Global Skills #2 - Project Planning",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      971 visualizações<br/>
      Transmitido há 5 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-1.svg",
      "alt": "Video listado",
      "videoTitle": "Geração Tech Unimed - BH - Ciência de Dados",
      "nameChannel": "DigitalInnovationOne",
      "views": `
        2,1 mil visualizações<br/>
        Transmitido há 2 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-2.svg",
      "alt": "Video listado",
      "videoTitle": "Scrum Talks",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      1,6 mil visualizações<br/>
      Transmitido há 3 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-3.svg",
      "alt": "Video listado",
      "videoTitle": "Machine Learning Avançado - Fast Track",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      1,7 mil visualizações<br/>
      Transmitido há 4 dias
      `
    },
    {
      "src": "/assets/images/thumbnail-4.svg",
      "alt": "Video listado",
      "videoTitle": "Global Skills #2 - Project Planning",
      "nameChannel": "DigitalInnovationOne",
      "views": `
      971 visualizações<br/>
      Transmitido há 5 dias
      `
    },
  ])
}
