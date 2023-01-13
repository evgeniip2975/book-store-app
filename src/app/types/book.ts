
interface IObjectKeys {
  [key: string]: string | number | boolean | object
}


export interface IBook extends IObjectKeys {
  id: number,
  image: string
  rate: number,
  title: string,
  author: string,
  inStock: boolean,
  price: number,
  jenre: string,
  details: IDetails,
  quantity: number
}

export interface IDetails {
  pages: number,
  yearOfPublication: number,
  cover: string,
  language: string,
  description?: string
}
