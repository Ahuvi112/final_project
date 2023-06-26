export class student{
    id!:number
    firstName!:string
    lastName!:string
    addres!:string
    phone!:string
    avgMarks!:number
    active!:boolean

    constructor(_id: number, _firstName: string,_lastName: string,_addres: string,_phone: string,_avgMarks: number,_active: boolean) {
        this.id = _id;
        this.firstName = _firstName;
        this.lastName=_lastName;
        this.addres=_addres;
        this.phone=_phone;
        this.avgMarks=_avgMarks;
        this.active=_active;
     }
}