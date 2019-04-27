export class Customer{
    name:string;
    gender:string;
    passwords:string;
    contact:number;
    email:string;
    address:Address;
}

export class Address{
    addressLine1:string;
    state:string;
    city:string;
    postalCode:number;
}