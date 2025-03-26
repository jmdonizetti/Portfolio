import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Icone de conhecimento em html5'
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Icone de conhecimento em css3'
    },
    {
      src: 'assets/icons/knowledge/javaScript.svg',
      alt: 'Icone de conhecimento em JavaScript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento em angular'
    },
  ])
}
