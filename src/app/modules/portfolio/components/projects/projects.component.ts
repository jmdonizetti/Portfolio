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
      width: '110px',
      height: '100px',
      description: "Projeto feito com Angular, onde foi utilizado o consumo da API PokéAPI, projeto mostra 100 pokemons, ele tem uma barra de pesquisa para o usuário digitar o nome do Pokémon e ele apareça na tela, ao clicar no Pokémon ele abre os detalhes desse Pokémon.",

      links:[
        {
          repositorio:"https://github.com/jmdonizetti/angular-pokedex",
          name: 'Conheça o projeto',
          href: 'https://jmdonizetti.github.io/angular-pokedex/'
        },
      ],
    },

    {
      src: "assets/img/projects/todo-list.png",
      alt: "Projeto toDo List",
      title: "ToDo List",
      width: '100px',
      height: '90px',
      description: "Este é um aplicativo To-Do List desenvolvido com Angular, que permite ao usuário gerenciar suas tarefas de forma simples e eficiente. O usuário pode adicionar novos itens à lista, editar tarefas existentes, excluir itens individualmente ou remover todos de uma vez. Para tornar a experiência mais segura e amigável, o sistema conta com integração do SweetAlert2, exibindo uma janela de confirmação antes da exclusão de qualquer item. ",

      links:[
        {
          repositorio:"https://github.com/jmdonizetti/to-do-list/tree/main",
          name: 'Conheça o projeto',
          href: 'https://jmdonizetti.github.io/to-do-list/'
        },
      ],
    },

    {
      src: "assets/img/projects/projeto-ada.png",
      alt: "Projeto Ada-Santander-Coders-2023",
      title: "Projeto em grupo",
      width: '110px',
      height: '70px',
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
