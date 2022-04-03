let bestsellers = [
  {image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/213937/good-vibes-brightening-face-scrub-pomegranate-50-g_9_display_1624425926_dd71e76c.jpg" ,
  name : "Good Vibes Pomegranate Brightening Face Scrub | Anti-Ageing, Sun Protection | With Almond Oil | No Parabens, No Sulphate, No Mineral Oil (50 g)",
  price: "164"} ,
  {image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/244048/good-vibes-under-eye-serum-cucumber-and-lemon-10-ml-1_8_display_1622806155_c2ed0a8b.jpg",
  name: "Good Vibes Cucumber & Lemon Under Eye Serum | Anti-Ageing, Rejuvenating, Brightening | No Sulphates, No Parabens, No Animal Testing (10 ml)",
  price : "202"} ,
  {image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/233405/good-vibes-natural-glow-facial-kit-gold-40-g-1_3_display_1626410399_945d6940.jpg",
  name: "Good Vibes Gold Natural Glow Facial Kit | Glowing, Anti-Ageing | No Parabens, No Animal Testing (40 gm)",
  price : "195"} ,
  {image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/267298/good-vibes-dark-circle-reducer-under-eye-patch-seaweed-and-green-tea-20-ml_1_display_1644303044_d72c4788.jpg",
  name: "Good Vibes Seaweed & Green Tea Dark Circle Reducer Under Eye Patch | Anti-Ageing, Hydrating | Vegan, No Parabens, No Sulphates, No Mineral Oil, No Animal Testing",
  price : "251"} ,
  {image:"https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/235029/good-vibes-100-percentage-pure-tea-tree-essential-oil-10-ml-1_9_display_1625214167_2b50ea01.jpg",
  name: "Good Vibes 100% Pure Tea Tree Essential Oil(10 ml)",
  price : "206"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/245165/good-vibes-nourishing-night-cream-wheatgerm-50-g_8_display_1621054527_83113ff9.jpg",
  name : "Good Vibes Wheatgerm Nourishing Night Cream | Anti-Inflammatory, Heals Scars | With Almond Oil | Np Parabens, No Sulphates, No Mineral Oil (50 g)",
  price : "191"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/215458/good-vibes-deep-moisturizing-body-lotion-shea-butter-200-ml-1_7_display_1621054118_a56d7f74.jpg",
  name : "Good Vibes Shea Butter Deep Moisturizing Body Lotion |Hydrating, Moisturizing | No Parabens, No Sulphates, No Animal Testing (200 ml)",
  price : "176"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/273541/good-vibes-onion-hair-fall-control-hair-oil-100-ml_9_display_1624889867_2f298059.jpg",
  name : "Good Vibes Onion Hairfall Control Hair Oil | Strengthening | Hair Growth | No Parabens, No Sulphates, No Mineral Oil, No Animal Testing (100 ml)",
  price : "231"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/251292/good-vibes-vitamin-c-glow-foaming-face-wash-with-deep-cleansing-brush-150-ml_1_display_1633954933_20a0f40c.jpg",
  name : "Good Vibes Vitamin C Glow Foaming Face Wash With Deep Cleansing Brush | Face Cleanser | Non-Drying, Brightening, Clear Skin | No Parabens, No Sulphates, No Animal Testing (150 ml)",
  price : "279"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/267303/good-vibes-radiant-glow-face-serum-rose-hip-10-ml-1_9_display_1622726784_d6d13626.jpg",
  name : "Good Vibes Rosehip Radiant Glow Face Serum | Light, Non-Sticky, Brightening | With Vitamin E | No Parabens, No Sulphates, No Animal Testing (10 ml)",
  price : "173"}
]

  localStorage.setItem("bestsellers" , JSON.stringify(bestsellers))
  

let shop_by_category = [
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479348_toner.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479344__face-serum.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479345_deodrants.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479346_face-packs.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479347_sheet-masks.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479349_under-eye-care.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479347_face-wash.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648534556_sunscreens.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648534558_bath-essentials.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648479346_face-cream.jpg"} 
]    

  localStorage.setItem("shop-by_category" , JSON.stringify(shop_by_category))


