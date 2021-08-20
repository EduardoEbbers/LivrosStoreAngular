import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class ProductComponent {
    public products: Product[];
    public categories: string[];

    constructor(private repository: ProductRepository) {

    }

    get Products(): Product[] {
        return this.repository.getProducts();
    }

    get Categories(): string[] {
        return this.repository.getCategories();
    }




}