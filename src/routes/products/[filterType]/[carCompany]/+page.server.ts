// src/routes/products/[filterType]/[carCompany]/+page.server.ts

import { supabase } from '$lib/utils/supabase';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import type { SearchResult } from '$lib/types';

export const prerender = false;
export const load: PageServerLoad = async ({ params }) => {
	const { filterType, carCompany } = params;

	const { data, error: dbError } = await supabase
		.from('Products')
		.select(
			'id, turfio_part_no, filter_type_id, car_company_id, model, mrp, image_url, CarCompanies(*), FilterTypes(*)'
		)
		.returns<SearchResult[]>();

	if (dbError || !data) {
		console.error(dbError);
		throw error(500, 'Failed to load products');
	}

	const filtered = data.filter(
		(product) =>
			product.CarCompanies?.name.replace(/ /g, '-') === carCompany &&
			product.FilterTypes?.name.replace(/ /g, '-') === filterType
	);

	return {
		products: filtered
	};
};
