export interface Istate {
  product: {
    id: number
    imgLink?: string
    productLink?: string
    name: string
    price: number
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
