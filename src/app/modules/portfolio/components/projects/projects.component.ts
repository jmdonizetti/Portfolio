import { Component, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/pokedex.png",
      alt: "Projeto Pokedex",
      title: "Pokedex",
      width: '100px',
      height: '51px',
      description: "Pokedex criada com HTML5, CSS3 e JavaScript!",
      links: [
        {
          name: 'Conheça o proeto',
          href: 'https://jmdonizetti.github.io/pokedex/'
        },
      ],
    },
  ]);
}
