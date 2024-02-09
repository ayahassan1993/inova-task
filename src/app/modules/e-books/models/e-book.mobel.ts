export interface Ebook {
    "id": string,
    "type": string,
    "attributes": Attributes
    "relationships": {
        "variants": {
            "data": []
        },
        "option_types": {
            "data": []
        },
        "product_properties": {
            "data": []
        },
        "taxons": {
            "data": []
        },
        "images": {
            "data": []
        },
        "default_variant": {
            "data": {
                "id": string,
                "type": string
            }
        },
        "primary_variant": {
            "data": {
                "id": string,
                "type": string
            }
        }
    }
}


export interface Attributes {
    "name": string,
    "description": string | null,
    "available_on": string,
    "slug": string,
    "meta_description": string | null,
    "meta_keywords": string | null,
    "updated_at": string,
    "sku": string,
    "public_metadata": {},
    "purchasable": boolean,
    "in_stock": boolean,
    "backorderable": boolean,
    "available": boolean,
    "currency": string,
    "price": number,
    "display_price": string,
    "compare_at_price": number,
    "display_compare_at_price": string,
    "product_type": string,
    "avg_review": number,
    "num_of_reviews": number,
    "book": Book
    "is_available_to_purchase": boolean,
    "is_purchased_by_current_user": boolean,
    "is_added_to_cart_by_current_user": boolean
}

export interface Book {
    "type": string,
    "id": number,
    "title": string,
    "description": string,
    "image_url": string,
    "num_of_pages": number,
    "num_of_chapters": number,
    "product_id": number,
    "created_at": string,
    "updated_at": string
}