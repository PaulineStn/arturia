import { Component } from '@angular/core';


@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent {
  recettes = [
    { nom: 'Soupe Craspouille', description: 'Jus de thon, accompagné d une délicieuse pâté, de croquettes croustillantes et saupoudrées de fragments de mouches' },
    { nom: 'Spaghetti Bolognese', description: 'Délicieux spaghetti avec une sauce bolognaise' },
    { nom: 'Poulet Curry', description: 'Poulet avec une sauce au curry épicée' },
    { nom: 'Salade César', description: 'Salade verte avec du poulet, des croûtons et une sauce César' },
    { nom: 'Salade de pates', description: 'Salade de pâtes avec des tomates séchées, des amandes effilochées, des petits pois frais et de la feta' },
    { nom: 'Gnocchi Feta tomates cerises', description: 'gnocchis avec tomates cerises et feta rôties au four' },
    { nom: 'Quiche Killian', description: 'Pâte brisée, tomates, courgettes et buche de chèvre en rondelle. Ajouter des herbes de provence' },
    { nom: 'Sphagetthi carbonara', description: 'pâtes carbonara avec sauce carbonara composée de jaune d oeuf, parmesan, huile d olive et ail, à servir avec du guanciale grillé ' },
    { nom: 'Taboulé', description: 'Semoule avec jus de citron, huile d olive, puis ajouter concombres et tomates hachés. Rajouter du Raz el hanout' }
  ];

  searchTerm: string = '';

  get filteredRecettes() {
    return this.recettes.filter(recette => 
      recette.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      recette.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
