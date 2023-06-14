import { Component, OnInit } from '@angular/core';
import { SelectProduct,ProductBuyerBids, Product, BuyerBids } from '../data-type';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public productList:undefined | SelectProduct[];
  //public productBids:undefined | ProductBuyerBids;
  public productData: undefined | Product;
  public buyerBids:undefined | BuyerBids[];
  productOptionId:any;

  constructor(private productService : ProductServiceService) {
  
}

  ngOnInit(): void {
   this.productService.getproducts().subscribe((result)=>{
     console.log(result);
     this.productList = result;
   });
  }

  
 FillProductDetails()
  {
    console.log("selProductId new::::"+this.productOptionId);
   this.productService.getProductBids(this.productOptionId).subscribe((result)=>{
     console.log("bids:"+result);
    this.productData = result.product;
    this.buyerBids = result.buyerBids;
    });
  }

 
}
