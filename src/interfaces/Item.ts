export default interface Item {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    freeShipping: boolean;
    brand: string;
    shortDesc: string;
    longDesc: string;
    ageFrom: number;
    ageTo: number;
    image: string;
    createdAt: Date;
};
