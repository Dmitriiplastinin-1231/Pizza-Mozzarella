// Global pizzas

export type pizza = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number
};

export enum Status {
    PENDING = 'pending',
    SUCCESS = 'successful',
    REJECT = 'notPizzas'
}

// Cart pizzas

export type cartPizza = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    pizzaCurrentSize: number,
    pizzaCurrentType: string,
    amount: number
}

// Sort

export type sortCategory = {
    name: string,
    viewName: string
}