let shop_by_ingredients = [
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/267299/good-vibes-wrinkle-and-puffiness-reducer-under-eye-patch-cucumber-and-lemon-20-ml_1_display_1644302555_70b0e531.jpg" ,
  name : "Good Vibes Cucumber & Lemon Wrinkle & Puffiness Reduction Under Eye Patch | Lightening | Vegan, No Parabens, No Sulphates, No Mineral Oil, No Animal Testing" ,
  price : "251"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/265636/good-vibes-skin-firming-toner-and-moisturiser-milk-and-oats-120-ml_11_display_1646396115_57cfcf93.jpg" ,
  name : "Good Vibes Milk & Oats Skin Firming Toner and Moisturizer | With Sesame Seed Oil, Almond | Hydrating, Nourishing | Vegan, No Alcohol, No Parabens, No Sulphates, No Mineral Oil, No Animal Testing (120 ml)" ,
  price : "176"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/265923/good-vibes-activated-charcoal-deep-cleansing-foaming-face-wash-150-ml_1_display_1642683447_3a553e7e.jpg" ,
  name : "Good Vibes Activated Charcoal Deep Cleansing Foaming Face Wash | With Cucumber & Lemon | Detoxifying, Purifying | Vegan, No Parabens, No Sulphates, No Mineral Oil, No Animal Testing (150 ml)" ,
  price : "163"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/266187/good-vibes-vitamin-c-glow-toner-200ml_1_display_1640343482_2fbc9d42.jpg" ,
  name : "Good Vibes Vitamin C Glow Toner (200ml)" ,
  price : "195"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/218834/good-vibes-hemp-seed-hydrating-face-serum-10-ml_1_display_1638523059_687b625c.jpg" ,
  name : "Good Vibes Hemp Seed Hydrating Face Serum | Moisturizing , Anti-Ageing | Vegan, No Parabens, No Sulphates, No Silicones, No Animal Testing (10 ml)" ,
  price : "184"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/218832/good-vibes-hemp-seed-hydrating-light-cream-50-gm_1_display_1637910412_8ecd28f5.jpg" ,
  name : "Good Vibes Hemp Seed Youth Rejuvenation & Hydration Light Face Cream | Anti Ageing, Moisturization, Anti-Oxidants | With Almond, Olive | No Parabens, No Sulphates, No Alcohol, No Mineral Oil, No Animal Testing, Vegan (50 g)" ,
  price : "234"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/276840/good-vibes-insta-glow-foaming-face-wash-with-deep-cleansing-brush-ubtan-150-ml_1_display_1647844767_4f1a9394.jpg" ,
  name : "Good Vibes Insta Glow Foaming Face Wash with Deep Cleansing Brush - Ubtan (150 ml)" ,
  price : "232"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/276841/good-vibes-nourishing-lip-mask-berry-12-gm_1_display_1648026827_6aad1843.jpg" ,
  name : "Good Vibes Berry Nourishing Lip Sleeping Mask | With Almond Oil | Moisturizing, Softening | Vegan, No Parabens , No Sulphates, No Mineral Oil, No Silicones, No Animal Testing (12 g)" ,
  price : "203"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/269182/good-vibes-brightening-deodorant-liquorice-50ml_1_display_1643892784_d53d0d8b.jpg" ,
  name : "Good Vibes Liquorice Brightening Deo Roll On | With Avocado & Olive Oil | Soothing, Odor Control | No Parabens, No Sulphates No Silicones, No Animal Testing, No Pthalate, No Alcohol" ,
  price : "231"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-New04_ZlRSreYl-t.png,ofo-top_right/static/img/product/274318/good-vibes-nourishing-sunscreen-spray-spf-50-carrot-100ml_1_display_1646381541_b43b3b94.jpg" ,
  name : "Good Vibes Carrot Nourishing Sunscreen Spray SPF 50 | Soothing, Hydrating, De-tanning | Vegan, No Parabens, No Mineral Oil, No Silicones, No Animal Testing" ,
  price : "349"} 
]    

