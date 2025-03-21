export interface PackageInterface{
    id:string;
    name:string;
    price:string;
    description:string;
    buttonDescription?:string;
    onClick?:()=>{}

}