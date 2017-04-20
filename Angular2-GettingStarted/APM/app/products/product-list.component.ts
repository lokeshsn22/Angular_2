import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
                  
})

export class ProductListComponent {
    pageTitle: String = "Product Listing";
    imageWidth: number =50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'lokesh';
        products : any[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "data:image/jpeg;base64,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"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "data:image/jpeg;base64,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"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW69ixSaT76Q98oeHX0_I4qmOyyFXeMi2qR3e3gsgizbQSOj61"
        },
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT231XIDfkFJR3YrbD8w2w-BDR9mV7-tOYlTLhXJ7byUrhn4xLvWQ"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwVNQDxHXlK9OqfkxyMy4KbreyAE2HEW6GeqwgWeREeJO3viBOQ"
        }
    ];

    toggleImage() :void {
        this.showImage = !this.showImage;
    }
}