localStorage.setItem("shop_by_ingredients" , JSON.stringify(shop_by_ingredients))




let shop_by_concerns = [
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541729_copy-of-brightening.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541735_copy-of-dry-skin.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541737_blackheads.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541720_hair-fall.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541722_signs-of-ageing.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541725_dandruff.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541727_oily-skin-1.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541738_acne-blemishes.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541731_dark-circle.jpg"} ,
  {image:"https://media6.ppl-media.com/tr:w-512,ar-100-139,c-at_max,pr-true/mediafiles/ecomm/misc/1648541733_dark-spots.jpg"} 
]

localStorage.setItem("shop_by_concerns" , JSON.stringify(shop_by_concerns))


let featured = [
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/248371/vaseline-intensive-care-cocoa-glow-body-lotion-400-ml-19_12_display_1631079173_e7da3483.jpg" ,
  name : "Vaseline Intensive Care Cocoa Glow Body Lotion (400 ml)" ,
  price : "279"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/245526/alps-goodness-papaya-vit-c-and-aha-glow-face-wash-100-ml_11_display_1641881627_2ff19b13.jpg" ,
  name : "Alps Goodness Vitamin C Glow Face Wash For Normal to Oily Skin with Papaya & AHA (100 ml)| Sulphate Free, Soap Free, Silicone Free, Paraben Free, Mineral Oil Free | Gentle Face Cleanser| Vitamin C Face Wash" ,
  price : "161"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/254414/vaseline-intensive-care-deep-moisture-body-lotion-600-ml-72_8_display_1631081940_484f3bc4.jpg" ,
  name : "Vaseline Intensive Care Deep Moisture Body Lotion (600 ml)" ,
  price : "349"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/266069/naturali-damage-repair-conditioner-80ml_9_display_1640148456_abdbb22d.jpg" ,
  name : "Naturali Damage Repair Conditioner | With Moringa Oil & Avocado | Revitalizes And Nourishes Damaged Hair | 80 Ml" ,
  price : "81"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/268347/dermdoc-2-percentage-salicylic-acid-body-acne-treatment-100-ml_1_display_1644560403_06ce5d0a.jpg" ,
  name : "Dermdoc 2% Salicylic Acid Body Acne Treatment (100 ml) | Back acne , Chest acne , Acne marks | Oily skin, Acne prone skin" ,
  price : "257"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/196621/tresemme-smooth-and-shine-shamppo-1-l_2_display_1609830609_37e1e2df.jpg" ,
  name : "Tresemme Smooth & Shine Shamppo (1 L)" ,
  price : "457"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right/static/img/product/266082/naturali-hairfall-arrest-shampoo-80ml_1_display_1640149400_f39c2c54.jpg" ,
  name : "Naturali Hairfall Arrest Shampoo | With Red Onion & Bhringraj | Reduces Hair Fall By Boosting Scalp Health | 80 Ml" ,
  price : "63"}
]

localStorage.setItem("featured" , JSON.stringify(featured))


let store = [
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220712_01.skin.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220712_02.makeup.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220713_03hair.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220720_04.luxury-store.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220737_06appliances-store.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220745_07.fragrance-store.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648220727_05.wellness.jpg"} ,
  {image : "https://media6.ppl-media.com/tr:w-457,ar-3-4,c-at_max,pr-true/mediafiles/ecomm/misc/1648221718_08.hygiene.jpg"} 
]

localStorage.setItem("store" , JSON.stringify(store))


