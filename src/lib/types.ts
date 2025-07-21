// src/lib/types.ts

export interface CarCompany {
  id: number;
  name: string;
  logo_url: string | null;
}

export interface FilterType {
  id: number;
  name: string;
  image_url: string | null;
  parent_id: number | null;
}

export interface Product {
  id: number;
  turfio_part_no: string;
  // zip_part_no: string | null;
  filter_type_id: number;
  car_company_id: number | null;
  model: string;
  mrp: number;
  image_url: string | null;
  // These are not in the DB but can be added when you join tables
  CarCompanies?: CarCompany | null;
  FilterTypes?: FilterType | null;
}

export interface SearchResult extends Product {
  CarCompanies: CarCompany;
  FilterTypes: FilterType;
}
