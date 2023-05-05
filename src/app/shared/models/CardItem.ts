import { Food } from "./Food";

export class CardItem{
    constructor(food:Food)
    {
        this.food = food;
        this.price //getter and setter
    }
    food:Food;
    quantity:number = 1;
    get price():number{
        return this.food.price * this.quantity
    }
    
}