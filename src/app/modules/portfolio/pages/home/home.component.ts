import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
