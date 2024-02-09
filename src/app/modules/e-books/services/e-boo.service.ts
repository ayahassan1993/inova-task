
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EBookService {
    constructor(private httpClient: HttpClient) { }

    getBooks(productType: string, subProductType: string) {
        return this.httpClient.get(`storefront/products?filter[product_type]=${productType}&filter[sub_product_type]=${subProductType}`)
            .pipe(map((response: any) => response.data))
    }

    getBookDetails(id: number) {
        return this.httpClient.get(`storefront/products/${id}`).pipe(map((response: any) => response.data))
    }


}