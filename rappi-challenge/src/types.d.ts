export interface APIResults {
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  sublevels: CategorySublevel[];
}

export interface CategorySublevel {
  id: number;
  name: string;
  sublevels?: PurpleSublevel[];
}

export interface PurpleSublevel {
  id: number;
  name: string;
  sublevels?: FluffySublevel[];
}

export interface FluffySublevel {
  id: number;
  name: string;
}
