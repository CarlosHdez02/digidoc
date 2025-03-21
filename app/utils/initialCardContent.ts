import { InitialCardContent } from "@/interfaces/initialCardContent";
import calculator from '@/public/static/calculator.svg'
import percentage from '@/public/static/percentage-round.svg'
import moneyR from '@/public/static/money-receive.svg'
import moneyS from '@/public/static/money-receive.svg'

export const initialCardArray: InitialCardContent[] = [
    {
        id:"1",
        description:"Hacemos tu contabilidad mensual",
        image:calculator
    },
    {
        id:"2",
        description:"Calculamos tus impuestos",
        image:percentage

    },
    {
        id:"3",
        description:"Presentamos tus declaraciones SAT",
        image:moneyR

    },
    {
        id:"4",
        description:"Calculo, timbrado y envio de nomina",
        image:moneyS

    }
]