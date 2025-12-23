type Product = {
    readonly id: number;
    name: string;
}

let p: Product;

p = {id: 1, name: 'Pepsi'};
// p.id = 2;

console.log(p);