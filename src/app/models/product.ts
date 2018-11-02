import { Category } from './category';

export interface Product{
	id: number;
	name: string;
	price: number;
	available: boolean;
	best_seller: boolean;
	category: Category;
	img: string;
	description: string;
	loaded_image?: boolean;
}