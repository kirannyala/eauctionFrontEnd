export interface SelectProduct{
    productName:string,
    productId:string,

}  

export interface Product{
    productName:string,
	shortDesc:string,
	detailedDesc:string,
	category:string,
	startingPrice:string,
	bidEndDate:string

} 

export interface BuyerBids{
    productId:string,
	buyerBidAmount:string,
	buyerfirstName:string,
	buyerEmail:string,
	buyerPhone:string
}  

export interface ProductBuyerBids {
    product:Product,
    buyerBids:undefined|BuyerBids[]
}