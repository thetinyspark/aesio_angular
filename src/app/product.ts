export class Product {
    public id:number        = -1; 
    public name:string      = ""; 
    public desc:string      = ""; 
    public imgUrl:string    = ""; 
    public category:string  = ""; 
    public price:number     = 0;
}

export const CATALOG_MOCK:Product[] = [
    {
        id: 1, 
        name: "Ordinateur", 
        desc: "C'est fait pour jou... bosser ! ", 
        imgUrl: "/assets/alienware.jpg", 
        category: "tech", 
        price: 1500
    }, 
    {
        id: 2, 
        name: "Moteur Stirling", 
        desc: "C'est fait pour générer de l'énergie ! ", 
        imgUrl: "/assets/stirling.jpg", 
        category: "old tech", 
        price: 30
    }, 
    {
        id: 3, 
        name: "Manga", 
        desc: "C'est fait pour pour bouquiner ! ", 
        imgUrl: "/assets/manga.jpg", 
        category: "book", 
        price: 30
    }, 
    {
        id: 4, 
        name: "Alcatel", 
        desc: "C'est fait pour qu'on se foute de toi ! ", 
        imgUrl: "/assets/alcatel.jpg", 
        category: "old tech", 
        price: 30
    }, 
    {
        id: 5, 
        name: "Frites", 
        desc: "C'est fait pour grossir ! ", 
        imgUrl: "/assets/frites.jpg", 
        category: "food", 
        price: 30
    }, 
    {
        id: 6, 
        name: "Nokia 3310", 
        desc: "C'est fait pour faire genre t'aimes le retro ! ", 
        imgUrl: "/assets/nokia.jpg", 
        category: "phone", 
        price: 30
    }, 
    {
        id: 7, 
        name: "Android", 
        desc: "C'est fait pour concurrencer Apple! ", 
        imgUrl: "/assets/android.jpg", 
        category: "phone", 
        price: 30
    }, 
    {
        id: 8, 
        name: "Tabouret", 
        desc: "C'est fait pour  s'asseoir! ", 
        imgUrl: "/assets/tabouret.jpg", 
        category: "meuble", 
        price: 30
    }, 
    {
        id: 9, 
        name: "Tacos", 
        desc: "C'est fait pour grossir ! ", 
        imgUrl: "/assets/tacos.jpg", 
        category: "food", 
        price: 30
    }
];

export const CATEGORIES_MOCK:string[] = [
    "all",
    "tech",
    "old tech",
    "food",
    "phone",
    "meuble",
    "book"
];

export const CATEGORY_ALL:string = CATEGORIES_MOCK[0];
export const DEFAULT_CATEGORY:string = CATEGORIES_MOCK[0];
