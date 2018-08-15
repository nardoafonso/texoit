export class Item {

    public name: string;
    public unit: string;
    public quantity: string;
    public price: string;
    public perish: boolean;
    public dueDate: Date;
    public fabricationDate: Date;

    constructor(
        name: string,
        unit: string,
        quantity: string,
        price: string,
        perish: boolean,
        dueDate: Date,
        fabricationDate: Date) {

        this.name = name;
        this.unit = unit;
        this.quantity = quantity;
        this.price = price;
        this.perish = perish;
        this.dueDate = dueDate;
        this.fabricationDate = fabricationDate;

    }

}