let top_picks_for_you = [
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/245153/good-vibes-wide-spectrum-sunscreen-with-spf-50-100-g-22_5_display_1626676230_299d32ba.jpg",
  name : "Good Vibes Wide Spectrum Protection Sunscreen with SPF 50 | Non-Greasy, Anti-Ageing | With Aloe Vera | No Parabens, No Animal Testing (100 g)",
  price : "308"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/277383/garnier-color-naturals-nourishing-permanent-hair-colour-cream-burgundy-3.16-18-38-19_11_display_1644475877_183af921.jpg",
  name : "Garnier Color Naturals Creme hair color, Shade 3.16 Burgundy (70 ml + 60 g)",
  price : "157"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/273272/blue-heaven-erase-and-enhance-full-coverage-concealer-pen-cream_1_display_1642054202_4844e988.jpg",
  name : "Blue Heaven Erase & Enhance Full Coverage Concealer Pen, Cream",
  price : "320"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/264739/streax-hair-potion-100-ml-37_2_display_1620295276_972dcf26.jpg",
  name : "Streax Hair Serum vitalised with Walnut Oil (100 ml)",
  price : "216"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/278556/maybelline-the-hyper-curl-volum-express-hypercurl-mascara-waterproof-001-17_3_display_1614247392_7412c2c1.jpg",
  name : "Maybelline New York Hypercurl Mascara Waterproof, Very Black (9.2 g)",
  price : "349"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/273264/blue-heaven-fresh-and-flawless-hydrating-skin-tint-vanilla_1_display_1642053980_d6680940.jpg",
  name : "Blue Heaven Fresh & Flawless Hydrating Skin Tint, Vanilla",
  price : "280"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/182554/maybelline-new-york-fit-me-matte-poreless-liquid-foundation-220-natural-beige-30-ml_11_display_1632144883_31707114.jpg",
  name : "Maybelline New York Fit Me Matte+Poreless Liquid Foundation (With Pump & SPF 22), 220 Natural Beige, 30ml",
  price : "412"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/209923/l-oreal-paris-magic-retouch-2-dark-brown-75-ml-20_2_display_1632143712_93365dfe.jpg",
  name : "L'Oreal Paris Magic Retouch 2 Dark Brown (75 ml)",
  price : "269"} ,
]

localStorage.setItem("top_picks_for_you" , JSON.stringify(top_picks_for_you))



let currently_trending = [
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/182497/maybelline-new-york-fit-me-matte-poreless-liquid-foundation-tube-115-ivory-18-ml_8_display_1610370201_a8313c45.jpg" ,
  name : "Maybelline New York Fit Me Matte+Poreless Liquid Foundation Tube - Ivory 115 (18 ml)" ,
  price : "239"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/182532/maybelline-new-york-colossal-bold-eyeliner-black-3-g_2_display_1629698834_3a72674a.jpg" ,
  name : "Maybelline New York Colossal Bold Eyeliner, Black, 3g" ,
  price : "199"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/213891/garnier-skin-naturals-micellar-cleansing-water-125-ml_1_display_1509612741_dbb9dc59.jpg" ,
  name : "Garnier Skin Naturals, Micellar Cleansing Water, 125ml" ,
  price : "139"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/264739/streax-hair-potion-100-ml-37_2_display_1620295276_972dcf26.jpg" ,
  name : "Streax Hair Serum vitalised with Walnut Oil (100 ml)" ,
  price : "216"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/203380/new-nivea-whitening-smooth-skin-roll-on-50-ml1_2_display_1557736874_1fa9174c.jpg" ,
  name : "NIVEA Deodorant Roll On Whitening Smooth Skin 50ml" ,
  price : "159"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/274448/garnier-color-naturals-natural-black-1-hair-color-20_7_display_1638437945_3c81579a.jpg" ,
  name : "Garnier Color Naturals Creme hair color, Shade 1 Natural Black, 70ml + 60g" ,
  price : "157"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/264738/streax-hair-serum-vitalised-with-walnut-oil-45-ml_5_display_1631619157_a9b55a17.jpg" ,
  name : "Streax Hair Serum vitalised with Walnut Oil 45 ml" ,
  price : "102"} ,
  {image : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/182554/maybelline-new-york-fit-me-matte-poreless-liquid-foundation-220-natural-beige-30-ml_11_display_1632144883_31707114.jpg" ,
  name : "Maybelline New York Fit Me Matte+Poreless Liquid Foundation (With Pump &amp; SPF 22), 220 Natural Beige, 30ml" ,
  price : "412"} ,
]

localStorage.setItem("currently_trending" , JSON.stringify(currently_trending))
