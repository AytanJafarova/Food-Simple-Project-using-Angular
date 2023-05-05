import { CardItem } from "./CardItem";

export class Cart{
  
    items:CardItem[] = [];

    get totalPrice(): number
    {
        let totalPrice = 0;
        this.items.forEach(item => {totalPrice += item.price})
        return totalPrice;
    }
    
}