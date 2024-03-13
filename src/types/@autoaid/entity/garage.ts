import { Place } from "./place.";

export interface GarageAdmin {
	garage_id: number;
	created_date: Date;
	updated_date: Date;
	created_user: number;
	updated_user: number;
	is_deleted: boolean;
	avatar_url?: string;
	email?: string;
	address?: string;
	introduction?: string;
	introduction_url?: string[];
	owner_id?: string;
	place_id: number;
	ownerName?: string;
	ownerEmail?: string;
	ownerPhone?: string;
	name?: string;
	place?:Place
}
