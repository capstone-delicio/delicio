const restaurant_pics = [
  {
    restaurant_id: 1,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/2/47150903.jpg',
    description: 'Signature Steak',
  },
  {
    restaurant_id: 1,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/2/47150905.jpg',
    description: '',
  },
  {
    restaurant_id: 1,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/29541951.jpg',
    description: '',
  },
  {
    restaurant_id: 2,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/24930452.jpg',
    description: 'Best Salmon ever',
  },
  {
    restaurant_id: 2,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25005729.jpg',
    description: 'Taste of Hawaii',
  },
  {
    restaurant_id: 2,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/24952322.jpg',
    description: "Chef's special baked shrimp",
  },
  {
    restaurant_id: 3,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/41709777.jpg',
    description: 'Dessert',
  },
  {
    restaurant_id: 3,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/41710618.jpg',
    description: 'Soup',
  },
  {
    restaurant_id: 3,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/42082565.jpg',
    description: 'Fish',
  },
  {
    restaurant_id: 4,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/24982583.jpg',
    description: 'Cook on table top',
  },
  {
    restaurant_id: 4,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25275089.jpg',
    description: 'Shrimp cook on table top',
  },
  {
    restaurant_id: 4,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25275094.jpg',
    description: 'Dessert smore',
  },
  {
    restaurant_id: 5,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/2/42411144.jpg',
    description: 'Stunning visual of sushi',
  },
  {
    restaurant_id: 5,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/42420941.jpg',
    description: 'Salmon to perfection',
  },
  {
    restaurant_id: 5,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/2/42411146.jpg',
    description: 'sashimi in soy sauce bath',
  },
  {
    restaurant_id: 6,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/24901515.jpg',
    description: 'Mouthwatering meatballs spaghetti',
  },
  {
    restaurant_id: 6,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25032916.jpg',
    description: 'Grilled Octopus with ancho lemon sauce',
  },
  {
    restaurant_id: 6,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/3/26432031.jpg',
    description: "S'mores Cocktail",
  },
  {
    restaurant_id: 7,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/32557498.jpg',
    description: 'Juicy Filet',
  },
  {
    restaurant_id: 7,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/32557501.jpg',
    description: 'cheesy platter',
  },
  {
    restaurant_id: 7,
    pictureUrl: 'https://boucherie.nyc/wp-content/uploads/2021/02/0S7A3637.jpg',
    description: 'Filet Au poivre',
  },
  {
    restaurant_id: 8,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/1/23895106.jpg',
    description: 'Great Pasta',
  },
  {
    restaurant_id: 8,
    pictureUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/UVHQkjtvSP-kibzeSYxxOQ/o.jpg',
    description: 'Fried Calamari',
  },
  {
    restaurant_id: 8,
    pictureUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/wF7YbtVVX7yPpUYqqSTqLA/o.jpg',
    description: 'Penne Alla Vodka',
  },
  {
    restaurant_id: 9,
    pictureUrl:
      'https://images.squarespace-cdn.com/content/v1/51f32317e4b0db872bc40dc7/1615569573511-3AB4ONESH9I9QRPNUYQ8/image-asset.jpeg?format=500w',
    description: 'Salade Niçoise',
  },
  {
    restaurant_id: 9,
    pictureUrl:
      'https://images.squarespace-cdn.com/content/v1/51f32317e4b0db872bc40dc7/1615400601957-N9U7VE56T8F472R07CRL/image-asset.jpeg?format=500w',
    description: 'Lemon Tart',
  },
  {
    restaurant_id: 9,
    pictureUrl:
      'https://images.squarespace-cdn.com/content/v1/51f32317e4b0db872bc40dc7/1615241613185-82U310VX7X1BCD6A8QHO/image-asset.jpeg?format=500w',
    description: 'Savory Bread with chicken',
  },
  {
    restaurant_id: 10,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/2/47121783.jpg',
    description: 'Mouthwatering Chicken Drumpsticks',
  },
  {
    restaurant_id: 10,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/3/47121786.jpg',
    description: 'Wontons in Sweet Savory Sauce',
  },
  {
    restaurant_id: 10,
    pictureUrl: 'https://resizer.otstatic.com/v2/photos/xlarge/2/47121790.jpg',
    description: 'Ribs in special sauce',
  },
  {
    restaurant_id: 11,
    pictureUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/O3ftAPr5DWsUWDUIGpyQig/o.jpg',
    description: 'Grilled Lamb Chop',
  },
  {
    restaurant_id: 11,
    pictureUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/B0G7xNE3cELQWpjawlQ6Eg/o.jpg',
    description: 'Yellowfin Tuna Cru',
  },
  {
    restaurant_id: 11,
    pictureUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/cL4MKKeH3Ttw6cRgajA-3w/o.jpg',
    description: 'Hamachi Crudo',
  },
  {
    restaurant_id: 12,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 12,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 12,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 13,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 13,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 13,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 14,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 14,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 14,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 15,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 15,
    pictureUrl: '',
    description: '',
  },
  {
    restaurant_id: 15,
    pictureUrl: '',
    description: '',
  },
]
module.export = restaurant_pics
