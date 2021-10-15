export interface Istate {
  product: {
    id: number
    imgLink: string
    productLink: string
    name: string
    price: number
    additionalInfo: string
  }[]
}

export interface Icart {
  cart: {
    id: number
    imgLink: string
    name: string
    price: number
  }[]
}

export interface ItoggleButton {
  toggleButton: boolean
}

export interface IAlertInfo {
  message: string
  timeOut: boolean
  setTimeOut: any
}