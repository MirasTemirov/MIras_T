import {Item} from "./item";

export interface Category{
  id: number;
  name: string;
  image_link: string;
  items: Item[];
}
