export class Recipe{
    public id:number;
    public name:string;
    public description:string;
    public imagePath:string;
    // public ingredients:Array<Ingredient>;

    constructor(id:number,name:string, description:string, imagePath:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }

}