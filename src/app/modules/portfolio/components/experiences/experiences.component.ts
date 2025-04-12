import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Controlador de acesso",
        p: "Grupo Coneleste | Nov/2023 à Jun/2024"
      },
      text: "<p>Controle de acesso e monitoramento em ambiente corporativo. </p>",
    },

    {
      summary: {
        strong: "Líder de portaria remota",
        p: "CM Soluções | Abr/2019 à Jan/2023"
      },
      text: "<p>Responsável pelo controle de acesso e monitoramento de condomínios residenciais.</p> <p> Liderança de equipe e gestão de rotinas operacionais. </p>",
    },

    {
      summary: {
        strong: "Operador de telemarketing",
        p: "Atento Brasil | Mai/2018 à Mai/2019"
      },
      text: "<p>Operador de telemarketing ativo e receptivo, responsável pela retenção de clientes pós compra.</p>",
    },

    {
      summary: {
        strong: "Auxiliar de logística",
        p: "Batistela | Jun/2016 à Nov/2017"
      },
      text: "<p>Auxiliar de logística, recebimento de mercadoria, estocagem, separação de carga e limpeza do local.</p>"
    },
  ])
}
