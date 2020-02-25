<script>

var BlueShirtName = $('#BlueShirt>p').text();
var RaybanName = $('#Rayban>p').text();
var BlackDressName = $('#BlackDress>p').text();
var BlackDress2Name = $('#BlueDress2>p').text();
var BlueTshirtName = $('#BlueTshirt>p').text();
var WhiteTshirtName = $('#WhiteTshirt>p').text();
var BlueShirtprice = $('#BlueShirt>h2').text();
var RaybanPrice = $('#Rayban>h2').text();
var BlackDressPrice = $('#BlackDress>h2').text();
var BlackDress2Price = $('#BlueDress2>h2').text();
var BlueTshirtPrice = $('#BlueTshirt>h2').text();
var WhiteTshirtPrice = $('#WhiteTshirt>h2').text();

dataLayer.push({
  'ecommerce': {
    'currencyCode': 'INR',                       // Local currency is optional.
    'impressions': [
     {
       'name': BlueShirtName,       // Name or ID is required.
       'id': '1',
       'price': BlueShirtprice,
       'brand': 'eshopper',
       'category': 'Apparel',
       'variant': 'Blue',
       'list': 'Products',
       'position': 1
     },
     {
       'name': RaybanName,       // Name or ID is required.
       'id': '2',
       'price': RaybanPrice,
       'brand': 'eshopper',
       'category': 'Accessories',
       'variant': 'Black',
       'list': 'Products',
       'position': 2
     },
     {
       'name': BlackDressName,       // Name or ID is required.
       'id': '3',
       'price': BlackDressPrice,
       'brand': 'eshopper',
       'category': 'Apparel',
       'variant': 'Black',
       'list': 'Products',
       'position': 3
     },
     {
       'name': BlackDress2Name,       // Name or ID is required.
       'id': '4',
       'price': BlackDress2Price,
       'brand': 'eshopper',
       'category': 'Apparel',
       'variant': 'Black',
       'list': 'Products',
       'position': 4
     },
     {
       'name': BlueTshirtName,       // Name or ID is required.
       'id': '5',
       'price': BlueTshirtPrice,
       'brand': 'eshopper',
       'category': 'Apparel',
       'variant': 'Blue',
       'list': 'Products',
       'position': 5
     },
     {
       'name': WhiteTshirtName,
       'id': '6',
       'price': WhiteTshirtPrice,
       'brand': 'eshopper',
       'category': 'Apparel',
       'variant': 'White',
       'list': 'Products',
       'position': 6
     }]
  }
});
</script>