import { BannerInterface } from "@/interfaces/banner";
import pen from '@/public/static/pen.svg'
import database from '@/public/static/database.svg'
import fileDownload from '@/public/static/file-download.svg'
export const BannerArray: BannerInterface[] = [
    {
        id:"1",
        title:"Paso 1",
        description:"Agrega tu fiel",
        image:pen
    },
    {
        id:"2",
        title:"Paso 2",
        description:"Sincroniza tus cuentas bancarias",
        image:database
    },
    {
        id:"3",
        title:"Paso 3",
        description:"Recibe mensualmente tu declaración de impuestos",
        image:fileDownload
    },
    
]