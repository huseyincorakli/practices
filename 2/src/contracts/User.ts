export class User {
    name:string;
    username:string;
    email:string;
    city:string;
    
    constructor(name:string,username:string,email:string,city:string){
        this.name=name;
        this.city=city;
        this.username=username.toLowerCase()
        this.email=email.toLowerCase();
    }
}