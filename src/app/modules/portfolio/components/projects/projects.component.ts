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
      src: "assets/img/projects/pokedex.svg",
      alt: "Projeto Pokedex",
      title: "Pokedex",
      width: '120px',
      height: '60px',
      description: "Projeto feito com HTML5, CSS3 e JavaScript, onde foi utilizado o consumo da API PokéAPI, assim que o usuário passar o mouse no Pokémon ele mostra um GIF do Pokémon e o status dele, clicando no Voltorb abaixo ele faz uma busca por mais Pokémons.",

      links:[
        {
          repositorio:"https://github.com/jmdonizetti/pokedex",
          name: 'Conheça o projeto',
          href: 'https://jmdonizetti.github.io/pokedex/'
        },
      ],
    },

    {
      src: "assets/img/projects/projeto-ada.png",
      alt: "Projeto Ada-Santander-Coders-2023",
      title: "Projeto em grupo",
      width: '115px',
      height: '65px',
      description: "Projeto em grupo feito no curso da Ada-SantanderCoders 2023, esse projeto foi realizado utilizando HTML, CSS e Bootstrap, foco era criar uma página utilizando Bootstrap e deixando ela totalmente responsiva.",

      links:[
        {
          repositorio: "https://github.com/jmdonizetti/projeto-em-grupo-SantanderCoders-2023-HTML-CSS",
          name: 'Conheça o projeto',
          href: 'https://jmdonizetti.github.io/projeto-em-grupo-SantanderCoders-2023-HTML-CSS/login.html'
        },
      ],
    },

    {
      src: "assets/img/projects/convite-apollo.png",
      alt: "COnvite Apollo",
      title: "Convite",
      width: '90px',
      height: '90px',
      description: "Criei um convite dos Transformers para o aniversário do meu filho, utilizei HTML, CSS, Bootstrap e JavaScript. Objetivo era mostrar o tema do aniversário, o local e quando o convidado fosse confirmar a sua presença chegaria no meu WhatsApp com o nome dos confirmados.",
      links:[
        {
          repositorio:"https://github.com/jmdonizetti/conviteApollo?tab=readme-ov-file",
          name: 'Conheça o projeto',
          href: 'https://jmdonizetti.github.io/conviteApollo/'
        },
      ],
    },

    {
      src: "assets/img/projects/aguarde.png",
      alt: "Projeto em construção",
      title: "Construindo",
      width: '130px',
      height: '130px',
      description: "Projeto em construção",
      links:[
        {
          repositorio:"",
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
