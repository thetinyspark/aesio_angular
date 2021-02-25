import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];

  constructor() { }

  public getAll(): Observable<Product[]> {
    return of(this.products);
  }

  public add(product: Product): Observable<boolean> {
    this.products.push(product);
    return of(true);
  }

  public remove(product: Product): Observable<boolean> {
    const pos: number = this.products.indexOf(product);
    this.products.splice(pos, 1);
    return of(true);
  }

  public getTotalHT(): Observable<number> {

    // on veut calculer le total du HT du prix de notre panier. 
    // première étape: récupérer notre panier via notre méthode. 
    // (normalement on récupère notre paneir depuis un appel vers une api mais ici
    // on simule le truc)

    const cartObs: Observable<Product[]> = this.getAll();

    // on souhaite appliquer un traitement aux données que nous renvoie 
    // notre observable. Ce traitement, c'est tout simplement le calcul 
    // du total. On souhaite également retourner un Observable de ce total
    //, pour ça, on va chaîner notre observable à une fonction de traitement 
    // à l'aide de l'opérateur pipe. 
    // l'opérateur pipe prend en paramètre une fonction de traitement 
    // mais encore faut-il savoir quand l'appeler, (à la fin, à chaque diffusion 
    // de valeur, pendant une erreur etc ...  ). 
    // Ici, on choisit d'appeler la fonction de traitement à chaque fois que notre 
    // observable diffuse une valeur, on utilise donc l'opérateur map. 

    const treatment =  (products: Product[]) => {
      let total: number = 0;
      for (let i: number = 0; i < products.length; i++) {
        total += products[i].price;
      }

      return total;
    }

    return cartObs.pipe(map(treatment));

  }

  public getTotalTTC():Observable<number>{
    return this.getTotalHT().pipe( map( (totalHT:number) => totalHT * 1.2 ));
  }

  public getEverything():Observable<{cart:Product[], ht:number, ttc:number}>{
    return forkJoin(
      {
        cart:this.getAll(), 
        ht: this.getTotalHT(), 
        ttc: this.getTotalTTC()
      }
    );
  }

}
