import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-manual-page',
  templateUrl: './add-manual-page.component.html',
  styleUrls: ['./add-manual-page.component.css']
})
export class AddManualPageComponent implements OnInit {


  public newRecipe: Recipe = { recipeName: '', instructions: '', ingredients: '' };

  public formError: string; 

  private formIsValid(): boolean {
    if (this.newRecipe.recipeName && this.newRecipe.instructions) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideRecipeForm(): void {
    this.newManual.title = '';
    this.newManual.edition = '';
    this.newManual.author = '';
    this.newManual.publisher = '';
    this.newManual.isbn = '';
  }

  public onSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      // this.eatrDataService.addRecipeByChefId('5ec30d3a93f206389c58748c',
      //   this.newRecipe)
        .then((recipe: Recipe) => {
          let recipes = this.chef.recipes.slice(0);
          recipes.unshift(recipe);
          this.chef.recipes = recipes;
          this.resetAndHideRecipeForm();
        });
    } else {
      this.formError = 'All fields required, please try again';
    }
  }



  constructor() { }

  ngOnInit() {
  }
  public pageContent = {
    header: {
      title: 'Add a Manual or Textbook',
      strapline: ''
    },
   
  };

}