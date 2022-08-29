import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { ProductType } from './../../types/type';

export const getProducts = (state: State): ProductType[] => state[NameSpace.Products].products;