export interface Category {
  id: number;
  name: string;
  slug: string;
  parent_id?: number;
  description?: string;
  image?: string;
  is_active: boolean;
  sort_order?: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}