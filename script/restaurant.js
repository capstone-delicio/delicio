const restaurant = [
  {
    //1
    name: 'STK Steakhouse',
    street: '1114 6th Ave',
    city: 'New York',
    state: 'NY',
    zip: 10036,
    phone_number: 6466242455,
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
    state: 'NY',
    zip: 10023,
    phone_number: 2128778684,
    email: 'tavern@gmail.com',
    password: 'tavern123',
    open_time: '11:00',
    close_time: '21:00',
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
    state: 'NY',
    zip: 10024,
    phone_number: 2128732466,
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
    state: 'NY',
    zip: 11354,
    phone_number: 3475423653,
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
    state: 'NY',
    zip: 11372,
    phone_number: 9292685691,
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
    state: 'NY',
    zip: 10007,
    phone_number: 2125772775,
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
    state: 'NY',
    zip: 10019,
    phone_number: 2125107714,
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
    state: 'NY',
    zip: 11354,
    phone_number: 7184453352,
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
    state: 'NY',
    zip: 10023,
    phone_number: 2128737411,
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
    state: 'NY',
    zip: 10018,
    phone_number: 2125862675,
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
    state: 'NY',
    zip: 10003,
    phone_number: 2128881093,
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
    state: 'NY',
    zip: 10016,
    phone_number: 2126832200,
    email: 'dons@gmail.com',
    password: 'dons123',
    open_time: '11:30am',
    close_time: '10:00pm',
    description:
      'Dons Bogam is a Korean BBQ restauarant where delivers enjoyable and superb quality of upscale korean food to various gourmet and New Yorkers.',
    price_range: '$$$',
    website_Url: 'donsbogam.com',
    opentableUrl:
      'https://www.opentable.com/dons-bogam-bbq-and-wine-bar?corrid=d8bcd8d7-1565-4da3-93ae-aa7a6acff416&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/23668609.jpg',
  },
  {
    //13
    name: 'Gaonnuri',
    street: '1250 Broadway 39th Floor',
    city: 'New York',
    state: 'NY',
    zip: 10001,
    phone_number: 2129719045,
    email: 'gaonnuri@gmail.com',
    password: 'gaonnuri123',
    open_time: '17:30',
    close_time: '23:30',
    description:
      'The name GAONNURI represents our placement in what we believe is the center of the world, both physically and figuratively.',
    price_range: '$$$$',
    website_Url: 'https://www.gaonnurinyc.com/',
    opentableUrl:
      'https://www.opentable.com/gaonnuri?corrid=d8bcd8d7-1565-4da3-93ae-aa7a6acff416&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/26038913.jpg',
  },
  {
    name: '',
    street: '',
    city: 'New York',
    state: 'NY',
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
    state: 'NY',
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
    name: 'Momosan Wynwood',
    street: '415 NW 26th St',
    city: 'Miami',
    state: 'FL',
    zip: 33127,
    phone_number: 3058518450,
    email: 'MomosanWynwood@gmail.com',
    password: '123',
    open_time: '5:30pm',
    close_time: '11:00pm',
    description:
      'Bar/Lounge, Beer, Cocktails, Corkage Fee, Delivery, Full Bar, Gender Neutral Restroom, Gluten-free Options, Non-Smoking, Takeout, Vegan, Weekend Brunch, Wheelchair Access, Wine',
    price_range: '$$',
    website_Url: 'http://www.momosanwynwood.com/',
    opentableUrl:
      'https://www.opentable.com/r/momosan-wynwood-miami?corrid=a657feda-ff9c-4bc2-a327-0a5064468df5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/41969165.jpg',
  },
  {
    name: 'Cecconis Miami Beach',
    street: '4385 Collins Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33140,
    phone_number: 7865077902,
    email: 'Miamibeach@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '11pm',
    description:
      "Cecconi's has become a critically acclaimed dining destination featuring simply prepared Venetian inspired food and offers an elegant and relaxed dining experience to enjoy the cuisine of celebrated executive chef Sergio Sigala.",
    price_range: '$$$',
    website_Url:
      'https://www.cecconismiamibeach.com/?utm_source=google&utm_medium=organic&utm_campaign=googlemybusiness',
    opentableUrl:
      'https://www.opentable.com/r/cecconis-miami-beach-miami-beach?corrid=a657feda-ff9c-4bc2-a327-0a5064468df5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://www.cecconismiamibeach.com/system/files/112017/5a1c8361ebeeb50173000002/full_bleed/Copyright_Soho_House_Beach_House_Miami_201710_DB_LR_025.jpg?1511818541',
  },
  {
    name: 'STK Steakhouse',
    street: '2305 Collins Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3056046988,
    email: 'stksteakhouse.com',
    password: '123',
    open_time: '3pm',
    close_time: '12am',
    description:
      'STK Miami is located in the heart of Miami Beach, bringing the pulse of New York to the rhythm of South Beach.',
    price_range: '$$$',
    website_Url: 'https://stksteakhouse.com/venues/south-beach/',
    opentableUrl:
      'https://www.opentable.com/r/stk-miami-beach-miami?corrid=a657feda-ff9c-4bc2-a327-0a5064468df5&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/29541931.jpg',
  },
  {
    name: 'Blue Ribbon Sushi Bar & Grill - South Beach',
    street: 'The Plymouth Hotel, 336 21st St',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3058000404,
    email: 'Blueribbon@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Blue Ribbon Sushi Bar & Grill is nestled in the historic and newly restored Plymouth Hotel in the burgeoning Mid-Beach district, just 3 blocks from the beach. The restaurant includes a spacious cocktail bar, sushi bar, indoor dining rooms and an outdoor patio area by the poolside.',
    price_range: '$$',
    website_Url: 'https://www.eatblueribbonmiami.com/',
    opentableUrl:
      'https://www.opentable.com/r/blue-ribbon-sushi-bar-and-grill-south-beach-miami?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/djfiehqv/aea41e4b-4609-4c08-b8d7-6558b01acc63.jpeg',
  },
  {
    name: 'Orange Blossom',
    street: '2000 Collins Ave #7',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 7867417128,
    email: 'Orangeblossom@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Orange Blossom pays tribute to this legacy by creating a warm and inviting social space, a neighborhood gathering spot, where our market-to-table, New American cuisine is highlighted by our specialty craft cocktails. ',
    price_range: '$$',
    website_Url: 'orangeblossommiami.com',
    opentableUrl:
      'https://www.opentable.com/orange-blossom?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/3/41523500.jpg',
  },
  {
    name: 'The Social Club - Surfcomber South Beach',
    street: '1717 Collins Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3056041800,
    email: 'Socialclub@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Your Social Club dining experience includes locally loved, American-inspired, fare in the form of social plates, large plates and dessert—all with a creative twist.',
    price_range: '$$',
    website_Url: 'ocialclubatsurfcomber.com',
    opentableUrl:
      'https://www.opentable.com/the-social-club-surfcomber-south-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/2/46964116.jpg',
  },
  {
    name: 'Layla',
    street: ' 2216 Park Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 8444631215,
    email: 'Laylamiami@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'A refreshingly inviting, communal and upbeat restaurant set on the serene Collins Canal.',
    price_range: '$$$',
    website_Url: 'https://www.kayakmb.com/restaurant/layla',
    opentableUrl:
      'https://www.opentable.com/r/layla-miami-beach1?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/2/41917523.jpg',
  },
  {
    name: 'Meet Dalia',
    street: '640 Ocean Dr',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3056046988,
    email: 'Meetdalia@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Simple and elegant, Meet Dalia will apply a modern approach to classic plates, delighting guests with laidback sophistication; where city meets ocean. ',
    price_range: '$$$',
    website_Url: 'https://meetdaliamiami.com/',
    opentableUrl:
      'https://www.opentable.com/r/dalia-miami-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/3/42788913.jpg',
  },
  {
    name: 'Sola Miami Beach',
    street: '1000 Collins Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3057093955,
    email: 'Solamiami@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Sola is very Famous for Brunch and Dinner any day of the week. They offer you an exhaustive New American Cuisine with a Latin Twist.',
    price_range: '$$$',
    website_Url: 'https://www.solamiami.com/',
    opentableUrl:
      'https://www.opentable.com/r/sola-miami-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/3/28779474.jpg',
  },
  {
    name: 'Fiola Miami',
    street: '1500 San Ignacio Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3059122639,
    email: 'Fiolamiami@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      "Fiola Miami brings the cuisine and culture of Italy to Coral Gables, 'The City Beautiful'. Recognized as one of the best fine-dining Italian restaurants in South Florida, Fiola Miami is Fabio Trabocchi's first restaurant venture outside of Washington D.C. ",
    price_range: '$$$$',
    website_Url: 'fiolamiami.com',
    opentableUrl:
      'https://www.opentable.com/r/fiola-miami-coral-gables?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/3/48047014.jpg',
  },
  {
    name: 'Limonada Bar + Brunch',
    street: '825 Washington Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3055264592,
    email: 'Limonadabar@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Limonada Bar + Brunch is the ultimate restaurant and sports bar experience to have Fun in Miami Beach.',
    price_range: '$$',
    website_Url: 'limonadasouthbeach.com',
    opentableUrl:
      'https://www.opentable.com/r/limonada-bar-and-brunch-miami-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/2/41857461.jpg',
  },
  {
    name: 'Azabu Miami Beach',
    street: '161 Ocean Dr,',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 7862760520,
    email: 'Azabu@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      "Reservations for the Omakase sushi counter, The Den, are taken by Opentable 'the Den' account, phone or Azabu Miami Beach website.",
    price_range: '$$$',
    website_Url: 'azabuglobal.com',
    opentableUrl:
      'https://www.opentable.com/r/azabu-miami-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/2/25283315.png',
  },
  {
    name: 'Como Como - Marisqueria',
    street: '919 Washington Ave',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 3054238004,
    email: 'ComoComo@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      'Voted best seafood restaurant in Miami by Miami New Times, Best of Miami 2021.',
    price_range: '$$$$',
    website_Url: 'comocomomiami.com',
    opentableUrl:
      'https://www.opentable.com/r/como-como-marisqueria-miami-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/2/42010733.jpg',
  },
  {
    name: 'Petralunga',
    street: '7601 E Treasure Dr Unit Cu-21',
    city: 'North Bay Village',
    state: 'FL',
    zip: 33141,
    phone_number: 3053978676,
    email: 'Petralunga@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      "Petralunga is an Italian brand specialized in Contemporary Pizza Gourmet, Mediterranean cuisine and Cocktail. Founded from Italian's Restaurateurs, finally this concept landed in Miami. ",
    price_range: '$$$',
    website_Url: 'https://petralunga.com/',
    opentableUrl:
      'https://www.opentable.com/r/petralunga-north-bay-village?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/wide-huge/1/41849268.jpg',
  },
  {
    name: "Lolo's Surf Cantina",
    street: '161 Ocean Dr',
    city: 'Miami Beach',
    state: 'FL',
    zip: 33139,
    phone_number: 7862760535,
    email: 'Lolosurf@gmail.com',
    password: '123',
    open_time: '11am',
    close_time: '12am',
    description:
      "For those who want to escape life's daily woes and return to a place where rolling waves meet crystal clear skies, there is Lolo's Surf Cantina.",
    price_range: '$$$',
    website_Url: 'https://loloscantina.com/',
    opentableUrl:
      'https://www.opentable.com/r/lolos-surf-cantina-miami-beach?corrid=6b1adac9-610f-4900-98d3-580155e8d0f2&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2022-05-05T19%3A00%3A00',
    profile_picUrl:
      'https://resizer.otstatic.com/v2/photos/xlarge/1/25197462.jpg',
  },
]
module.exports = restaurant
