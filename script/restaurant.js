const restaurant = [
  {
    //1
    name: 'STK Steakhouse',
    street: '1114 6th Ave',
    city: 'New York',
    state: 'New York',
    zip: '10036',
    phone_number: '646-624-2455',
    email: 'stk@gmail.com',
    password: 'stk123',
    open_time: '3:00pm',
    close_time: '11:00pm',
    description:
      'STK artfully blends two concepts into one—the modern steakhouse and a chic lounge.',
    price_range: '$$$',
    website_Url: 'https://stksteakhouse.com/venues/nyc-midtown/',
    opentableUrl:
      'https://www.opentable.com/r/stk-nyc-midtown-new-york?corrid=4d42b84c-8093-4d74-be2a-4221aadc2b10&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/23692732.jpg',
  },
  {
    //2
    name: 'Tavern on the Green',
    street: '67th Street & Central Park West',
    city: 'New York',
    state: 'New York',
    zip: '10023',
    phone_number: '212-877-8684',
    email: 'tavern@gmail.com',
    password: 'tavern123',
    open_time: '11:00am',
    close_time: '9:00pm',
    description: 'AN ICONIC, LANDMARK RESTAURANT, UNLIKE ANY OTHER',
    price_range: '$$',
    website_Url: 'https://www.tavernonthegreen.com/',
    opentableUrl:
      'https://www.opentable.com/tavern-on-the-green?corrid=f9efee77-9c3b-481d-97ee-ace465b8c34a&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/24718130.jpg',
  },
  {
    //3
    name: 'Dagon',
    street: '2454 Broadway',
    city: 'New York',
    state: 'New York',
    zip: '10024',
    phone_number: '212-873-2466',
    email: 'dagon@gmail.com',
    password: 'dagon123',
    open_time: '11:30am',
    close_time: '11:00pm',
    description:
      'Dagon is an exciting restaurant on Manhattan Upper West Side that features cuisine from somewhere in the Mediterranean.',
    price_range: '$$',
    website_Url: 'dagonnyc.com',
    opentableUrl:
      'https://www.opentable.com/r/dagon-new-york?corrid=16fb2b55-8225-4267-86c7-d9957849da0d&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/2/39311345.jpg',
  },
  {
    //4
    name: 'Gyu-Kaku',
    street: '40-52 Main St',
    city: 'New York',
    state: 'New York',
    zip: '11354',
    phone_number: '347-542-3653',
    email: 'gyukaku@gmail.com',
    password: 'Gyukaku123',
    open_time: '11:30am',
    close_time: '10:00pm',
    description: 'Yakiniku has the magic to make people happy!',
    price_range: '$$',
    website_Url: 'https://www.gyu-kaku.com/flushing/',
    opentableUrl:
      'https://www.opentable.com/r/gyu-kaku-flushing?corrid=cb775209-890e-4b7e-8848-267108fa85b5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://www.gyu-kaku.com/wp-content/uploads/2017/10/flushing-interior-v3-2048x1536.jpg',
  },
  {
    //5
    name: 'Sushi On Me',
    street: '71-26 Roosevelt Ave',
    city: 'New York',
    state: 'New York',
    zip: '11372',
    phone_number: '',
    email: 'sushionme@gmail.com',
    password: 'sushionme123',
    open_time: '5:00pm',
    close_time: '10:00pm',
    description:
      'Sushi On Me is a secret hideout where customers can enjoy premium omakase in a speakeasy vibe. ',
    price_range: '$$$$',
    website_Url: 'https://www.yelp.com/biz/sushi-on-me-jackson-heights',
    opentableUrl:
      'https://www.opentable.com/r/sushi-on-me-jackson-heights?corrid=4bc63e74-8400-4344-a4b9-e044e052e606&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/42420926.jpg',
  },
  {
    //6
    name: 'Gran Morsi',
    street: '22 Warren St',
    city: 'New York',
    state: 'New York',
    zip: '10007',
    phone_number: '212-577-2775',
    email: 'grandmorsi@gmail.com',
    password: 'grandmorsi123',
    open_time: '5:00pm',
    close_time: '10:30pm',
    description:
      'Gran Morsi, a Modern Italian Tribeca Restaurant Eatery, with a strong focus on small and shared plates. ',
    price_range: '$$$',
    website_Url: 'https://www.granmorsi.com/',
    opentableUrl:
      'https://www.opentable.com/r/gran-morsi-new-york?corrid=95a5e0af-317f-4aba-a0ad-a04d69375233&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/24901519.jpg',
  },
  {
    //7
    name: 'La Grande Boucherie',
    street: '145 W 53rd St',
    city: 'New York',
    state: 'New York',
    zip: '10019',
    phone_number: '212-510-7714',
    email: 'boucherie@gmail.com',
    password: 'boucherie123',
    open_time: '10:00am',
    close_time: '11:00pm',
    description:
      'La Grande Boucherie aims to become a Parisian square in Midtown and one of the most authentically French dining destinations ',
    price_range: '$$$$',
    website_Url:
      'https://boucherie.nyc/la-grande-boucherie-midtown-manhattan-nyc/',
    opentableUrl:
      'https://www.opentable.com/r/la-grande-boucherie-new-york?corrid=18dc01fd-b03f-4a0e-ab22-7b60e9923af8&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/2/32477871.jpg',
  },
  {
    //8
    name: 'Magna Restaurant',
    street: '35-25 Farrington St,',
    city: 'New York',
    state: 'New York',
    zip: '11354',
    phone_number: '718-445-3352',
    email: 'magna@gmail.com',
    password: 'magna123',
    open_time: '12:00pm',
    close_time: '10:00pm',
    description:
      'A true taste of Italy is tucked away just around the corner from Northern Blvd and 35 Avenue.',
    price_range: '$$',
    website_Url: 'https://www.magnarestaurant.com/',
    opentableUrl:
      'https://www.opentable.com/magna-restaurant?corrid=216c97cc-f8a4-4296-929b-9160f79e8fc9&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://fastly.4sqi.net/img/general/width960/399431197_JkY1dZjuqPV-5tzacj3XcHqMT8w8dcH6DZ9bbnr-30A.jpg',
  },
  {
    //9
    name: 'Cafe Luxembourg',
    street: '200 W 70th St',
    city: 'New York',
    state: 'New York',
    zip: '10023',
    phone_number: '212-873-7411',
    email: 'luxembourg@gmail.com',
    password: 'luxembourg123',
    open_time: '10:00am',
    close_time: '10:00pm',
    description:
      'Cafe Luxembourg is offering reservations for indoor and outdoor dining. ',
    price_range: '$$$$',
    website_Url: 'https://cafeluxembourg.com/',
    opentableUrl:
      'https://www.opentable.com/cafe-luxembourg?corrid=f986d279-dc4c-4cda-be01-15e47e89ff57&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://images.squarespace-cdn.com/content/v1/51f32317e4b0db872bc40dc7/1615132749981-BLPN1OQRH1W59SNR90MD/image-asset.jpeg?format=500w',
  },
  {
    //10
    name: 'Sei Less',
    street: '156 W 38th St',
    city: 'New York',
    state: 'New York',
    zip: '10018',
    phone_number: '212-586-2675',
    email: 'seiless@gmail.com',
    password: 'seiless123',
    open_time: '5:00pm',
    close_time: '12:00am',
    description: 'NYC Speakeasy, Asian Fusion, Bar, Lounge and Event Space.',
    price_range: '$$$',
    website_Url: 'https://www.seiless.com',
    opentableUrl:
      'https://www.opentable.com/r/sei-less-new-york?corrid=cb775209-890e-4b7e-8848-267108fa85b5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/2/47121785.jpg',
  },
  {
    //11
    name: 'Cathédrale',
    street: '112 East 11th St',
    city: 'New York',
    state: 'New York',
    zip: '10003',
    phone_number: '212-888-1093',
    email: 'cathedrale@gmail.com',
    password: 'cathedrale123',
    open_time: '5:00pm',
    close_time: '12:00pm',
    description:
      'French-Mediterranean restaurant with a show-stopping main dining room featuring a soaring ceiling, an open kitchen, and an outdoor dining terrace.',
    price_range: '$$$',
    website_Url: 'https://moxyeastvillage.com/cathedrale/',
    opentableUrl:
      'https://www.opentable.com/r/cathedrale-new-york?corrid=90b56248-c06f-4459-bf50-0d9ee7c2205f&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/2/42663956.jpg',
  },
  {
    //12
    name: 'Dons Bogam BBQ & Wine Bar',
    street: '17 E 32nd St',
    city: 'New York',
    state: 'New York',
    zip: '10016',
    phone_number: '212-683-2200',
    email: 'dons@gmail.com',
    password: 'dons123',
    open_time: '11:30am',
    close_time: '10:00pm',
    description:
      'Dons Bogam is a Korean BBQ restauarant where delivers enjoyable and superb quality of upscale korean food to various gourmet and New Yorkers.',
    price_range: '$$$',
    website_Url: 'donsbogam.com',
    opentableUrl: '',
    profile_picUrl: '',
  },
  {
    name: '',
    street: '',
    city: 'New York',
    state: 'New York',
    zip: '',
    phone_number: '',
    email: '',
    password: '',
    open_time: '',
    close_time: '',
    description: '',
    price_range: '',
    website_Url: '',
    opentableUrl: '',
    profile_picUrl: '',
  },
  {
    name: '',
    street: '',
    city: 'New York',
    state: 'New York',
    zip: '',
    phone_number: '',
    email: '',
    password: '',
    open_time: '',
    close_time: '',
    description: '',
    price_range: '',
    website_Url: '',
    opentableUrl: '',
    profile_picUrl: '',
  },
  {
    name: '',
    street: '',
    city: 'New York',
    state: 'New York',
    zip: '',
    phone_number: '',
    email: '',
    password: '',
    open_time: '',
    close_time: '',
    description: '',
    price_range: '',
    website_Url: '',
    opentableUrl: '',
    profile_picUrl: '',
  },
]
module.export = restaurant
