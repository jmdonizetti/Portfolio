import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/pokedex.png",
      alt: "Projeto Pokedex",
      title: "Pokedex",
      width: '120px',
      height: '60px',
      description: "Pokedex criada com HTML5, CSS3 e JavaScript!",
      links:[
        {
          name: 'Conheça o projeto',
          href: 'https://jmdonizetti.github.io/pokedex/'
        },
      ],
    },
    {
      src: "assets/img/projects/todo-list.png",
      alt: "Projeto ToDo List",
      title: "To Do List",
      width: '135px',
      height: '135px',
      description: "Projeto ToDo-list sendo finalizado com Angular, por favor aguarde!",
      links:[
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/jmdonizetti'
        },
      ],
    },
    {
      src: "assets/img/projects/aguarde.png",
      alt: "Projeto em construção",
      title: "Construindo",
      width: '135px',
      height: '135px',
      description: "Projeto em construção",
      links:[
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/jmdonizetti'
        },
      ],
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPainelClass.PROJECTS
    })
  }
}
