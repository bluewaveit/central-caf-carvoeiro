/* Central Café — main.js */

// ── i18n translation system ───────────────────────────────
const translations = {
  en: {
    'nav.menu': 'Menu', 'nav.story': 'Our Story', 'nav.gallery': 'Gallery',
    'nav.reserve': 'Reserve', 'nav.location': 'Location', 'nav.cta': 'Book a Table',
    'hero.title': 'Where Every Bite<br /><em>Tells a Story</em>',
    'hero.sub': 'Flame-grilled steaks, fresh Atlantic seafood,<br />and soulful Portuguese flavours — open daily from 9am.',
    'hero.cta1': 'Reserve Your Table', 'hero.cta2': 'Explore the Menu', 'hero.scroll': 'Scroll to discover',
    'badge.flame.title': 'Flame Grilled', 'badge.flame.desc': 'Cooked over real fire for authentic char and flavour',
    'badge.pig.title': 'Black Pig Certified', 'badge.pig.desc': 'Free-range Alentejo black pig — prized, premium cuts',
    'badge.seafood.title': 'Fresh Atlantic Seafood', 'badge.seafood.desc': 'Local catch served the day it arrives',
    'badge.produce.title': 'Local Produce', 'badge.produce.desc': 'Seasonal ingredients from trusted regional growers',
    'menu.eyebrow': 'What We Serve', 'menu.title': 'A Menu for Every Craving',
    'menu.sub': 'From a light couvert to a showstopping steak on the stone — there is something for everyone at Central Café.',
    'tab.starters': 'Starters', 'tab.salads': 'Salads', 'tab.burgers': 'Burgers',
    'tab.steakhouse': 'Steakhouse', 'tab.stone': 'Stone Experience', 'tab.blackpig': 'Black Pig',
    'tab.fish': 'Grilled Fish', 'tab.specialties': 'Specialties', 'tab.sides': 'Sides & Sauces',
    'tab.kids': 'Kids', 'tab.wraps': 'Wraps', 'tab.baguettes': 'Baguettes',
    'tab.pizzas': 'Pizzas', 'tab.pastas': 'Pastas', 'tab.chicken': 'Chicken',
    'tab.kebabs': 'Kebabs', 'tab.breakfast': 'Breakfast',
    'panel.starters': 'Couvert served with your choice of pepper, mushroom, blue cheese, BBQ or garlic mayonnaise sauce',
    'panel.salads': 'Made with the freshest ingredients from our local producers',
    'panel.burgers': 'Flame grilled day-aged beef burger — so simple and so delicious. All served with home-made chips.',
    'panel.steakhouse': 'Tender hand-cut selections, served with home-made chips, a gourmet salad and a sauce. Choose from: pepper, mushroom, blue cheese, BBQ or garlic mayonnaise.',
    'panel.stone': 'All served with 3 sauces: pepper, mushroom and blue cheese — together with home-made chips and gourmet salad.',
    'panel.blackpig': 'Free range — famous for its juicy meat. Certified Alentejo Black Pig, served with home-made chips and a gourmet salad.',
    'panel.fish': 'Flame grilled, served with mixed boiled vegetables and potato. May contain fish bones.',
    'panel.specialties': 'Our chefs\' proudest plates — classic Portuguese flavours with a Central Café twist.',
    'panel.sides': 'All freshly prepared when you order.',
    'panel.kids': 'Little ones deserve great food too — all freshly made, just smaller.',
    'panel.wraps': 'Served at lunch only — fresh fillings in a soft flour wrap.',
    'panel.baguettes': 'Rustic French baguette sandwiches — generous fillings, great flavour.',
    'panel.pizzas': 'Stone-baked pizzas made fresh to order.',
    'panel.pastas': 'Homemade pasta dishes — fresh ingredients, classic recipes.',
    'panel.chicken': 'Flame grilled chicken — served with homemade chips.',
    'panel.kebabs': 'Made in-house and flame grilled — served with salad and gratin potatoes.',
    'panel.breakfast': 'Served daily from 9am — the perfect start to your Algarve morning.',
    'tag.new': 'New',
    'stone.title': 'Cook It Your Way',
    'stone.desc': 'Your steak arrives on a scorching volcanic stone at your table. You control the sear, the doneness, every bite. An interactive dining experience unlike any other.',
    'spot.eyebrow': 'Chef\'s Recommendation', 'spot.title': 'King Prawn Penne',
    'spot.desc': 'Atlantic king prawns tossed with penne pasta, wild rocket, cherry tomatoes and our signature house sauce — a plate that captures the soul of the Algarve coast in every forkful.',
    'spot.cta': 'Reserve to Try It',
    'story.eyebrow': 'Our Story', 'story.title': 'Passion on a Plate,<br />Every Single Day',
    'story.p1': 'Central Café was born from a simple belief: that great food, warm service, and beautiful surroundings can turn any meal into a memory. Nestled in the heart of Carvoeiro — one of the Algarve\'s most beloved coastal villages — we blend Portuguese tradition with international flair.',
    'story.p2': 'Our kitchen runs on locally sourced produce, certified free-range Black Pig, and Atlantic seafood delivered fresh daily. Every flame-grilled steak, every handcrafted burger, every plate of pasta carries the same commitment — the finest ingredients, treated with care.',
    'story.p3': 'Whether you\'re enjoying breakfast on the terrace or gathering with family over a long Sunday lunch, Central Café is your home away from home on the Algarve coast.',
    'story.stat1': 'Menu Items', 'story.stat2': 'Open Daily', 'story.stat3': 'Reviews',
    'badge.blackpig': 'Black Pig', 'badge.certified': 'Certified',
    'gallery.eyebrow': 'From Our Kitchen', 'gallery.title': 'A Feast for the Eyes',
    'testi.eyebrow': 'Guest Reviews', 'testi.title': 'What Our Guests Say',
    'res.eyebrow': 'Book a Table', 'res.title': 'Reserve Your<br />Perfect Evening',
    'res.desc': 'We look forward to welcoming you. Fill in the form and our team will confirm your reservation within a few hours.',
    'res.hours.title': 'Opening Hours', 'res.phone.title': 'Call Us', 'res.addr.title': 'Address',
    'form.fname': 'First Name', 'form.lname': 'Last Name', 'form.email': 'Email',
    'form.phone': 'Phone', 'form.date': 'Date', 'form.time': 'Time',
    'form.guests': 'Guests', 'form.notes': 'Special Requests',
    'form.submit': 'Confirm Reservation', 'form.sending': 'Sending…',
    'form.success': 'Thank you — we will confirm your reservation shortly.',
    'form.error': 'Something went wrong. Please try again or call us directly.',
    'ph.fname': 'Maria', 'ph.lname': 'Silva', 'ph.email': 'maria@example.com',
    'ph.phone': '+351 912 345 678', 'ph.notes': 'Dietary requirements, special occasion, seating preference…',
    'sel.time': 'Select time', 'sel.guests': 'How many?',
    'loc.eyebrow': 'Find Us', 'loc.title': 'In the Heart of Carvoeiro',
    'loc.sub': 'Estrada do Farol, steps from the village centre and Carvoeiro beach — easy to find, impossible to forget.',
    'loc.addr.label': 'Address', 'loc.phone.label': 'Phone', 'loc.hours.label': 'Hours',
    'loc.hours.val': 'Open Daily — 09:00 to 23:00', 'loc.cuisine.label': 'Cuisine', 'loc.cta': 'Book a Table',
    'footer.menu': 'Menu', 'footer.visit': 'Visit', 'footer.story': 'Our Story',
    'footer.work': 'Work with Us', 'footer.gallery': 'Gallery',
    'footer.reservations': 'Reservations', 'footer.location': 'Location & Hours',
    'footer.follow': 'Follow Us', 'footer.reviews': '99+ reviews on TripAdvisor',
    'footer.wifi': 'Free Wi-Fi for customers',
    'footer.starters': 'Starters & Couvert', 'footer.fsalads': 'Salads',
    'footer.wraps': 'Wraps & Baguettes', 'footer.pizzas': 'Pizzas & Pastas',
    'footer.burgers': 'Hamburgers', 'footer.chicken': 'Chicken & Kebabs',
    'footer.steakhouse': 'Steakhouse', 'footer.fstone': 'Stone Experience',
    'footer.fpig': 'Black Pig', 'footer.ffish': 'Grilled Fish',
    'starters.breadbasket.name': 'Bread Basket', 'starters.breadbasket.desc': 'Freshly baked bread served warm',
    'starters.olives.name': 'Marinated Olives', 'starters.olives.desc': 'House marinated olives',
    'starters.sardinepate.name': 'Sardine Pâté', 'starters.sardinepate.desc': 'Per item',
    'starters.sheepscheese.name': "Sheep's Cheese", 'starters.sheepscheese.desc': 'Per item',
    'starters.couvertplatter.name': 'Couvert Platter', 'starters.couvertplatter.desc': 'Bread basket, butter, marinated olives, sardine pâté and sheep\'s cheese — everything included',
    'starters.soup.name': 'Soup of the Day', 'starters.soup.desc': "Homemade — ask your server for today's selection",
    'starters.bruschetta.name': 'Tomato & Mozzarella Bruschetta', 'starters.bruschetta.desc': 'Tomato and mozzarella on toasted bread',
    'starters.garlicbread.name': 'Garlic Bread with Cheese', 'starters.garlicbread.desc': 'Toasted bread with garlic butter and melted cheese',
    'starters.garlicprawns.name': 'Garlic Prawns', 'starters.garlicprawns.desc': 'Fried with garlic, lemon wedges and house garlic mayonnaise',
    'starters.tempura.name': 'King Prawns in Tempura', 'starters.tempura.desc': '5 items — crispy tempura battered king prawns',
    'starters.clams.name': 'Clams "Bulhão Pato"', 'starters.clams.desc': 'Cooked with garlic and white wine — a classic of Portugal',
    'starters.mussels.name': 'Mussels "Natural"', 'starters.mussels.desc': 'Garlic and white wine — simple, fresh, perfect',
    'starters.chickenwings.name': 'Fried Chicken Wings', 'starters.chickenwings.desc': '6 items, with BBQ dip',
    'starters.chourico.name': 'Flame Chouriço', 'starters.chourico.desc': 'Traditional Portuguese cured sausage, flamed at the table',
    'starters.hamcheese.name': 'Smoked Ham & Cheese Board', 'starters.hamcheese.desc': 'Selection of smoked ham and cheese',
    'starters.garlicmushrooms.name': 'Garlic Mushrooms', 'starters.garlicmushrooms.desc': 'Pan-fried in garlic butter',
    'salads.caesar.name': 'Caesar', 'salads.caesar.desc': 'Chicken breast, poached egg, lettuce, croutons, house caesar dressing, parmesan',
    'salads.salmon.name': 'Salmon', 'salads.salmon.desc': 'Smoked salmon and avocado with a touch of lemon',
    'salads.chicken.name': 'Chicken', 'salads.chicken.desc': 'Flame grilled chicken breast with bacon and avocado',
    'salads.mozzarella.name': 'Mozzarella', 'salads.mozzarella.desc': 'Mozzarella, tomato and basil',
    'burgers.specialone.name': 'Special One', 'burgers.specialone.desc': '100% beef, bacon, fried egg, cheese, tomato and onion',
    'burgers.double.name': 'Double', 'burgers.double.desc': '100% beef x2, cheese, bacon, tomato and onion',
    'burgers.classic.name': 'Classic', 'burgers.classic.desc': '100% beef, lettuce, tomato and onion',
    'burgers.cheeseburger.name': 'Cheese Burger', 'burgers.cheeseburger.desc': '100% beef, cheese, lettuce, tomato and onion',
    'burgers.friedonion.name': 'Fried Onion Burger', 'burgers.friedonion.desc': '100% beef, cheese, soft fried onion and tomato',
    'burgers.chickenpiri.name': 'Chicken Piri-Piri', 'burgers.chickenpiri.desc': 'Chicken breast, cheese, piri-piri sauce, tomato and onion',
    'burgers.veggie.name': 'Veggie', 'burgers.veggie.desc': '100% vegetable burger, tomato and onion',
    'burgers.salmon.name': 'Salmon', 'burgers.salmon.desc': 'Salmon, cream cheese, onion and tomato',
    'steakhouse.surfturf.name': 'Surf & Turf', 'steakhouse.surfturf.desc': 'Flame grilled fillet and king prawns, with asparagus and home-made chips',
    'steakhouse.ribeye.name': 'Rib Eye', 'steakhouse.ribeye.desc': 'approx. 300g — flame grilled',
    'steakhouse.tbone.name': 'T-Bone', 'steakhouse.tbone.desc': 'approx. 400g — flame grilled',
    'steakhouse.sirloin.name': 'Sirloin', 'steakhouse.sirloin.desc': 'approx. 280g — flame grilled',
    'steakhouse.fillet.name': 'Fillet', 'steakhouse.fillet.desc': 'approx. 280g — flame grilled, the most tender cut',
    'steakhouse.peppersteak.name': 'Pepper Steak', 'steakhouse.peppersteak.desc': 'Sirloin with creamy pepper sauce, served with sautéed vegetables & gratin potatoes',
    'stone.ribeye.name': 'Rib Eye Steak', 'stone.ribeye.desc': 'approx. 300g',
    'stone.tbone.name': 'T-Bone Steak', 'stone.tbone.desc': 'approx. 400g',
    'stone.sirloin.name': 'Sirloin Steak', 'stone.sirloin.desc': 'approx. 280g',
    'stone.fillet.name': 'Fillet Steak', 'stone.fillet.desc': 'approx. 280g',
    'blackpig.tenderfillet.name': 'Tender Fillet', 'blackpig.tenderfillet.desc': 'approx. 230g — flame grilled with cream sauce and mushrooms',
    'blackpig.secretos.name': 'Secretos', 'blackpig.secretos.desc': 'Flame grilled — highly prized, incredibly juicy hidden cut',
    'blackpig.ribs.name': 'Rack of Ribs', 'blackpig.ribs.desc': 'Flame grilled, served with BBQ sauce',
    'fish.sardines.name': 'Sardines', 'fish.sardines.desc': 'Served with traditional potato and local salad',
    'fish.cod.name': 'Cod', 'fish.cod.desc': 'Loin of salt cod',
    'fish.seabass.name': 'Seabass', 'fish.seabass.desc': 'Fillet',
    'fish.salmon.name': 'Salmon', 'fish.salmon.desc': 'Fillet',
    'fish.goldenbream.name': 'Golden Bream', 'fish.goldenbream.desc': 'Fillet',
    'fish.tuna.name': 'Tuna', 'fish.tuna.desc': 'Steak',
    'fish.fishcataplana.name': 'Fish Cataplana', 'fish.fishcataplana.desc': 'Traditional Portuguese clay-pot fish stew',
    'fish.seafoodcataplana.name': 'Seafood Cataplana', 'fish.seafoodcataplana.desc': 'Traditional Portuguese clay-pot seafood stew',
    'fish.musselscataplana.name': 'Mussels Cataplana', 'fish.musselscataplana.desc': 'Mussels in a traditional Portuguese clay-pot',
    'fish.vegcataplana.name': 'Vegetarian Cataplana', 'fish.vegcataplana.desc': 'Seasonal vegetables in a traditional Portuguese clay-pot',
    'specialties.tunasteak.name': 'Local Tuna Steak', 'specialties.tunasteak.desc': 'With fried onions on a clay pan, served with boiled potatoes',
    'specialties.portuguesesteak.name': 'Portuguese Steak', 'specialties.portuguesesteak.desc': 'Sirloin in a garlic and wine sauce, topped with a slice of presunto ham and home-made chips',
    'specialties.octopus.name': 'Grilled Octopus', 'specialties.octopus.desc': 'Served with potatoes from the oven on a clay pan',
    'sides.vegetables.name': 'Sautéed Vegetables', 'sides.vegetables.desc': 'Seasonal vegetables sautéed to order',
    'sides.sauces.name': 'Sauces', 'sides.sauces.desc': 'Mushroom, pepper, blue cheese, BBQ, garlic mayonnaise, agridoce or soya sauce',
    'sides.chips1.name': 'Home-Made Chips — 1 Person', 'sides.chips1.desc': 'Peeled and cut daily',
    'sides.chips2.name': 'Home-Made Chips — 2 Persons', 'sides.chips2.desc': 'Peeled and cut daily',
    'sides.garlicmushrooms.name': 'Pan-Fried Garlic Mushrooms', 'sides.garlicmushrooms.desc': 'Pan-fried in garlic butter',
    'sides.chickenwings.name': 'Fried Chicken Wings (5)', 'sides.chickenwings.desc': 'Crispy and golden',
    'sides.friedonions.name': 'Fried Onions', 'sides.friedonions.desc': 'Soft or crispy',
    'sides.onionrings.name': 'Onion Rings', 'sides.onionrings.desc': 'Golden battered onion rings',
    'kids.fishfingers.name': 'Fish Fingers', 'kids.fishfingers.desc': 'Served with home-made chips',
    'kids.nuggets.name': 'Chicken Nuggets', 'kids.nuggets.desc': 'Served with home-made chips',
    'kids.cheeseburger.name': 'Cheese Burger', 'kids.cheeseburger.desc': 'Served with home-made chips',
    'kids.hotdog.name': 'Hot Dog', 'kids.hotdog.desc': 'With home-made fried onion, served with crisps',
    'kids.spaghetti.name': 'Spaghetti Bolognese', 'kids.spaghetti.desc': 'Home-made with 100% beef',
    'kids.pizza.name': 'Mini Margherita Pizza', 'kids.pizza.desc': 'Home-made',
    'wraps.mozzarella.name': 'Mozzarella & Fresh Basil', 'wraps.mozzarella.desc': 'Mozzarella and fresh basil',
    'wraps.smokedsalmon.name': 'Smoked Salmon', 'wraps.smokedsalmon.desc': 'Cream cheese, rocket leaves and a squeeze of lemon',
    'wraps.smokedham.name': 'Smoked Ham', 'wraps.smokedham.desc': 'Cheese, sun-dried tomatoes and rocket leaves',
    'wraps.tuna.name': 'Tuna', 'wraps.tuna.desc': 'Onion, tomato, sweetcorn and rocket leaves',
    'wraps.chicken.name': 'Grilled Chicken Breast', 'wraps.chicken.desc': 'Fried onions, tomato and rocket leaves',
    'baguettes.smokedham.name': 'Smoked Ham', 'baguettes.smokedham.desc': 'Fresh cheese, sun-dried tomato and rocket leaves',
    'baguettes.chicken.name': 'Grilled Chicken Breast', 'baguettes.chicken.desc': 'Bacon, fried onions, roast peppers and rocket leaves',
    'baguettes.smokedsalmon.name': 'Smoked Salmon', 'baguettes.smokedsalmon.desc': 'Cream cheese, rocket leaves and a touch of lemon',
    'baguettes.tuna.name': 'Tuna', 'baguettes.tuna.desc': 'Onion, tomato, boiled egg and rocket leaves',
    'baguettes.prawncocktail.name': 'Prawn Cocktail', 'baguettes.prawncocktail.desc': 'Avocado, tomato and rocket leaves',
    'baguettes.blt.name': 'BLT', 'baguettes.blt.desc': 'Bacon, lettuce and tomato',
    'pizzas.margherita.name': 'Margherita', 'pizzas.margherita.desc': 'Tomato, mozzarella di bufala and fresh basil',
    'pizzas.pepperoni.name': 'Pepperoni', 'pizzas.pepperoni.desc': 'Cheese, tomato, bell peppers and olives',
    'pizzas.vegetarian.name': 'Vegetarian', 'pizzas.vegetarian.desc': 'Cheese and tomato, grilled bell peppers, sweetcorn, rocket leaves and cherry tomatoes',
    'pizzas.smokedham.name': 'Smoked Ham', 'pizzas.smokedham.desc': 'Cheese and tomato, smoked ham, roast peppers and olives',
    'pizzas.tuna.name': 'Tuna', 'pizzas.tuna.desc': 'Tomato, cheese, onion, sweetcorn and olives',
    'pizzas.centralcafe.name': 'Central Café', 'pizzas.centralcafe.desc': 'Cheese, onion, tomato, chorizo, olives and wild oregano',
    'pizzas.chickenpiri.name': 'Chicken Piri-piri', 'pizzas.chickenpiri.desc': 'Tomato, cheese, chicken, peppers and piri-piri',
    'pastas.bolognese.name': 'Spaghetti Bolognese', 'pastas.bolognese.desc': 'Homemade in-house with 100% beef',
    'pastas.carbonara.name': 'Spaghetti Carbonara', 'pastas.carbonara.desc': 'Parmesan cheese, eggs and bacon',
    'pastas.ravioli.name': 'Ravioli al Pesto', 'pastas.ravioli.desc': 'Green pesto sauce',
    'pastas.tagliatelle.name': 'Tagliatelle Funghi', 'pastas.tagliatelle.desc': 'Mushrooms, ham and cream',
    'pastas.pennedelmare.name': 'Penne del Mare', 'pastas.pennedelmare.desc': 'Prawns, cherry tomatoes, olives and rocket leaves',
    'pastas.nero.name': 'Nero Spaghetti Gamberetti', 'pastas.nero.desc': 'King prawns, cherry tomato and piri-piri',
    'chicken.piripiri.name': 'Chicken Piri-piri', 'chicken.piripiri.desc': '½ chicken on the bone, marinated and flame grilled, served with homemade chips',
    'chicken.breastgrilled.name': 'Chicken Breast Flame Grilled', 'chicken.breastgrilled.desc': 'Served with homemade chips and salad',
    'kebabs.chicken.name': 'Chicken Kebab', 'kebabs.chicken.desc': 'Made in-house and flame grilled, served with salad and gratin potatoes',
    'kebabs.kingprawn.name': 'Chicken & King Prawn Kebab', 'kebabs.kingprawn.desc': 'Made in-house and flame grilled, served with salad and gratin potatoes',
    'kebabs.satay.name': 'Chicken Satay Kebab', 'kebabs.satay.desc': 'With creamy homemade peanut sauce, served with salad and gratin potatoes',
    'breakfast.fullenglish.name': 'Full English Breakfast', 'breakfast.fullenglish.desc': 'Eggs your way (fried, scrambled or poached), bacon, sausages, baked beans, grilled tomato, mushrooms and toast',
  },
  pt: {
    'nav.menu': 'Menu', 'nav.story': 'A Nossa História', 'nav.gallery': 'Galeria',
    'nav.reserve': 'Reservar', 'nav.location': 'Localização', 'nav.cta': 'Reservar Mesa',
    'hero.title': 'Onde Cada Prato<br /><em>Conta uma História</em>',
    'hero.sub': 'Grelhados na brasa, marisco fresco do Atlântico,<br />e sabores portugueses com alma — abertos todos os dias a partir das 9h.',
    'hero.cta1': 'Reservar Mesa', 'hero.cta2': 'Explorar o Menu', 'hero.scroll': 'Deslize para descobrir',
    'badge.flame.title': 'Grelhado na Brasa', 'badge.flame.desc': 'Cozinhado sobre lume vivo para um sabor autêntico e fumado',
    'badge.pig.title': 'Porco Preto Certificado', 'badge.pig.desc': 'Porco Preto Alentejano em liberdade — cortes premiados e de qualidade superior',
    'badge.seafood.title': 'Marisco Fresco do Atlântico', 'badge.seafood.desc': 'Captura local servida no próprio dia',
    'badge.produce.title': 'Produtos Locais', 'badge.produce.desc': 'Ingredientes sazonais de produtores regionais de confiança',
    'menu.eyebrow': 'O Que Servimos', 'menu.title': 'Um Menu para Todos os Gostos',
    'menu.sub': 'De um ligeiro couvert a um espetacular bife na pedra — há algo para todos no Central Café.',
    'tab.starters': 'Entradas', 'tab.salads': 'Saladas', 'tab.burgers': 'Hambúrgueres',
    'tab.steakhouse': 'Steakhouse', 'tab.stone': 'Experiência na Pedra', 'tab.blackpig': 'Porco Preto',
    'tab.fish': 'Peixe Grelhado', 'tab.specialties': 'Especialidades', 'tab.sides': 'Acompanhamentos',
    'tab.kids': 'Crianças', 'tab.wraps': 'Wraps', 'tab.baguettes': 'Baguetes',
    'tab.pizzas': 'Pizzas', 'tab.pastas': 'Massas', 'tab.chicken': 'Frango',
    'tab.kebabs': 'Espetadas', 'tab.breakfast': 'Pequeno-Almoço',
    'panel.starters': 'Couvert servido com molho à sua escolha: pimenta, cogumelos, queijo azul, BBQ ou maionese de alho',
    'panel.salads': 'Feitas com os ingredientes mais frescos dos nossos produtores locais',
    'panel.burgers': 'Hambúrguer de novilho grelhado na brasa — simples e delicioso. Todos servidos com batatas fritas caseiras.',
    'panel.steakhouse': 'Seleções cortadas à mão, servidas com batatas fritas caseiras, salada gourmet e um molho. Escolha entre: pimenta, cogumelos, queijo azul, BBQ ou maionese de alho.',
    'panel.stone': 'Todos servidos com 3 molhos: pimenta, cogumelos e queijo azul — com batatas fritas caseiras e salada gourmet.',
    'panel.blackpig': 'Criação livre — famoso pela sua carne suculenta. Porco Preto Alentejano Certificado, servido com batatas fritas caseiras e salada gourmet.',
    'panel.fish': 'Grelhado na brasa, servido com legumes cozidos mistos e batata. Pode conter espinhas.',
    'panel.specialties': 'Os pratos de que os nossos chefs mais se orgulham — sabores portugueses clássicos com o toque do Central Café.',
    'panel.sides': 'Tudo preparado fresquinho quando faz o pedido.',
    'panel.kids': 'Os mais pequenos merecem comida boa também — tudo feito na hora, só em doses menores.',
    'panel.wraps': 'Servidos apenas ao almoço — recheios frescos num wrap de farinha suave.',
    'panel.baguettes': 'Sandes rústicas em baguete francesa — recheios generosos, grande sabor.',
    'panel.pizzas': 'Pizzas cozidas em forno de pedra, feitas na hora.',
    'panel.pastas': 'Pratos de massa caseira — ingredientes frescos, receitas clássicas.',
    'panel.chicken': 'Frango grelhado na brasa — servido com batatas fritas caseiras.',
    'panel.kebabs': 'Preparados na casa e grelhados na brasa — servidos com salada e batatas gratinadas.',
    'panel.breakfast': 'Servido todos os dias a partir das 9h — o início perfeito para a sua manhã no Algarve.',
    'tag.new': 'Novo',
    'stone.title': 'Cozinhe à Sua Maneira',
    'stone.desc': 'O seu bife chega sobre uma pedra vulcânica a arder na sua mesa. Você controla o grau de cozedura, cada bocado. Uma experiência gastronómica interativa como nenhuma outra.',
    'spot.eyebrow': 'Recomendação do Chef', 'spot.title': 'Penne com Gambão',
    'spot.desc': 'Gambão do Atlântico salteado com penne, rúcula silvestre, tomate cherry e o nosso molho especial — um prato que captura a alma da costa algarvia em cada garfada.',
    'spot.cta': 'Reservar para Experimentar',
    'story.eyebrow': 'A Nossa História', 'story.title': 'Paixão no Prato,<br />Todos os Dias',
    'story.p1': 'O Central Café nasceu de uma crença simples: que boa comida, serviço caloroso e um ambiente bonito podem transformar qualquer refeição numa memória. Situado no coração de Carvoeiro — uma das aldeias costeiras mais queridas do Algarve — combinamos a tradição portuguesa com um toque internacional.',
    'story.p2': 'A nossa cozinha assenta em produtos locais, Porco Preto Alentejano certificado em regime de criação extensiva e marisco do Atlântico entregue fresco todos os dias. Cada bife grelhado na brasa, cada hambúrguer artesanal, cada prato de massa carrega o mesmo compromisso — os melhores ingredientes, tratados com cuidado.',
    'story.p3': 'Seja a tomar o pequeno-almoço na esplanada ou a reunir com a família num longo almoço de domingo, o Central Café é a sua segunda casa na costa algarvia.',
    'story.stat1': 'Pratos no Menu', 'story.stat2': 'Aberto Diariamente', 'story.stat3': 'Avaliações',
    'badge.blackpig': 'Porco Preto', 'badge.certified': 'Certificado',
    'gallery.eyebrow': 'Da Nossa Cozinha', 'gallery.title': 'Um Festim para os Olhos',
    'testi.eyebrow': 'Avaliações dos Clientes', 'testi.title': 'O Que Dizem os Nossos Clientes',
    'res.eyebrow': 'Reservar Mesa', 'res.title': 'Reserve a Sua<br />Noite Perfeita',
    'res.desc': 'Aguardamos a sua visita com prazer. Preencha o formulário e a nossa equipa confirmará a sua reserva em poucas horas.',
    'res.hours.title': 'Horário de Abertura', 'res.phone.title': 'Contacto', 'res.addr.title': 'Morada',
    'form.fname': 'Primeiro Nome', 'form.lname': 'Apelido', 'form.email': 'Email',
    'form.phone': 'Telefone', 'form.date': 'Data', 'form.time': 'Hora',
    'form.guests': 'Convidados', 'form.notes': 'Pedidos Especiais',
    'form.submit': 'Confirmar Reserva', 'form.sending': 'A enviar…',
    'form.success': 'Obrigado — confirmaremos a sua reserva em breve.',
    'form.error': 'Algo correu mal. Tente novamente ou contacte-nos diretamente.',
    'ph.fname': 'Maria', 'ph.lname': 'Silva', 'ph.email': 'maria@exemplo.pt',
    'ph.phone': '+351 912 345 678', 'ph.notes': 'Restrições alimentares, ocasião especial, preferência de lugar…',
    'sel.time': 'Selecionar hora', 'sel.guests': 'Quantos?',
    'loc.eyebrow': 'Encontre-nos', 'loc.title': 'No Coração de Carvoeiro',
    'loc.sub': 'Estrada do Farol, a poucos passos do centro da vila e da praia de Carvoeiro — fácil de encontrar, impossível de esquecer.',
    'loc.addr.label': 'Morada', 'loc.phone.label': 'Telefone', 'loc.hours.label': 'Horário',
    'loc.hours.val': 'Aberto Todos os Dias — 09:00 às 23:00', 'loc.cuisine.label': 'Cozinha', 'loc.cta': 'Reservar Mesa',
    'footer.menu': 'Menu', 'footer.visit': 'Visitar', 'footer.story': 'A Nossa História',
    'footer.work': 'Trabalhe Connosco', 'footer.gallery': 'Galeria',
    'footer.reservations': 'Reservas', 'footer.location': 'Localização & Horário',
    'footer.follow': 'Siga-nos', 'footer.reviews': 'Mais de 99 avaliações no TripAdvisor',
    'footer.wifi': 'Wi-Fi gratuito para clientes',
    'footer.starters': 'Entradas & Couvert', 'footer.fsalads': 'Saladas',
    'footer.wraps': 'Wraps & Baguetes', 'footer.pizzas': 'Pizzas & Massas',
    'footer.burgers': 'Hambúrgueres', 'footer.chicken': 'Frango & Espetadas',
    'footer.steakhouse': 'Steakhouse', 'footer.fstone': 'Experiência na Pedra',
    'footer.fpig': 'Porco Preto', 'footer.ffish': 'Peixe Grelhado',
    'starters.breadbasket.name': 'Cesto de Pão', 'starters.breadbasket.desc': 'Pão fresco servido quente',
    'starters.olives.name': 'Azeitonas Marinadas', 'starters.olives.desc': 'Azeitonas marinadas da casa',
    'starters.sardinepate.name': 'Patê de Sardinha', 'starters.sardinepate.desc': 'Por unidade',
    'starters.sheepscheese.name': 'Queijo de Ovelha', 'starters.sheepscheese.desc': 'Por unidade',
    'starters.couvertplatter.name': 'Couvert Completo', 'starters.couvertplatter.desc': 'Cesto de pão, manteiga, azeitonas marinadas, patê de sardinha e queijo de ovelha — tudo incluído',
    'starters.soup.name': 'Sopa do Dia', 'starters.soup.desc': 'Caseira — pergunte ao seu empregado a seleção de hoje',
    'starters.bruschetta.name': 'Bruschetta de Tomate e Mozzarella', 'starters.bruschetta.desc': 'Tomate e mozzarella em pão torrado',
    'starters.garlicbread.name': 'Pão de Alho com Queijo', 'starters.garlicbread.desc': 'Pão torrado com manteiga de alho e queijo derretido',
    'starters.garlicprawns.name': 'Gambas ao Alho', 'starters.garlicprawns.desc': 'Fritas com alho, rodelas de limão e maionese de alho da casa',
    'starters.tempura.name': 'Gambão em Tempura', 'starters.tempura.desc': '5 unidades — gambão em polme crocante de tempura',
    'starters.clams.name': 'Amêijoas à Bulhão Pato', 'starters.clams.desc': 'Cozinhadas com alho e vinho branco — um clássico português',
    'starters.mussels.name': 'Mexilhões ao Natural', 'starters.mussels.desc': 'Alho e vinho branco — simples, frescos, perfeitos',
    'starters.chickenwings.name': 'Asas de Frango Fritas', 'starters.chickenwings.desc': '6 unidades, com molho BBQ',
    'starters.chourico.name': 'Chouriço a Lareira', 'starters.chourico.desc': 'Chouriço curado português tradicional, flamejado à mesa',
    'starters.hamcheese.name': 'Tábua de Presunto e Queijo', 'starters.hamcheese.desc': 'Seleção de presunto fumado e queijo',
    'starters.garlicmushrooms.name': 'Cogumelos ao Alho', 'starters.garlicmushrooms.desc': 'Salteados em manteiga de alho',
    'salads.caesar.name': 'Caesar', 'salads.caesar.desc': 'Peito de frango, ovo escalfado, alface, croutons, molho caesar da casa, parmesão',
    'salads.salmon.name': 'Salmão', 'salads.salmon.desc': 'Salmão fumado e abacate com um toque de limão',
    'salads.chicken.name': 'Frango', 'salads.chicken.desc': 'Peito de frango grelhado na brasa com bacon e abacate',
    'salads.mozzarella.name': 'Mozzarella', 'salads.mozzarella.desc': 'Mozzarella, tomate e manjericão',
    'burgers.specialone.name': 'O Especial', 'burgers.specialone.desc': '100% novilho, bacon, ovo estrelado, queijo, tomate e cebola',
    'burgers.double.name': 'Duplo', 'burgers.double.desc': '100% novilho x2, queijo, bacon, tomate e cebola',
    'burgers.classic.name': 'Clássico', 'burgers.classic.desc': '100% novilho, alface, tomate e cebola',
    'burgers.cheeseburger.name': 'Cheese Burger', 'burgers.cheeseburger.desc': '100% novilho, queijo, alface, tomate e cebola',
    'burgers.friedonion.name': 'Hambúrguer de Cebola Frita', 'burgers.friedonion.desc': '100% novilho, queijo, cebola frita mole e tomate',
    'burgers.chickenpiri.name': 'Frango Piri-Piri', 'burgers.chickenpiri.desc': 'Peito de frango, queijo, molho piri-piri, tomate e cebola',
    'burgers.veggie.name': 'Vegetariano', 'burgers.veggie.desc': 'Hambúrguer 100% vegetal, tomate e cebola',
    'burgers.salmon.name': 'Salmão', 'burgers.salmon.desc': 'Salmão, queijo creme, cebola e tomate',
    'steakhouse.surfturf.name': 'Mar e Terra', 'steakhouse.surfturf.desc': 'Filete e gambão grelhados na brasa, com espargos e batatas fritas caseiras',
    'steakhouse.ribeye.name': 'Rib Eye', 'steakhouse.ribeye.desc': 'aprox. 300g — grelhado na brasa',
    'steakhouse.tbone.name': 'T-Bone', 'steakhouse.tbone.desc': 'aprox. 400g — grelhado na brasa',
    'steakhouse.sirloin.name': 'Lombo', 'steakhouse.sirloin.desc': 'aprox. 280g — grelhado na brasa',
    'steakhouse.fillet.name': 'Filete', 'steakhouse.fillet.desc': 'aprox. 280g — grelhado na brasa, o corte mais tenro',
    'steakhouse.peppersteak.name': 'Bife de Pimenta', 'steakhouse.peppersteak.desc': 'Lombo com molho cremoso de pimenta, servido com legumes salteados e batatas gratinadas',
    'stone.ribeye.name': 'Rib Eye na Pedra', 'stone.ribeye.desc': 'aprox. 300g',
    'stone.tbone.name': 'T-Bone na Pedra', 'stone.tbone.desc': 'aprox. 400g',
    'stone.sirloin.name': 'Lombo na Pedra', 'stone.sirloin.desc': 'aprox. 280g',
    'stone.fillet.name': 'Filete na Pedra', 'stone.fillet.desc': 'aprox. 280g',
    'blackpig.tenderfillet.name': 'Filete Tenro', 'blackpig.tenderfillet.desc': 'aprox. 230g — grelhado na brasa com molho de natas e cogumelos',
    'blackpig.secretos.name': 'Secretos', 'blackpig.secretos.desc': 'Grelhado na brasa — corte escondido muito valorizado, incrivelmente suculento',
    'blackpig.ribs.name': 'Entrecosto', 'blackpig.ribs.desc': 'Grelhado na brasa, servido com molho BBQ',
    'fish.sardines.name': 'Sardinhas', 'fish.sardines.desc': 'Servidas com batata tradicional e salada local',
    'fish.cod.name': 'Bacalhau', 'fish.cod.desc': 'Lombo de bacalhau salgado',
    'fish.seabass.name': 'Robalo', 'fish.seabass.desc': 'Filete',
    'fish.salmon.name': 'Salmão', 'fish.salmon.desc': 'Filete',
    'fish.goldenbream.name': 'Dourada', 'fish.goldenbream.desc': 'Filete',
    'fish.tuna.name': 'Atum', 'fish.tuna.desc': 'Bife',
    'fish.fishcataplana.name': 'Cataplana de Peixe', 'fish.fishcataplana.desc': 'Guisado de peixe tradicional em cataplana portuguesa',
    'fish.seafoodcataplana.name': 'Cataplana de Marisco', 'fish.seafoodcataplana.desc': 'Guisado de marisco tradicional em cataplana portuguesa',
    'fish.musselscataplana.name': 'Cataplana de Mexilhão', 'fish.musselscataplana.desc': 'Mexilhões em cataplana portuguesa tradicional',
    'fish.vegcataplana.name': 'Cataplana Vegetariana', 'fish.vegcataplana.desc': 'Legumes sazonais em cataplana portuguesa tradicional',
    'specialties.tunasteak.name': 'Bife de Atum Local', 'specialties.tunasteak.desc': 'Com cebolas fritas em caçarola de barro, servido com batatas cozidas',
    'specialties.portuguesesteak.name': 'Bife à Portuguesa', 'specialties.portuguesesteak.desc': 'Lombo em molho de alho e vinho, coberto com uma fatia de presunto e batatas fritas caseiras',
    'specialties.octopus.name': 'Polvo Grelhado', 'specialties.octopus.desc': 'Servido com batatas do forno em caçarola de barro',
    'sides.vegetables.name': 'Legumes Salteados', 'sides.vegetables.desc': 'Legumes sazonais salteados na hora',
    'sides.sauces.name': 'Molhos', 'sides.sauces.desc': 'Cogumelos, pimenta, queijo azul, BBQ, maionese de alho, agridoce ou molho de soja',
    'sides.chips1.name': 'Batatas Fritas Caseiras — 1 Pessoa', 'sides.chips1.desc': 'Descascadas e cortadas diariamente',
    'sides.chips2.name': 'Batatas Fritas Caseiras — 2 Pessoas', 'sides.chips2.desc': 'Descascadas e cortadas diariamente',
    'sides.garlicmushrooms.name': 'Cogumelos Salteados ao Alho', 'sides.garlicmushrooms.desc': 'Salteados em manteiga de alho',
    'sides.chickenwings.name': 'Asas de Frango Fritas (5)', 'sides.chickenwings.desc': 'Crocantes e douradas',
    'sides.friedonions.name': 'Cebola Frita', 'sides.friedonions.desc': 'Mole ou crocante',
    'sides.onionrings.name': 'Anéis de Cebola', 'sides.onionrings.desc': 'Anéis de cebola em polme dourado',
    'kids.fishfingers.name': 'Dedos de Peixe', 'kids.fishfingers.desc': 'Servidos com batatas fritas caseiras',
    'kids.nuggets.name': 'Nuggets de Frango', 'kids.nuggets.desc': 'Servidos com batatas fritas caseiras',
    'kids.cheeseburger.name': 'Cheese Burger', 'kids.cheeseburger.desc': 'Servido com batatas fritas caseiras',
    'kids.hotdog.name': 'Hot Dog', 'kids.hotdog.desc': 'Com cebola frita caseira, servido com batatas fritas de pacote',
    'kids.spaghetti.name': 'Esparguete à Bolonhesa', 'kids.spaghetti.desc': 'Caseiro com 100% de novilho',
    'kids.pizza.name': 'Mini Pizza Margherita', 'kids.pizza.desc': 'Caseira',
    'wraps.mozzarella.name': 'Mozzarella e Manjericão Fresco', 'wraps.mozzarella.desc': 'Mozzarella e manjericão fresco',
    'wraps.smokedsalmon.name': 'Salmão Fumado', 'wraps.smokedsalmon.desc': 'Queijo creme, rúcula e um toque de limão',
    'wraps.smokedham.name': 'Presunto Fumado', 'wraps.smokedham.desc': 'Queijo, tomates secos e rúcula',
    'wraps.tuna.name': 'Atum', 'wraps.tuna.desc': 'Cebola, tomate, milho e rúcula',
    'wraps.chicken.name': 'Peito de Frango Grelhado', 'wraps.chicken.desc': 'Cebola frita, tomate e rúcula',
    'baguettes.smokedham.name': 'Presunto Fumado', 'baguettes.smokedham.desc': 'Queijo fresco, tomate seco e rúcula',
    'baguettes.chicken.name': 'Peito de Frango Grelhado', 'baguettes.chicken.desc': 'Bacon, cebola frita, pimentos assados e rúcula',
    'baguettes.smokedsalmon.name': 'Salmão Fumado', 'baguettes.smokedsalmon.desc': 'Queijo creme, rúcula e um toque de limão',
    'baguettes.tuna.name': 'Atum', 'baguettes.tuna.desc': 'Cebola, tomate, ovo cozido e rúcula',
    'baguettes.prawncocktail.name': 'Cocktail de Gambas', 'baguettes.prawncocktail.desc': 'Abacate, tomate e rúcula',
    'baguettes.blt.name': 'BLT', 'baguettes.blt.desc': 'Bacon, alface e tomate',
    'pizzas.margherita.name': 'Margherita', 'pizzas.margherita.desc': 'Tomate, mozzarella di bufala e manjericão fresco',
    'pizzas.pepperoni.name': 'Pepperoni', 'pizzas.pepperoni.desc': 'Queijo, tomate, pimentos e azeitonas',
    'pizzas.vegetarian.name': 'Vegetariana', 'pizzas.vegetarian.desc': 'Queijo e tomate, pimentos grelhados, milho, rúcula e tomate cherry',
    'pizzas.smokedham.name': 'Presunto Fumado', 'pizzas.smokedham.desc': 'Queijo e tomate, presunto fumado, pimentos assados e azeitonas',
    'pizzas.tuna.name': 'Atum', 'pizzas.tuna.desc': 'Tomate, queijo, cebola, milho e azeitonas',
    'pizzas.centralcafe.name': 'Central Café', 'pizzas.centralcafe.desc': 'Queijo, cebola, tomate, chouriço, azeitonas e orégãos silvestres',
    'pizzas.chickenpiri.name': 'Frango Piri-piri', 'pizzas.chickenpiri.desc': 'Tomate, queijo, frango, pimentos e piri-piri',
    'pastas.bolognese.name': 'Esparguete à Bolonhesa', 'pastas.bolognese.desc': 'Caseiro com 100% de novilho',
    'pastas.carbonara.name': 'Esparguete Carbonara', 'pastas.carbonara.desc': 'Queijo parmesão, ovos e bacon',
    'pastas.ravioli.name': 'Ravioli al Pesto', 'pastas.ravioli.desc': 'Molho pesto verde',
    'pastas.tagliatelle.name': 'Tagliatelle Funghi', 'pastas.tagliatelle.desc': 'Cogumelos, fiambre e natas',
    'pastas.pennedelmare.name': 'Penne del Mare', 'pastas.pennedelmare.desc': 'Gambas, tomate cherry, azeitonas e rúcula',
    'pastas.nero.name': 'Esparguete Negro com Gambão', 'pastas.nero.desc': 'Gambão, tomate cherry e piri-piri',
    'chicken.piripiri.name': 'Frango Piri-piri', 'chicken.piripiri.desc': '½ frango no osso, marinado e grelhado na brasa, servido com batatas fritas caseiras',
    'chicken.breastgrilled.name': 'Peito de Frango Grelhado na Brasa', 'chicken.breastgrilled.desc': 'Servido com batatas fritas caseiras e salada',
    'kebabs.chicken.name': 'Espetada de Frango', 'kebabs.chicken.desc': 'Preparada na casa e grelhada na brasa, servida com salada e batatas gratinadas',
    'kebabs.kingprawn.name': 'Espetada de Frango e Gambão', 'kebabs.kingprawn.desc': 'Preparada na casa e grelhada na brasa, servida com salada e batatas gratinadas',
    'kebabs.satay.name': 'Espetada Satay de Frango', 'kebabs.satay.desc': 'Com molho caseiro cremoso de amendoim, servida com salada e batatas gratinadas',
    'breakfast.fullenglish.name': 'Pequeno-Almoço Inglês Completo', 'breakfast.fullenglish.desc': 'Ovos a gosto (estrelados, mexidos ou escalfados), bacon, salsichas, feijão cozinhado, tomate grelhado, cogumelos e torrada',
  },
  es: {
    'nav.menu': 'Menú', 'nav.story': 'Nuestra Historia', 'nav.gallery': 'Galería',
    'nav.reserve': 'Reservar', 'nav.location': 'Ubicación', 'nav.cta': 'Reservar Mesa',
    'hero.title': 'Donde Cada Bocado<br /><em>Cuenta una Historia</em>',
    'hero.sub': 'Carnes a la brasa, marisco fresco del Atlántico,<br />y sabores portugueses con alma — abiertos todos los días desde las 9h.',
    'hero.cta1': 'Reservar Mesa', 'hero.cta2': 'Explorar el Menú', 'hero.scroll': 'Desliza para descubrir',
    'badge.flame.title': 'A la Brasa', 'badge.flame.desc': 'Cocinado sobre fuego real para un sabor auténtico y ahumado',
    'badge.pig.title': 'Cerdo Negro Certificado', 'badge.pig.desc': 'Cerdo negro del Alentejo en libertad — cortes premiados y de calidad superior',
    'badge.seafood.title': 'Marisco Fresco del Atlántico', 'badge.seafood.desc': 'Captura local servida el mismo día',
    'badge.produce.title': 'Productos Locales', 'badge.produce.desc': 'Ingredientes de temporada de productores regionales de confianza',
    'menu.eyebrow': 'Lo Que Servimos', 'menu.title': 'Un Menú para Cada Antojo',
    'menu.sub': 'Desde un ligero couvert hasta un espectacular filete en piedra — hay algo para todos en Central Café.',
    'tab.starters': 'Entrantes', 'tab.salads': 'Ensaladas', 'tab.burgers': 'Hamburguesas',
    'tab.steakhouse': 'Steakhouse', 'tab.stone': 'Experiencia en Piedra', 'tab.blackpig': 'Cerdo Negro',
    'tab.fish': 'Pescado a la Brasa', 'tab.specialties': 'Especialidades', 'tab.sides': 'Guarniciones',
    'tab.kids': 'Niños', 'tab.wraps': 'Wraps', 'tab.baguettes': 'Bocadillos',
    'tab.pizzas': 'Pizzas', 'tab.pastas': 'Pastas', 'tab.chicken': 'Pollo',
    'tab.kebabs': 'Pinchos', 'tab.breakfast': 'Desayuno',
    'panel.starters': 'Couvert servido con salsa a elegir: pimienta, champiñones, queso azul, BBQ o mayonesa de ajo',
    'panel.salads': 'Elaboradas con los ingredientes más frescos de nuestros productores locales',
    'panel.burgers': 'Hamburguesa de ternera madurada a la brasa — sencilla y deliciosa. Todas servidas con patatas fritas caseras.',
    'panel.steakhouse': 'Selecciones cortadas a mano, servidas con patatas fritas caseras, ensalada gourmet y una salsa. Elija entre: pimienta, champiñones, queso azul, BBQ o mayonesa de ajo.',
    'panel.stone': 'Todos servidos con 3 salsas: pimienta, champiñones y queso azul — junto con patatas fritas caseras y ensalada gourmet.',
    'panel.blackpig': 'Crianza libre — famoso por su carne jugosa. Cerdo Negro del Alentejo Certificado, servido con patatas fritas caseras y ensalada gourmet.',
    'panel.fish': 'A la brasa, servido con verduras hervidas variadas y patata. Puede contener espinas.',
    'panel.specialties': 'Los platos de los que más se enorgullecen nuestros chefs — sabores portugueses clásicos con el toque de Central Café.',
    'panel.sides': 'Todo preparado al momento cuando realiza su pedido.',
    'panel.kids': 'Los más pequeños también merecen buena comida — todo hecho al momento, solo en porciones menores.',
    'panel.wraps': 'Solo disponibles en el almuerzo — rellenos frescos en un wrap de harina suave.',
    'panel.baguettes': 'Bocadillos rústicos en baguette francesa — rellenos generosos, gran sabor.',
    'panel.pizzas': 'Pizzas horneadas en piedra, elaboradas al momento.',
    'panel.pastas': 'Platos de pasta casera — ingredientes frescos, recetas clásicas.',
    'panel.chicken': 'Pollo a la brasa — servido con patatas fritas caseras.',
    'panel.kebabs': 'Preparados en casa y a la brasa — servidos con ensalada y patatas gratinadas.',
    'panel.breakfast': 'Servido todos los días desde las 9h — el inicio perfecto para su mañana en el Algarve.',
    'tag.new': 'Nuevo',
    'stone.title': 'Cocínalo a Tu Manera',
    'stone.desc': 'Su filete llega sobre una piedra volcánica ardiente en su mesa. Usted controla el punto de cocción, cada bocado. Una experiencia gastronómica interactiva como ninguna otra.',
    'spot.eyebrow': 'Recomendación del Chef', 'spot.title': 'Penne con Gambas',
    'spot.desc': 'Gambas del Atlántico salteadas con penne, rúcula silvestre, tomates cherry y nuestra salsa especial — un plato que captura el alma de la costa del Algarve en cada bocado.',
    'spot.cta': 'Reservar para Probarlo',
    'story.eyebrow': 'Nuestra Historia', 'story.title': 'Pasión en el Plato,<br />Cada Día',
    'story.p1': 'Central Café nació de una creencia sencilla: que la buena comida, el servicio cálido y un entorno hermoso pueden convertir cualquier comida en un recuerdo. Situado en el corazón de Carvoeiro — uno de los pueblos costeros más queridos del Algarve — combinamos la tradición portuguesa con un toque internacional.',
    'story.p2': 'Nuestra cocina se basa en productos de origen local, Cerdo Negro del Alentejo certificado en régimen extensivo y marisco del Atlántico entregado fresco cada día. Cada filete a la brasa, cada hamburguesa artesana, cada plato de pasta lleva el mismo compromiso — los mejores ingredientes, tratados con cuidado.',
    'story.p3': 'Ya sea desayunando en la terraza o reuniéndose con la familia en un largo almuerzo del domingo, Central Café es su hogar lejos de casa en la costa del Algarve.',
    'story.stat1': 'Platos en Menú', 'story.stat2': 'Abierto Cada Día', 'story.stat3': 'Reseñas',
    'badge.blackpig': 'Cerdo Negro', 'badge.certified': 'Certificado',
    'gallery.eyebrow': 'De Nuestra Cocina', 'gallery.title': 'Un Festín para la Vista',
    'testi.eyebrow': 'Reseñas de Clientes', 'testi.title': 'Lo Que Dicen Nuestros Clientes',
    'res.eyebrow': 'Reservar Mesa', 'res.title': 'Reserve Su<br />Noche Perfecta',
    'res.desc': 'Esperamos recibirle con agrado. Rellene el formulario y nuestro equipo confirmará su reserva en pocas horas.',
    'res.hours.title': 'Horario de Apertura', 'res.phone.title': 'Llámenos', 'res.addr.title': 'Dirección',
    'form.fname': 'Nombre', 'form.lname': 'Apellido', 'form.email': 'Email',
    'form.phone': 'Teléfono', 'form.date': 'Fecha', 'form.time': 'Hora',
    'form.guests': 'Comensales', 'form.notes': 'Peticiones Especiales',
    'form.submit': 'Confirmar Reserva', 'form.sending': 'Enviando…',
    'form.success': 'Gracias — confirmaremos su reserva en breve.',
    'form.error': 'Algo salió mal. Inténtelo de nuevo o llámenos directamente.',
    'ph.fname': 'María', 'ph.lname': 'García', 'ph.email': 'maria@ejemplo.es',
    'ph.phone': '+351 912 345 678', 'ph.notes': 'Requisitos dietéticos, ocasión especial, preferencia de asiento…',
    'sel.time': 'Seleccionar hora', 'sel.guests': '¿Cuántos?',
    'loc.eyebrow': 'Encuéntrenos', 'loc.title': 'En el Corazón de Carvoeiro',
    'loc.sub': 'Estrada do Farol, a pocos pasos del centro del pueblo y la playa de Carvoeiro — fácil de encontrar, imposible de olvidar.',
    'loc.addr.label': 'Dirección', 'loc.phone.label': 'Teléfono', 'loc.hours.label': 'Horario',
    'loc.hours.val': 'Abierto Todos los Días — 09:00 a 23:00', 'loc.cuisine.label': 'Cocina', 'loc.cta': 'Reservar Mesa',
    'footer.menu': 'Menú', 'footer.visit': 'Visitar', 'footer.story': 'Nuestra Historia',
    'footer.work': 'Trabaja con Nosotros', 'footer.gallery': 'Galería',
    'footer.reservations': 'Reservas', 'footer.location': 'Ubicación & Horario',
    'footer.follow': 'Síguenos', 'footer.reviews': 'Más de 99 reseñas en TripAdvisor',
    'footer.wifi': 'Wi-Fi gratuito para clientes',
    'footer.starters': 'Entrantes & Couvert', 'footer.fsalads': 'Ensaladas',
    'footer.wraps': 'Wraps & Bocadillos', 'footer.pizzas': 'Pizzas & Pastas',
    'footer.burgers': 'Hamburguesas', 'footer.chicken': 'Pollo & Pinchos',
    'footer.steakhouse': 'Steakhouse', 'footer.fstone': 'Experiencia en Piedra',
    'footer.fpig': 'Cerdo Negro', 'footer.ffish': 'Pescado a la Brasa',
    'starters.breadbasket.name': 'Cesta de Pan', 'starters.breadbasket.desc': 'Pan recién horneado servido caliente',
    'starters.olives.name': 'Aceitunas Marinadas', 'starters.olives.desc': 'Aceitunas marinadas de la casa',
    'starters.sardinepate.name': 'Paté de Sardina', 'starters.sardinepate.desc': 'Por unidad',
    'starters.sheepscheese.name': 'Queso de Oveja', 'starters.sheepscheese.desc': 'Por unidad',
    'starters.couvertplatter.name': 'Tabla de Couvert', 'starters.couvertplatter.desc': 'Cesta de pan, mantequilla, aceitunas marinadas, paté de sardina y queso de oveja — todo incluido',
    'starters.soup.name': 'Sopa del Día', 'starters.soup.desc': 'Casera — pregunte a su camarero la selección de hoy',
    'starters.bruschetta.name': 'Bruschetta de Tomate y Mozzarella', 'starters.bruschetta.desc': 'Tomate y mozzarella sobre pan tostado',
    'starters.garlicbread.name': 'Pan de Ajo con Queso', 'starters.garlicbread.desc': 'Pan tostado con mantequilla de ajo y queso fundido',
    'starters.garlicprawns.name': 'Gambas al Ajillo', 'starters.garlicprawns.desc': 'Fritas con ajo, rodajas de limón y mayonesa de ajo de la casa',
    'starters.tempura.name': 'Gambones en Tempura', 'starters.tempura.desc': '5 unidades — gambones rebozados en tempura crujiente',
    'starters.clams.name': 'Almejas "Bulhão Pato"', 'starters.clams.desc': 'Cocinadas con ajo y vino blanco — un clásico de Portugal',
    'starters.mussels.name': 'Mejillones al Natural', 'starters.mussels.desc': 'Ajo y vino blanco — simples, frescos, perfectos',
    'starters.chickenwings.name': 'Alitas de Pollo Fritas', 'starters.chickenwings.desc': '6 unidades, con salsa BBQ',
    'starters.chourico.name': 'Chouriço a la Llama', 'starters.chourico.desc': 'Embutido curado portugués tradicional, flameado en la mesa',
    'starters.hamcheese.name': 'Tabla de Jamón Ahumado y Queso', 'starters.hamcheese.desc': 'Selección de jamón ahumado y queso',
    'starters.garlicmushrooms.name': 'Champiñones al Ajillo', 'starters.garlicmushrooms.desc': 'Salteados en mantequilla de ajo',
    'salads.caesar.name': 'César', 'salads.caesar.desc': 'Pechuga de pollo, huevo escalfado, lechuga, croutones, aderezo césar de la casa, parmesano',
    'salads.salmon.name': 'Salmón', 'salads.salmon.desc': 'Salmón ahumado y aguacate con un toque de limón',
    'salads.chicken.name': 'Pollo', 'salads.chicken.desc': 'Pechuga de pollo a la brasa con bacon y aguacate',
    'salads.mozzarella.name': 'Mozzarella', 'salads.mozzarella.desc': 'Mozzarella, tomate y albahaca',
    'burgers.specialone.name': 'El Especial', 'burgers.specialone.desc': '100% ternera, bacon, huevo frito, queso, tomate y cebolla',
    'burgers.double.name': 'Doble', 'burgers.double.desc': '100% ternera x2, queso, bacon, tomate y cebolla',
    'burgers.classic.name': 'Clásica', 'burgers.classic.desc': '100% ternera, lechuga, tomate y cebolla',
    'burgers.cheeseburger.name': 'Cheeseburger', 'burgers.cheeseburger.desc': '100% ternera, queso, lechuga, tomate y cebolla',
    'burgers.friedonion.name': 'Hamburguesa de Cebolla Frita', 'burgers.friedonion.desc': '100% ternera, queso, cebolla frita suave y tomate',
    'burgers.chickenpiri.name': 'Pollo Piri-Piri', 'burgers.chickenpiri.desc': 'Pechuga de pollo, queso, salsa piri-piri, tomate y cebolla',
    'burgers.veggie.name': 'Vegana', 'burgers.veggie.desc': 'Hamburguesa 100% vegetal, tomate y cebolla',
    'burgers.salmon.name': 'Salmón', 'burgers.salmon.desc': 'Salmón, queso crema, cebolla y tomate',
    'steakhouse.surfturf.name': 'Mar y Tierra', 'steakhouse.surfturf.desc': 'Filete y gambones a la brasa, con espárragos y patatas fritas caseras',
    'steakhouse.ribeye.name': 'Rib Eye', 'steakhouse.ribeye.desc': 'aprox. 300g — a la brasa',
    'steakhouse.tbone.name': 'T-Bone', 'steakhouse.tbone.desc': 'aprox. 400g — a la brasa',
    'steakhouse.sirloin.name': 'Solomillo', 'steakhouse.sirloin.desc': 'aprox. 280g — a la brasa',
    'steakhouse.fillet.name': 'Filete', 'steakhouse.fillet.desc': 'aprox. 280g — a la brasa, el corte más tierno',
    'steakhouse.peppersteak.name': 'Filete a la Pimienta', 'steakhouse.peppersteak.desc': 'Solomillo con salsa cremosa de pimienta, servido con verduras salteadas y patatas gratinadas',
    'stone.ribeye.name': 'Rib Eye a la Piedra', 'stone.ribeye.desc': 'aprox. 300g',
    'stone.tbone.name': 'T-Bone a la Piedra', 'stone.tbone.desc': 'aprox. 400g',
    'stone.sirloin.name': 'Solomillo a la Piedra', 'stone.sirloin.desc': 'aprox. 280g',
    'stone.fillet.name': 'Filete a la Piedra', 'stone.fillet.desc': 'aprox. 280g',
    'blackpig.tenderfillet.name': 'Filete Tierno', 'blackpig.tenderfillet.desc': 'aprox. 230g — a la brasa con salsa de nata y champiñones',
    'blackpig.secretos.name': 'Secretos', 'blackpig.secretos.desc': 'A la brasa — corte oculto muy apreciado, increíblemente jugoso',
    'blackpig.ribs.name': 'Costillar', 'blackpig.ribs.desc': 'A la brasa, servido con salsa BBQ',
    'fish.sardines.name': 'Sardinas', 'fish.sardines.desc': 'Servidas con patata tradicional y ensalada local',
    'fish.cod.name': 'Bacalao', 'fish.cod.desc': 'Lomo de bacalao en salazón',
    'fish.seabass.name': 'Lubina', 'fish.seabass.desc': 'Filete',
    'fish.salmon.name': 'Salmón', 'fish.salmon.desc': 'Filete',
    'fish.goldenbream.name': 'Dorada', 'fish.goldenbream.desc': 'Filete',
    'fish.tuna.name': 'Atún', 'fish.tuna.desc': 'Filete',
    'fish.fishcataplana.name': 'Cataplana de Pescado', 'fish.fishcataplana.desc': 'Guiso de pescado tradicional portugués en cataplana',
    'fish.seafoodcataplana.name': 'Cataplana de Mariscos', 'fish.seafoodcataplana.desc': 'Guiso de mariscos tradicional portugués en cataplana',
    'fish.musselscataplana.name': 'Cataplana de Mejillones', 'fish.musselscataplana.desc': 'Mejillones en cataplana portuguesa tradicional',
    'fish.vegcataplana.name': 'Cataplana Vegetariana', 'fish.vegcataplana.desc': 'Verduras de temporada en cataplana portuguesa tradicional',
    'specialties.tunasteak.name': 'Filete de Atún Local', 'specialties.tunasteak.desc': 'Con cebolla frita en cazuela de barro, servido con patatas cocidas',
    'specialties.portuguesesteak.name': 'Filete a la Portuguesa', 'specialties.portuguesesteak.desc': 'Solomillo en salsa de ajo y vino, coronado con una loncha de jamón presunto y patatas fritas caseras',
    'specialties.octopus.name': 'Pulpo a la Brasa', 'specialties.octopus.desc': 'Servido con patatas al horno en cazuela de barro',
    'sides.vegetables.name': 'Verduras Salteadas', 'sides.vegetables.desc': 'Verduras de temporada salteadas al momento',
    'sides.sauces.name': 'Salsas', 'sides.sauces.desc': 'Champiñones, pimienta, queso azul, BBQ, mayonesa de ajo, agridulce o salsa de soja',
    'sides.chips1.name': 'Patatas Fritas Caseras — 1 Persona', 'sides.chips1.desc': 'Peladas y cortadas a diario',
    'sides.chips2.name': 'Patatas Fritas Caseras — 2 Personas', 'sides.chips2.desc': 'Peladas y cortadas a diario',
    'sides.garlicmushrooms.name': 'Champiñones Salteados al Ajillo', 'sides.garlicmushrooms.desc': 'Salteados en mantequilla de ajo',
    'sides.chickenwings.name': 'Alitas de Pollo Fritas (5)', 'sides.chickenwings.desc': 'Crujientes y doradas',
    'sides.friedonions.name': 'Cebolla Frita', 'sides.friedonions.desc': 'Suave o crujiente',
    'sides.onionrings.name': 'Aros de Cebolla', 'sides.onionrings.desc': 'Aros de cebolla rebozados y dorados',
    'kids.fishfingers.name': 'Dedos de Pescado', 'kids.fishfingers.desc': 'Servidos con patatas fritas caseras',
    'kids.nuggets.name': 'Nuggets de Pollo', 'kids.nuggets.desc': 'Servidos con patatas fritas caseras',
    'kids.cheeseburger.name': 'Cheeseburger', 'kids.cheeseburger.desc': 'Servido con patatas fritas caseras',
    'kids.hotdog.name': 'Perrito Caliente', 'kids.hotdog.desc': 'Con cebolla frita casera, servido con patatas fritas de bolsa',
    'kids.spaghetti.name': 'Espagueti a la Boloñesa', 'kids.spaghetti.desc': 'Casero con 100% de ternera',
    'kids.pizza.name': 'Mini Pizza Margarita', 'kids.pizza.desc': 'Casera',
    'wraps.mozzarella.name': 'Mozzarella y Albahaca Fresca', 'wraps.mozzarella.desc': 'Mozzarella y albahaca fresca',
    'wraps.smokedsalmon.name': 'Salmón Ahumado', 'wraps.smokedsalmon.desc': 'Queso crema, rúcula y un chorrito de limón',
    'wraps.smokedham.name': 'Jamón Ahumado', 'wraps.smokedham.desc': 'Queso, tomates secos y rúcula',
    'wraps.tuna.name': 'Atún', 'wraps.tuna.desc': 'Cebolla, tomate, maíz y rúcula',
    'wraps.chicken.name': 'Pechuga de Pollo a la Brasa', 'wraps.chicken.desc': 'Cebolla frita, tomate y rúcula',
    'baguettes.smokedham.name': 'Jamón Ahumado', 'baguettes.smokedham.desc': 'Queso fresco, tomate seco y rúcula',
    'baguettes.chicken.name': 'Pechuga de Pollo a la Brasa', 'baguettes.chicken.desc': 'Bacon, cebolla frita, pimientos asados y rúcula',
    'baguettes.smokedsalmon.name': 'Salmón Ahumado', 'baguettes.smokedsalmon.desc': 'Queso crema, rúcula y un toque de limón',
    'baguettes.tuna.name': 'Atún', 'baguettes.tuna.desc': 'Cebolla, tomate, huevo cocido y rúcula',
    'baguettes.prawncocktail.name': 'Cóctel de Gambas', 'baguettes.prawncocktail.desc': 'Aguacate, tomate y rúcula',
    'baguettes.blt.name': 'BLT', 'baguettes.blt.desc': 'Bacon, lechuga y tomate',
    'pizzas.margherita.name': 'Margarita', 'pizzas.margherita.desc': 'Tomate, mozzarella di bufala y albahaca fresca',
    'pizzas.pepperoni.name': 'Pepperoni', 'pizzas.pepperoni.desc': 'Queso, tomate, pimientos y aceitunas',
    'pizzas.vegetarian.name': 'Vegetariana', 'pizzas.vegetarian.desc': 'Queso y tomate, pimientos asados, maíz, rúcula y tomates cherry',
    'pizzas.smokedham.name': 'Jamón Ahumado', 'pizzas.smokedham.desc': 'Queso y tomate, jamón ahumado, pimientos asados y aceitunas',
    'pizzas.tuna.name': 'Atún', 'pizzas.tuna.desc': 'Tomate, queso, cebolla, maíz y aceitunas',
    'pizzas.centralcafe.name': 'Central Café', 'pizzas.centralcafe.desc': 'Queso, cebolla, tomate, chorizo, aceitunas y orégano silvestre',
    'pizzas.chickenpiri.name': 'Pollo Piri-piri', 'pizzas.chickenpiri.desc': 'Tomate, queso, pollo, pimientos y piri-piri',
    'pastas.bolognese.name': 'Espagueti a la Boloñesa', 'pastas.bolognese.desc': 'Casero con 100% de ternera',
    'pastas.carbonara.name': 'Espagueti Carbonara', 'pastas.carbonara.desc': 'Queso parmesano, huevos y bacon',
    'pastas.ravioli.name': 'Ravioli al Pesto', 'pastas.ravioli.desc': 'Salsa pesto verde',
    'pastas.tagliatelle.name': 'Tagliatelle Funghi', 'pastas.tagliatelle.desc': 'Champiñones, jamón y nata',
    'pastas.pennedelmare.name': 'Penne del Mare', 'pastas.pennedelmare.desc': 'Gambas, tomates cherry, aceitunas y rúcula',
    'pastas.nero.name': 'Espagueti Negro con Gambones', 'pastas.nero.desc': 'Gambones, tomate cherry y piri-piri',
    'chicken.piripiri.name': 'Pollo Piri-piri', 'chicken.piripiri.desc': '½ pollo con hueso, marinado y a la brasa, servido con patatas fritas caseras',
    'chicken.breastgrilled.name': 'Pechuga de Pollo a la Brasa', 'chicken.breastgrilled.desc': 'Servido con patatas fritas caseras y ensalada',
    'kebabs.chicken.name': 'Pincho de Pollo', 'kebabs.chicken.desc': 'Elaborado en casa y a la brasa, servido con ensalada y patatas gratinadas',
    'kebabs.kingprawn.name': 'Pincho de Pollo y Gambones', 'kebabs.kingprawn.desc': 'Elaborado en casa y a la brasa, servido con ensalada y patatas gratinadas',
    'kebabs.satay.name': 'Pincho Satay de Pollo', 'kebabs.satay.desc': 'Con salsa casera cremosa de cacahuete, servido con ensalada y patatas gratinadas',
    'breakfast.fullenglish.name': 'Desayuno Inglés Completo', 'breakfast.fullenglish.desc': 'Huevos a su gusto (fritos, revueltos o escalfados), bacon, salchichas, alubias, tomate asado, champiñones y tostadas',
  },
  fr: {
    'nav.menu': 'Menu', 'nav.story': 'Notre Histoire', 'nav.gallery': 'Galerie',
    'nav.reserve': 'Réserver', 'nav.location': 'Localisation', 'nav.cta': 'Réserver une Table',
    'hero.title': 'Chaque Bouchée<br /><em>Raconte une Histoire</em>',
    'hero.sub': 'Viandes grillées, fruits de mer frais de l\'Atlantique,<br />et saveurs portugaises authentiques — ouverts tous les jours dès 9h.',
    'hero.cta1': 'Réserver une Table', 'hero.cta2': 'Explorer le Menu', 'hero.scroll': 'Faites défiler pour découvrir',
    'badge.flame.title': 'Grillé à la Flamme', 'badge.flame.desc': 'Cuit sur feu vif pour une saveur authentique et fumée',
    'badge.pig.title': 'Cochon Noir Certifié', 'badge.pig.desc': 'Cochon Noir de l\'Alentejo en liberté — coupes primées de qualité supérieure',
    'badge.seafood.title': 'Fruits de Mer Frais de l\'Atlantique', 'badge.seafood.desc': 'Pêche locale servie le jour même',
    'badge.produce.title': 'Produits Locaux', 'badge.produce.desc': 'Ingrédients de saison de producteurs régionaux de confiance',
    'menu.eyebrow': 'Ce Que Nous Servons', 'menu.title': 'Un Menu pour Toutes les Envies',
    'menu.sub': 'D\'un léger couvert à un steak spectaculaire sur la pierre — il y en a pour tous au Central Café.',
    'tab.starters': 'Entrées', 'tab.salads': 'Salades', 'tab.burgers': 'Burgers',
    'tab.steakhouse': 'Steakhouse', 'tab.stone': 'Expérience Pierre', 'tab.blackpig': 'Cochon Noir',
    'tab.fish': 'Poisson Grillé', 'tab.specialties': 'Spécialités', 'tab.sides': 'Accompagnements',
    'tab.kids': 'Enfants', 'tab.wraps': 'Wraps', 'tab.baguettes': 'Baguettes',
    'tab.pizzas': 'Pizzas', 'tab.pastas': 'Pâtes', 'tab.chicken': 'Poulet',
    'tab.kebabs': 'Brochettes', 'tab.breakfast': 'Petit-Déjeuner',
    'panel.starters': 'Couvert servi avec votre choix de sauce : poivre, champignons, fromage bleu, BBQ ou mayonnaise à l\'ail',
    'panel.salads': 'Préparées avec les ingrédients les plus frais de nos producteurs locaux',
    'panel.burgers': 'Burger de bœuf maturé grillé à la flamme — si simple et si délicieux. Tous servis avec des frites maison.',
    'panel.steakhouse': 'Sélections coupées à la main, servies avec frites maison, salade gourmet et une sauce. Choisissez parmi : poivre, champignons, fromage bleu, BBQ ou mayonnaise à l\'ail.',
    'panel.stone': 'Tous servis avec 3 sauces : poivre, champignons et fromage bleu — avec des frites maison et une salade gourmet.',
    'panel.blackpig': 'Élevage en liberté — célèbre pour sa viande juteuse. Cochon Noir de l\'Alentejo Certifié, servi avec frites maison et salade gourmet.',
    'panel.fish': 'Grillé à la flamme, servi avec légumes bouillis variés et pommes de terre. Peut contenir des arêtes.',
    'panel.specialties': 'Les plats dont nos chefs sont les plus fiers — saveurs portugaises classiques avec la touche du Central Café.',
    'panel.sides': 'Tout préparé frais au moment de votre commande.',
    'panel.kids': 'Les petits méritent aussi une bonne cuisine — tout fait maison, en portions réduites.',
    'panel.wraps': 'Servis uniquement au déjeuner — garnitures fraîches dans un wrap à la farine douce.',
    'panel.baguettes': 'Sandwichs rustiques en baguette — garnitures généreuses, grande saveur.',
    'panel.pizzas': 'Pizzas cuites sur pierre, préparées à la commande.',
    'panel.pastas': 'Plats de pâtes maison — ingrédients frais, recettes classiques.',
    'panel.chicken': 'Poulet grillé à la flamme — servi avec des frites maison.',
    'panel.kebabs': 'Préparés maison et grillés à la flamme — servis avec salade et pommes de terre gratinées.',
    'panel.breakfast': 'Servi tous les jours dès 9h — le début parfait pour votre matinée en Algarve.',
    'tag.new': 'Nouveau',
    'stone.title': 'Cuisinez à Votre Façon',
    'stone.desc': 'Votre steak arrive sur une pierre volcanique brûlante à votre table. Vous contrôlez la cuisson, chaque bouchée. Une expérience gastronomique interactive comme aucune autre.',
    'spot.eyebrow': 'Recommandation du Chef', 'spot.title': 'Penne aux Gambas',
    'spot.desc': 'Gambas de l\'Atlantique sautées avec des penne, de la roquette sauvage, des tomates cerises et notre sauce maison — une assiette qui capture l\'âme de la côte de l\'Algarve à chaque bouchée.',
    'spot.cta': 'Réserver pour le Déguster',
    'story.eyebrow': 'Notre Histoire', 'story.title': 'La Passion dans l\'Assiette,<br />Chaque Jour',
    'story.p1': 'Le Central Café est né d\'une conviction simple : que la bonne cuisine, le service chaleureux et un bel environnement peuvent transformer n\'importe quel repas en souvenir. Niché au cœur de Carvoeiro — l\'un des villages côtiers les plus aimés de l\'Algarve — nous mêlons la tradition portugaise à une touche internationale.',
    'story.p2': 'Notre cuisine repose sur des produits locaux, le Cochon Noir de l\'Alentejo certifié en élevage extensif et des fruits de mer de l\'Atlantique livrés frais chaque jour. Chaque steak grillé, chaque burger artisanal, chaque plat de pâtes porte le même engagement — les meilleurs ingrédients, traités avec soin.',
    'story.p3': 'Que vous preniez le petit-déjeuner en terrasse ou que vous vous réunissiez en famille pour un long déjeuner du dimanche, le Central Café est votre maison loin de chez vous sur la côte de l\'Algarve.',
    'story.stat1': 'Plats au Menu', 'story.stat2': 'Ouvert Chaque Jour', 'story.stat3': 'Avis',
    'badge.blackpig': 'Cochon Noir', 'badge.certified': 'Certifié',
    'gallery.eyebrow': 'De Notre Cuisine', 'gallery.title': 'Un Festin pour les Yeux',
    'testi.eyebrow': 'Avis des Clients', 'testi.title': 'Ce Que Disent Nos Clients',
    'res.eyebrow': 'Réserver une Table', 'res.title': 'Réservez Votre<br />Soirée Parfaite',
    'res.desc': 'Nous attendons votre visite avec plaisir. Remplissez le formulaire et notre équipe confirmera votre réservation en quelques heures.',
    'res.hours.title': 'Heures d\'Ouverture', 'res.phone.title': 'Appelez-nous', 'res.addr.title': 'Adresse',
    'form.fname': 'Prénom', 'form.lname': 'Nom', 'form.email': 'Email',
    'form.phone': 'Téléphone', 'form.date': 'Date', 'form.time': 'Heure',
    'form.guests': 'Couverts', 'form.notes': 'Demandes Spéciales',
    'form.submit': 'Confirmer la Réservation', 'form.sending': 'Envoi en cours…',
    'form.success': 'Merci — nous confirmerons votre réservation sous peu.',
    'form.error': 'Une erreur s\'est produite. Veuillez réessayer ou nous appeler directement.',
    'ph.fname': 'Marie', 'ph.lname': 'Dupont', 'ph.email': 'marie@exemple.fr',
    'ph.phone': '+351 912 345 678', 'ph.notes': 'Restrictions alimentaires, occasion spéciale, préférence de siège…',
    'sel.time': 'Sélectionner l\'heure', 'sel.guests': 'Combien ?',
    'loc.eyebrow': 'Nous Trouver', 'loc.title': 'Au Cœur de Carvoeiro',
    'loc.sub': 'Estrada do Farol, à quelques pas du centre du village et de la plage de Carvoeiro — facile à trouver, impossible à oublier.',
    'loc.addr.label': 'Adresse', 'loc.phone.label': 'Téléphone', 'loc.hours.label': 'Horaires',
    'loc.hours.val': 'Ouvert Tous les Jours — 09:00 à 23:00', 'loc.cuisine.label': 'Cuisine', 'loc.cta': 'Réserver une Table',
    'footer.menu': 'Menu', 'footer.visit': 'Visiter', 'footer.story': 'Notre Histoire',
    'footer.work': 'Travailler avec Nous', 'footer.gallery': 'Galerie',
    'footer.reservations': 'Réservations', 'footer.location': 'Localisation & Horaires',
    'footer.follow': 'Suivez-nous', 'footer.reviews': 'Plus de 99 avis sur TripAdvisor',
    'footer.wifi': 'Wi-Fi gratuit pour les clients',
    'footer.starters': 'Entrées & Couvert', 'footer.fsalads': 'Salades',
    'footer.wraps': 'Wraps & Baguettes', 'footer.pizzas': 'Pizzas & Pâtes',
    'footer.burgers': 'Burgers', 'footer.chicken': 'Poulet & Brochettes',
    'footer.steakhouse': 'Steakhouse', 'footer.fstone': 'Expérience Pierre',
    'footer.fpig': 'Cochon Noir', 'footer.ffish': 'Poisson Grillé',
    'starters.breadbasket.name': 'Corbeille de Pain', 'starters.breadbasket.desc': 'Pain fraîchement cuit, servi chaud',
    'starters.olives.name': 'Olives Marinées', 'starters.olives.desc': 'Olives marinées maison',
    'starters.sardinepate.name': 'Pâté de Sardine', 'starters.sardinepate.desc': 'À l\'unité',
    'starters.sheepscheese.name': 'Fromage de Brebis', 'starters.sheepscheese.desc': 'À l\'unité',
    'starters.couvertplatter.name': 'Plateau Couvert', 'starters.couvertplatter.desc': 'Corbeille de pain, beurre, olives marinées, pâté de sardine et fromage de brebis — tout compris',
    'starters.soup.name': 'Soupe du Jour', 'starters.soup.desc': 'Faite maison — demandez à votre serveur la sélection du jour',
    'starters.bruschetta.name': 'Bruschetta Tomate et Mozzarella', 'starters.bruschetta.desc': 'Tomate et mozzarella sur pain grillé',
    'starters.garlicbread.name': 'Pain à l\'Ail Gratiné', 'starters.garlicbread.desc': 'Pain grillé au beurre d\'ail et fromage fondu',
    'starters.garlicprawns.name': 'Gambas à l\'Ail', 'starters.garlicprawns.desc': 'Frites avec ail, quartiers de citron et mayonnaise à l\'ail maison',
    'starters.tempura.name': 'Gambas en Tempura', 'starters.tempura.desc': '5 pièces — gambas en tempura croustillante',
    'starters.clams.name': 'Palourdes "Bulhão Pato"', 'starters.clams.desc': 'Cuites à l\'ail et au vin blanc — un classique du Portugal',
    'starters.mussels.name': 'Moules Nature', 'starters.mussels.desc': 'Ail et vin blanc — simples, fraîches, parfaites',
    'starters.chickenwings.name': 'Ailes de Poulet Frites', 'starters.chickenwings.desc': '6 pièces, avec sauce BBQ',
    'starters.chourico.name': 'Chouriço Flambé', 'starters.chourico.desc': 'Saucisse séchée portugaise traditionnelle, flambée à table',
    'starters.hamcheese.name': 'Plateau Jambon Fumé et Fromage', 'starters.hamcheese.desc': 'Sélection de jambon fumé et fromage',
    'starters.garlicmushrooms.name': 'Champignons à l\'Ail', 'starters.garlicmushrooms.desc': 'Sautés au beurre d\'ail',
    'salads.caesar.name': 'César', 'salads.caesar.desc': 'Blanc de poulet, œuf poché, laitue, croûtons, sauce césar maison, parmesan',
    'salads.salmon.name': 'Saumon', 'salads.salmon.desc': 'Saumon fumé et avocat avec une touche de citron',
    'salads.chicken.name': 'Poulet', 'salads.chicken.desc': 'Blanc de poulet grillé à la flamme avec bacon et avocat',
    'salads.mozzarella.name': 'Mozzarella', 'salads.mozzarella.desc': 'Mozzarella, tomate et basilic',
    'burgers.specialone.name': 'Le Spécial', 'burgers.specialone.desc': '100% bœuf, bacon, œuf au plat, fromage, tomate et oignon',
    'burgers.double.name': 'Double', 'burgers.double.desc': '100% bœuf x2, fromage, bacon, tomate et oignon',
    'burgers.classic.name': 'Classique', 'burgers.classic.desc': '100% bœuf, laitue, tomate et oignon',
    'burgers.cheeseburger.name': 'Cheeseburger', 'burgers.cheeseburger.desc': '100% bœuf, fromage, laitue, tomate et oignon',
    'burgers.friedonion.name': 'Burger Oignon Frit', 'burgers.friedonion.desc': '100% bœuf, fromage, oignon frit fondant et tomate',
    'burgers.chickenpiri.name': 'Poulet Piri-Piri', 'burgers.chickenpiri.desc': 'Blanc de poulet, fromage, sauce piri-piri, tomate et oignon',
    'burgers.veggie.name': 'Végétarien', 'burgers.veggie.desc': 'Burger 100% végétal, tomate et oignon',
    'burgers.salmon.name': 'Saumon', 'burgers.salmon.desc': 'Saumon, fromage frais, oignon et tomate',
    'steakhouse.surfturf.name': 'Surf & Turf', 'steakhouse.surfturf.desc': 'Filet et gambas grillés à la flamme, avec asperges et frites maison',
    'steakhouse.ribeye.name': 'Rib Eye', 'steakhouse.ribeye.desc': 'env. 300g — grillé à la flamme',
    'steakhouse.tbone.name': 'T-Bone', 'steakhouse.tbone.desc': 'env. 400g — grillé à la flamme',
    'steakhouse.sirloin.name': 'Faux-Filet', 'steakhouse.sirloin.desc': 'env. 280g — grillé à la flamme',
    'steakhouse.fillet.name': 'Filet', 'steakhouse.fillet.desc': 'env. 280g — grillé à la flamme, la coupe la plus tendre',
    'steakhouse.peppersteak.name': 'Steak au Poivre', 'steakhouse.peppersteak.desc': 'Faux-filet avec sauce crémeuse au poivre, servi avec légumes sautés et gratin de pommes de terre',
    'stone.ribeye.name': 'Rib Eye sur Pierre', 'stone.ribeye.desc': 'env. 300g',
    'stone.tbone.name': 'T-Bone sur Pierre', 'stone.tbone.desc': 'env. 400g',
    'stone.sirloin.name': 'Faux-Filet sur Pierre', 'stone.sirloin.desc': 'env. 280g',
    'stone.fillet.name': 'Filet sur Pierre', 'stone.fillet.desc': 'env. 280g',
    'blackpig.tenderfillet.name': 'Filet Tendre', 'blackpig.tenderfillet.desc': 'env. 230g — grillé à la flamme avec sauce à la crème et champignons',
    'blackpig.secretos.name': 'Secretos', 'blackpig.secretos.desc': 'Grillé à la flamme — coupe cachée très prisée, incroyablement juteuse',
    'blackpig.ribs.name': 'Travers de Porc', 'blackpig.ribs.desc': 'Grillé à la flamme, servi avec sauce BBQ',
    'fish.sardines.name': 'Sardines', 'fish.sardines.desc': 'Servies avec pommes de terre traditionnelles et salade locale',
    'fish.cod.name': 'Morue', 'fish.cod.desc': 'Lomo de morue salée',
    'fish.seabass.name': 'Bar', 'fish.seabass.desc': 'Filet',
    'fish.salmon.name': 'Saumon', 'fish.salmon.desc': 'Filet',
    'fish.goldenbream.name': 'Daurade', 'fish.goldenbream.desc': 'Filet',
    'fish.tuna.name': 'Thon', 'fish.tuna.desc': 'Steak',
    'fish.fishcataplana.name': 'Cataplana de Poisson', 'fish.fishcataplana.desc': 'Ragoût de poisson portugais traditionnel en cataplana',
    'fish.seafoodcataplana.name': 'Cataplana de Fruits de Mer', 'fish.seafoodcataplana.desc': 'Ragoût de fruits de mer portugais traditionnel en cataplana',
    'fish.musselscataplana.name': 'Cataplana de Moules', 'fish.musselscataplana.desc': 'Moules en cataplana portugaise traditionnelle',
    'fish.vegcataplana.name': 'Cataplana Végétarienne', 'fish.vegcataplana.desc': 'Légumes de saison en cataplana portugaise traditionnelle',
    'specialties.tunasteak.name': 'Steak de Thon Local', 'specialties.tunasteak.desc': 'Avec oignons frits dans une poêle en terre cuite, servi avec pommes de terre bouillies',
    'specialties.portuguesesteak.name': 'Steak à la Portugaise', 'specialties.portuguesesteak.desc': 'Faux-filet en sauce à l\'ail et au vin, couronné d\'une tranche de jambon presunto et frites maison',
    'specialties.octopus.name': 'Poulpe Grillé', 'specialties.octopus.desc': 'Servi avec pommes de terre au four dans une poêle en terre cuite',
    'sides.vegetables.name': 'Légumes Sautés', 'sides.vegetables.desc': 'Légumes de saison sautés à la commande',
    'sides.sauces.name': 'Sauces', 'sides.sauces.desc': 'Champignons, poivre, fromage bleu, BBQ, mayonnaise à l\'ail, aigre-doux ou sauce soja',
    'sides.chips1.name': 'Frites Maison — 1 Personne', 'sides.chips1.desc': 'Épluchées et coupées chaque jour',
    'sides.chips2.name': 'Frites Maison — 2 Personnes', 'sides.chips2.desc': 'Épluchées et coupées chaque jour',
    'sides.garlicmushrooms.name': 'Champignons Sautés à l\'Ail', 'sides.garlicmushrooms.desc': 'Sautés au beurre d\'ail',
    'sides.chickenwings.name': 'Ailes de Poulet Frites (5)', 'sides.chickenwings.desc': 'Croustillantes et dorées',
    'sides.friedonions.name': 'Oignons Frits', 'sides.friedonions.desc': 'Fondants ou croustillants',
    'sides.onionrings.name': 'Rondelles d\'Oignon', 'sides.onionrings.desc': 'Rondelles d\'oignon dorées en beignet',
    'kids.fishfingers.name': 'Bâtonnets de Poisson', 'kids.fishfingers.desc': 'Servis avec frites maison',
    'kids.nuggets.name': 'Nuggets de Poulet', 'kids.nuggets.desc': 'Servis avec frites maison',
    'kids.cheeseburger.name': 'Cheeseburger', 'kids.cheeseburger.desc': 'Servi avec frites maison',
    'kids.hotdog.name': 'Hot Dog', 'kids.hotdog.desc': 'Avec oignon frit maison, servi avec chips',
    'kids.spaghetti.name': 'Spaghetti Bolognaise', 'kids.spaghetti.desc': 'Fait maison avec 100% bœuf',
    'kids.pizza.name': 'Mini Pizza Margherita', 'kids.pizza.desc': 'Faite maison',
    'wraps.mozzarella.name': 'Mozzarella et Basilic Frais', 'wraps.mozzarella.desc': 'Mozzarella et basilic frais',
    'wraps.smokedsalmon.name': 'Saumon Fumé', 'wraps.smokedsalmon.desc': 'Fromage frais, roquette et un filet de citron',
    'wraps.smokedham.name': 'Jambon Fumé', 'wraps.smokedham.desc': 'Fromage, tomates séchées et roquette',
    'wraps.tuna.name': 'Thon', 'wraps.tuna.desc': 'Oignon, tomate, maïs et roquette',
    'wraps.chicken.name': 'Blanc de Poulet Grillé', 'wraps.chicken.desc': 'Oignons frits, tomate et roquette',
    'baguettes.smokedham.name': 'Jambon Fumé', 'baguettes.smokedham.desc': 'Fromage frais, tomate séchée et roquette',
    'baguettes.chicken.name': 'Blanc de Poulet Grillé', 'baguettes.chicken.desc': 'Bacon, oignons frits, poivrons rôtis et roquette',
    'baguettes.smokedsalmon.name': 'Saumon Fumé', 'baguettes.smokedsalmon.desc': 'Fromage frais, roquette et une touche de citron',
    'baguettes.tuna.name': 'Thon', 'baguettes.tuna.desc': 'Oignon, tomate, œuf dur et roquette',
    'baguettes.prawncocktail.name': 'Cocktail de Crevettes', 'baguettes.prawncocktail.desc': 'Avocat, tomate et roquette',
    'baguettes.blt.name': 'BLT', 'baguettes.blt.desc': 'Bacon, laitue et tomate',
    'pizzas.margherita.name': 'Margherita', 'pizzas.margherita.desc': 'Tomate, mozzarella di bufala et basilic frais',
    'pizzas.pepperoni.name': 'Pepperoni', 'pizzas.pepperoni.desc': 'Fromage, tomate, poivrons et olives',
    'pizzas.vegetarian.name': 'Végétarienne', 'pizzas.vegetarian.desc': 'Fromage et tomate, poivrons grillés, maïs, roquette et tomates cerises',
    'pizzas.smokedham.name': 'Jambon Fumé', 'pizzas.smokedham.desc': 'Fromage et tomate, jambon fumé, poivrons rôtis et olives',
    'pizzas.tuna.name': 'Thon', 'pizzas.tuna.desc': 'Tomate, fromage, oignon, maïs et olives',
    'pizzas.centralcafe.name': 'Central Café', 'pizzas.centralcafe.desc': 'Fromage, oignon, tomate, chorizo, olives et origan sauvage',
    'pizzas.chickenpiri.name': 'Poulet Piri-piri', 'pizzas.chickenpiri.desc': 'Tomate, fromage, poulet, poivrons et piri-piri',
    'pastas.bolognese.name': 'Spaghetti Bolognaise', 'pastas.bolognese.desc': 'Fait maison avec 100% bœuf',
    'pastas.carbonara.name': 'Spaghetti Carbonara', 'pastas.carbonara.desc': 'Parmesan, œufs et bacon',
    'pastas.ravioli.name': 'Ravioli al Pesto', 'pastas.ravioli.desc': 'Sauce pesto verte',
    'pastas.tagliatelle.name': 'Tagliatelle Funghi', 'pastas.tagliatelle.desc': 'Champignons, jambon et crème',
    'pastas.pennedelmare.name': 'Penne del Mare', 'pastas.pennedelmare.desc': 'Crevettes, tomates cerises, olives et roquette',
    'pastas.nero.name': 'Spaghetti Noir aux Gambas', 'pastas.nero.desc': 'Gambas, tomate cerise et piri-piri',
    'chicken.piripiri.name': 'Poulet Piri-piri', 'chicken.piripiri.desc': '½ poulet avec os, mariné et grillé à la flamme, servi avec frites maison',
    'chicken.breastgrilled.name': 'Blanc de Poulet Grillé à la Flamme', 'chicken.breastgrilled.desc': 'Servi avec frites maison et salade',
    'kebabs.chicken.name': 'Brochette de Poulet', 'kebabs.chicken.desc': 'Préparée maison et grillée à la flamme, servie avec salade et gratin de pommes de terre',
    'kebabs.kingprawn.name': 'Brochette Poulet et Gambas', 'kebabs.kingprawn.desc': 'Préparée maison et grillée à la flamme, servie avec salade et gratin de pommes de terre',
    'kebabs.satay.name': 'Brochette Satay de Poulet', 'kebabs.satay.desc': 'Avec sauce crémeuse aux cacahuètes maison, servie avec salade et gratin de pommes de terre',
    'breakfast.fullenglish.name': 'Petit-Déjeuner Anglais Complet', 'breakfast.fullenglish.desc': 'Œufs à votre goût (au plat, brouillés ou pochés), bacon, saucisses, haricots à la tomate, tomate grillée, champignons et toast',
  },
  de: {
    'nav.menu': 'Speisekarte', 'nav.story': 'Unsere Geschichte', 'nav.gallery': 'Galerie',
    'nav.reserve': 'Reservieren', 'nav.location': 'Standort', 'nav.cta': 'Tisch Reservieren',
    'hero.title': 'Wo Jeder Bissen<br /><em>Eine Geschichte Erzählt</em>',
    'hero.sub': 'Auf Holzkohle gegrillte Steaks, frische Meeresfrüchte aus dem Atlantik,<br />und herzhafte portugiesische Aromen — täglich ab 9 Uhr geöffnet.',
    'hero.cta1': 'Tisch Reservieren', 'hero.cta2': 'Speisekarte Erkunden', 'hero.scroll': 'Scrollen zum Entdecken',
    'badge.flame.title': 'Auf Holzkohle Gegrillt', 'badge.flame.desc': 'Über echtem Feuer gekocht für authentischen Rauchgeschmack',
    'badge.pig.title': 'Schwarzes Schwein Zertifiziert', 'badge.pig.desc': 'Freilaufendes Alentejo-Schwarzschwein — preisgekrönte Premiumstücke',
    'badge.seafood.title': 'Frische Atlantik-Meeresfrüchte', 'badge.seafood.desc': 'Lokaler Fang, täglich frisch serviert',
    'badge.produce.title': 'Lokale Produkte', 'badge.produce.desc': 'Saisonale Zutaten von vertrauenswürdigen regionalen Erzeugern',
    'menu.eyebrow': 'Unser Angebot', 'menu.title': 'Eine Speisekarte für Jeden Geschmack',
    'menu.sub': 'Von einem leichten Couvert bis zum spektakulären Steak auf dem Stein — im Central Café ist für jeden etwas dabei.',
    'tab.starters': 'Vorspeisen', 'tab.salads': 'Salate', 'tab.burgers': 'Burger',
    'tab.steakhouse': 'Steakhouse', 'tab.stone': 'Stein-Erlebnis', 'tab.blackpig': 'Schwarzes Schwein',
    'tab.fish': 'Gegrillter Fisch', 'tab.specialties': 'Spezialitäten', 'tab.sides': 'Beilagen',
    'tab.kids': 'Kinder', 'tab.wraps': 'Wraps', 'tab.baguettes': 'Baguettes',
    'tab.pizzas': 'Pizzen', 'tab.pastas': 'Nudeln', 'tab.chicken': 'Huhn',
    'tab.kebabs': 'Spieße', 'tab.breakfast': 'Frühstück',
    'panel.starters': 'Couvert nach Wahl mit Sauce: Pfeffer, Pilze, Blauschimmelkäse, BBQ oder Knoblauchmayonnaise',
    'panel.salads': 'Mit den frischesten Zutaten unserer lokalen Erzeuger zubereitet',
    'panel.burgers': 'Gereifter Rindsburger vom Holzkohlegrill — einfach und köstlich. Alle mit hausgemachten Pommes serviert.',
    'panel.steakhouse': 'Handgeschnittene Auswahl, serviert mit hausgemachten Pommes, Gourmet-Salat und einer Sauce. Wählen Sie zwischen: Pfeffer, Pilze, Blauschimmelkäse, BBQ oder Knoblauchmayonnaise.',
    'panel.stone': 'Alle mit 3 Saucen serviert: Pfeffer, Pilze und Blauschimmelkäse — dazu hausgemachte Pommes und Gourmet-Salat.',
    'panel.blackpig': 'Freilandhaltung — bekannt für sein saftiges Fleisch. Zertifiziertes Alentejo-Schwarzschwein, serviert mit hausgemachten Pommes und Gourmet-Salat.',
    'panel.fish': 'Auf dem Holzkohlegrill, serviert mit gemischtem Gemüse und Kartoffeln. Kann Gräten enthalten.',
    'panel.specialties': 'Die Gerichte, auf die unsere Köche am stolzesten sind — klassische portugiesische Aromen mit dem Central-Café-Touch.',
    'panel.sides': 'Alles frisch auf Bestellung zubereitet.',
    'panel.kids': 'Auch die Kleinen verdienen gutes Essen — alles frisch zubereitet, nur in kleineren Portionen.',
    'panel.wraps': 'Nur zum Mittagessen erhältlich — frische Füllungen in einem weichen Mehlwrap.',
    'panel.baguettes': 'Rustikale Baguette-Sandwiches — großzügige Füllungen, großartiger Geschmack.',
    'panel.pizzas': 'Steinofenpizzen, frisch auf Bestellung zubereitet.',
    'panel.pastas': 'Hausgemachte Nudelgerichte — frische Zutaten, klassische Rezepte.',
    'panel.chicken': 'Auf dem Holzkohlegrill gegartes Huhn — mit hausgemachten Pommes serviert.',
    'panel.kebabs': 'Hausgemacht und auf dem Holzkohlegrill — mit Salat und Gratinkartoffeln serviert.',
    'panel.breakfast': 'Täglich ab 9 Uhr serviert — der perfekte Start in Ihren Algarve-Morgen.',
    'tag.new': 'Neu',
    'stone.title': 'Kochen Sie Nach Ihrem Geschmack',
    'stone.desc': 'Ihr Steak kommt auf einem glühenden Vulkanstein an Ihrem Tisch an. Sie bestimmen den Gargrad, jeden Bissen. Ein interaktives Gastronomie-Erlebnis wie kein anderes.',
    'spot.eyebrow': 'Empfehlung des Küchenchefs', 'spot.title': 'Penne mit Riesengarnelen',
    'spot.desc': 'Atlantik-Riesengarnelen mit Penne, wilder Rucola, Kirschtomaten und unserer Haussauce — ein Gericht, das die Seele der Algarve-Küste in jedem Bissen einfängt.',
    'spot.cta': 'Reservieren zum Probieren',
    'story.eyebrow': 'Unsere Geschichte', 'story.title': 'Leidenschaft auf dem Teller,<br />Jeden Tag',
    'story.p1': 'Das Central Café entstand aus einer einfachen Überzeugung: dass gutes Essen, herzlicher Service und eine schöne Umgebung jede Mahlzeit zu einer Erinnerung machen können. Im Herzen von Carvoeiro gelegen — einem der beliebtesten Küstendörfer der Algarve — verbinden wir portugiesische Tradition mit internationalem Flair.',
    'story.p2': 'Unsere Küche basiert auf lokal bezogenen Produkten, zertifiziertem Freiland-Schwarzschwein und täglich frisch gelieferten Atlantik-Meeresfrüchten. Jedes gegrillte Steak, jeder handgefertigte Burger, jedes Nudelgericht trägt dasselbe Versprechen — die besten Zutaten, mit Sorgfalt behandelt.',
    'story.p3': 'Ob Sie auf der Terrasse frühstücken oder sich mit der Familie zu einem langen Sonntagsmittagessen zusammenfinden — das Central Café ist Ihr zweites Zuhause an der Algarve-Küste.',
    'story.stat1': 'Gerichte auf der Karte', 'story.stat2': 'Täglich Geöffnet', 'story.stat3': 'Bewertungen',
    'badge.blackpig': 'Schwarzes Schwein', 'badge.certified': 'Zertifiziert',
    'gallery.eyebrow': 'Aus Unserer Küche', 'gallery.title': 'Ein Fest für die Augen',
    'testi.eyebrow': 'Gästebewertungen', 'testi.title': 'Was Unsere Gäste Sagen',
    'res.eyebrow': 'Tisch Reservieren', 'res.title': 'Reservieren Sie Ihren<br />Perfekten Abend',
    'res.desc': 'Wir freuen uns auf Ihren Besuch. Füllen Sie das Formular aus und unser Team bestätigt Ihre Reservierung innerhalb weniger Stunden.',
    'res.hours.title': 'Öffnungszeiten', 'res.phone.title': 'Rufen Sie Uns An', 'res.addr.title': 'Adresse',
    'form.fname': 'Vorname', 'form.lname': 'Nachname', 'form.email': 'E-Mail',
    'form.phone': 'Telefon', 'form.date': 'Datum', 'form.time': 'Uhrzeit',
    'form.guests': 'Gäste', 'form.notes': 'Besondere Wünsche',
    'form.submit': 'Reservierung Bestätigen', 'form.sending': 'Wird gesendet…',
    'form.success': 'Vielen Dank — wir werden Ihre Reservierung in Kürze bestätigen.',
    'form.error': 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
    'ph.fname': 'Maria', 'ph.lname': 'Müller', 'ph.email': 'maria@beispiel.de',
    'ph.phone': '+351 912 345 678', 'ph.notes': 'Diätetische Anforderungen, besonderer Anlass, Sitzplatzpräferenz…',
    'sel.time': 'Uhrzeit wählen', 'sel.guests': 'Wie viele?',
    'loc.eyebrow': 'Finden Sie Uns', 'loc.title': 'Im Herzen von Carvoeiro',
    'loc.sub': 'Estrada do Farol, wenige Schritte vom Dorfzentrum und dem Strand von Carvoeiro — leicht zu finden, unmöglich zu vergessen.',
    'loc.addr.label': 'Adresse', 'loc.phone.label': 'Telefon', 'loc.hours.label': 'Öffnungszeiten',
    'loc.hours.val': 'Täglich Geöffnet — 09:00 bis 23:00 Uhr', 'loc.cuisine.label': 'Küche', 'loc.cta': 'Tisch Reservieren',
    'footer.menu': 'Speisekarte', 'footer.visit': 'Besuchen', 'footer.story': 'Unsere Geschichte',
    'footer.work': 'Arbeiten mit Uns', 'footer.gallery': 'Galerie',
    'footer.reservations': 'Reservierungen', 'footer.location': 'Standort & Öffnungszeiten',
    'footer.follow': 'Folgen Sie Uns', 'footer.reviews': 'Über 99 Bewertungen auf TripAdvisor',
    'footer.wifi': 'Kostenloses WLAN für Gäste',
    'footer.starters': 'Vorspeisen & Couvert', 'footer.fsalads': 'Salate',
    'footer.wraps': 'Wraps & Baguettes', 'footer.pizzas': 'Pizzen & Nudeln',
    'footer.burgers': 'Burger', 'footer.chicken': 'Huhn & Spieße',
    'footer.steakhouse': 'Steakhouse', 'footer.fstone': 'Stein-Erlebnis',
    'footer.fpig': 'Schwarzes Schwein', 'footer.ffish': 'Gegrillter Fisch',
    'starters.breadbasket.name': 'Brotkorb', 'starters.breadbasket.desc': 'Frisch gebackenes Brot, warm serviert',
    'starters.olives.name': 'Marinierte Oliven', 'starters.olives.desc': 'Hausgemacht marinierte Oliven',
    'starters.sardinepate.name': 'Sardinenpastete', 'starters.sardinepate.desc': 'Pro Stück',
    'starters.sheepscheese.name': 'Schafskäse', 'starters.sheepscheese.desc': 'Pro Stück',
    'starters.couvertplatter.name': 'Couvert-Platte', 'starters.couvertplatter.desc': 'Brotkorb, Butter, marinierte Oliven, Sardinenpastete und Schafskäse — alles inklusive',
    'starters.soup.name': 'Tagessuppe', 'starters.soup.desc': 'Hausgemacht — fragen Sie Ihren Kellner nach der heutigen Auswahl',
    'starters.bruschetta.name': 'Tomaten-Mozzarella-Bruschetta', 'starters.bruschetta.desc': 'Tomate und Mozzarella auf geröstetem Brot',
    'starters.garlicbread.name': 'Knoblauchbrot mit Käse', 'starters.garlicbread.desc': 'Geröstetes Brot mit Knoblauchbutter und geschmolzenem Käse',
    'starters.garlicprawns.name': 'Knoblauchgarnelen', 'starters.garlicprawns.desc': 'Gebraten mit Knoblauch, Zitronenspalten und Knoblauch-Mayonnaise',
    'starters.tempura.name': 'Riesengarnelen in Tempura', 'starters.tempura.desc': '5 Stück — knusprige Tempura-Riesengarnelen',
    'starters.clams.name': 'Venusmuscheln "Bulhão Pato"', 'starters.clams.desc': 'Mit Knoblauch und Weißwein gekocht — ein Klassiker Portugals',
    'starters.mussels.name': 'Muscheln Natur', 'starters.mussels.desc': 'Knoblauch und Weißwein — einfach, frisch, perfekt',
    'starters.chickenwings.name': 'Gebratene Hähnchenflügel', 'starters.chickenwings.desc': '6 Stück, mit BBQ-Dip',
    'starters.chourico.name': 'Flambierter Chouriço', 'starters.chourico.desc': 'Traditionelle portugiesische Trockenwurst, am Tisch flambiert',
    'starters.hamcheese.name': 'Schinken-Käse-Platte', 'starters.hamcheese.desc': 'Auswahl an geräuchertem Schinken und Käse',
    'starters.garlicmushrooms.name': 'Knoblauchpilze', 'starters.garlicmushrooms.desc': 'In Knoblauchbutter angebraten',
    'salads.caesar.name': 'Caesar', 'salads.caesar.desc': 'Hähnchenbrust, pochiertes Ei, Salat, Croutons, Caesar-Dressing, Parmesan',
    'salads.salmon.name': 'Lachs', 'salads.salmon.desc': 'Geräucherter Lachs und Avocado mit einem Hauch Zitrone',
    'salads.chicken.name': 'Hähnchen', 'salads.chicken.desc': 'Gegrillte Hähnchenbrust mit Speck und Avocado',
    'salads.mozzarella.name': 'Mozzarella', 'salads.mozzarella.desc': 'Mozzarella, Tomate und Basilikum',
    'burgers.specialone.name': 'Der Spezielle', 'burgers.specialone.desc': '100% Rind, Speck, Spiegelei, Käse, Tomate und Zwiebel',
    'burgers.double.name': 'Doppel', 'burgers.double.desc': '100% Rind x2, Käse, Speck, Tomate und Zwiebel',
    'burgers.classic.name': 'Klassisch', 'burgers.classic.desc': '100% Rind, Salat, Tomate und Zwiebel',
    'burgers.cheeseburger.name': 'Cheeseburger', 'burgers.cheeseburger.desc': '100% Rind, Käse, Salat, Tomate und Zwiebel',
    'burgers.friedonion.name': 'Röstzwiebelburger', 'burgers.friedonion.desc': '100% Rind, Käse, weich gebratene Zwiebel und Tomate',
    'burgers.chickenpiri.name': 'Hähnchen Piri-Piri', 'burgers.chickenpiri.desc': 'Hähnchenbrust, Käse, Piri-Piri-Sauce, Tomate und Zwiebel',
    'burgers.veggie.name': 'Veggie', 'burgers.veggie.desc': '100% Gemüseburger, Tomate und Zwiebel',
    'burgers.salmon.name': 'Lachs', 'burgers.salmon.desc': 'Lachs, Frischkäse, Zwiebel und Tomate',
    'steakhouse.surfturf.name': 'Surf & Turf', 'steakhouse.surfturf.desc': 'Gegrilltes Filet und Riesengarnelen, mit Spargel und hausgemachten Pommes',
    'steakhouse.ribeye.name': 'Rib Eye', 'steakhouse.ribeye.desc': 'ca. 300g — auf dem Holzkohlegrill',
    'steakhouse.tbone.name': 'T-Bone', 'steakhouse.tbone.desc': 'ca. 400g — auf dem Holzkohlegrill',
    'steakhouse.sirloin.name': 'Rumpsteak', 'steakhouse.sirloin.desc': 'ca. 280g — auf dem Holzkohlegrill',
    'steakhouse.fillet.name': 'Filet', 'steakhouse.fillet.desc': 'ca. 280g — auf dem Holzkohlegrill, das zarteste Stück',
    'steakhouse.peppersteak.name': 'Pfeffersteak', 'steakhouse.peppersteak.desc': 'Rumpsteak mit cremiger Pfeffersauce, serviert mit sautiertem Gemüse und Gratin-Kartoffeln',
    'stone.ribeye.name': 'Rib Eye auf dem Stein', 'stone.ribeye.desc': 'ca. 300g',
    'stone.tbone.name': 'T-Bone auf dem Stein', 'stone.tbone.desc': 'ca. 400g',
    'stone.sirloin.name': 'Rumpsteak auf dem Stein', 'stone.sirloin.desc': 'ca. 280g',
    'stone.fillet.name': 'Filet auf dem Stein', 'stone.fillet.desc': 'ca. 280g',
    'blackpig.tenderfillet.name': 'Zartes Filet', 'blackpig.tenderfillet.desc': 'ca. 230g — gegrillt mit Rahmsauce und Pilzen',
    'blackpig.secretos.name': 'Secretos', 'blackpig.secretos.desc': 'Auf dem Holzkohlegrill — sehr begehrtes, unglaublich saftiges verborgenes Stück',
    'blackpig.ribs.name': 'Rippchen', 'blackpig.ribs.desc': 'Auf dem Holzkohlegrill, mit BBQ-Sauce serviert',
    'fish.sardines.name': 'Sardinen', 'fish.sardines.desc': 'Mit traditionellen Kartoffeln und lokalem Salat',
    'fish.cod.name': 'Kabeljau', 'fish.cod.desc': 'Lende von gesalzenem Kabeljau',
    'fish.seabass.name': 'Wolfsbarsch', 'fish.seabass.desc': 'Filet',
    'fish.salmon.name': 'Lachs', 'fish.salmon.desc': 'Filet',
    'fish.goldenbream.name': 'Goldbrasse', 'fish.goldenbream.desc': 'Filet',
    'fish.tuna.name': 'Thunfisch', 'fish.tuna.desc': 'Steak',
    'fish.fishcataplana.name': 'Fisch-Cataplana', 'fish.fishcataplana.desc': 'Traditioneller portugiesischer Fischeintopf im Cataplana-Topf',
    'fish.seafoodcataplana.name': 'Meeresfrüchte-Cataplana', 'fish.seafoodcataplana.desc': 'Traditioneller portugiesischer Meeresfrüchte-Eintopf im Cataplana-Topf',
    'fish.musselscataplana.name': 'Muschel-Cataplana', 'fish.musselscataplana.desc': 'Muscheln im traditionellen portugiesischen Cataplana-Topf',
    'fish.vegcataplana.name': 'Vegetarische Cataplana', 'fish.vegcataplana.desc': 'Saisonales Gemüse im traditionellen portugiesischen Cataplana-Topf',
    'specialties.tunasteak.name': 'Lokales Thunfischsteak', 'specialties.tunasteak.desc': 'Mit gebratenen Zwiebeln in einer Tontopfpfanne, mit gekochten Kartoffeln',
    'specialties.portuguesesteak.name': 'Portugiesisches Steak', 'specialties.portuguesesteak.desc': 'Rumpsteak in Knoblauch-Wein-Sauce, mit einer Scheibe Presunto-Schinken belegt und hausgemachten Pommes',
    'specialties.octopus.name': 'Gegrillter Oktopus', 'specialties.octopus.desc': 'Mit Ofenkartoffeln in einer Tontopfpfanne',
    'sides.vegetables.name': 'Sautiertes Gemüse', 'sides.vegetables.desc': 'Saisonales Gemüse, frisch auf Bestellung gebraten',
    'sides.sauces.name': 'Saucen', 'sides.sauces.desc': 'Pilze, Pfeffer, Blauschimmelkäse, BBQ, Knoblauch-Mayonnaise, Süß-Sauer oder Sojasoße',
    'sides.chips1.name': 'Hausgemachte Pommes — 1 Person', 'sides.chips1.desc': 'Täglich geschält und geschnitten',
    'sides.chips2.name': 'Hausgemachte Pommes — 2 Personen', 'sides.chips2.desc': 'Täglich geschält und geschnitten',
    'sides.garlicmushrooms.name': 'Gebratene Knoblauchpilze', 'sides.garlicmushrooms.desc': 'In Knoblauchbutter angebraten',
    'sides.chickenwings.name': 'Gebratene Hähnchenflügel (5)', 'sides.chickenwings.desc': 'Knusprig und goldbraun',
    'sides.friedonions.name': 'Gebratene Zwiebeln', 'sides.friedonions.desc': 'Weich oder knusprig',
    'sides.onionrings.name': 'Zwiebelringe', 'sides.onionrings.desc': 'Goldbraun ausgebackene Zwiebelringe',
    'kids.fishfingers.name': 'Fischstäbchen', 'kids.fishfingers.desc': 'Mit hausgemachten Pommes',
    'kids.nuggets.name': 'Hähnchen-Nuggets', 'kids.nuggets.desc': 'Mit hausgemachten Pommes',
    'kids.cheeseburger.name': 'Cheeseburger', 'kids.cheeseburger.desc': 'Mit hausgemachten Pommes',
    'kids.hotdog.name': 'Hot Dog', 'kids.hotdog.desc': 'Mit hausgemachten gebratenen Zwiebeln, mit Chips serviert',
    'kids.spaghetti.name': 'Spaghetti Bolognese', 'kids.spaghetti.desc': 'Hausgemacht mit 100% Rind',
    'kids.pizza.name': 'Mini-Margherita-Pizza', 'kids.pizza.desc': 'Hausgemacht',
    'wraps.mozzarella.name': 'Mozzarella und frisches Basilikum', 'wraps.mozzarella.desc': 'Mozzarella und frisches Basilikum',
    'wraps.smokedsalmon.name': 'Geräucherter Lachs', 'wraps.smokedsalmon.desc': 'Frischkäse, Rucola und ein Spritzer Zitrone',
    'wraps.smokedham.name': 'Geräucherter Schinken', 'wraps.smokedham.desc': 'Käse, getrocknete Tomaten und Rucola',
    'wraps.tuna.name': 'Thunfisch', 'wraps.tuna.desc': 'Zwiebel, Tomate, Mais und Rucola',
    'wraps.chicken.name': 'Gegrillte Hähnchenbrust', 'wraps.chicken.desc': 'Röstzwiebeln, Tomate und Rucola',
    'baguettes.smokedham.name': 'Geräucherter Schinken', 'baguettes.smokedham.desc': 'Frischkäse, getrocknete Tomate und Rucola',
    'baguettes.chicken.name': 'Gegrillte Hähnchenbrust', 'baguettes.chicken.desc': 'Speck, Röstzwiebeln, geröstete Paprika und Rucola',
    'baguettes.smokedsalmon.name': 'Geräucherter Lachs', 'baguettes.smokedsalmon.desc': 'Frischkäse, Rucola und eine Prise Zitrone',
    'baguettes.tuna.name': 'Thunfisch', 'baguettes.tuna.desc': 'Zwiebel, Tomate, gekochtes Ei und Rucola',
    'baguettes.prawncocktail.name': 'Garnelencocktail', 'baguettes.prawncocktail.desc': 'Avocado, Tomate und Rucola',
    'baguettes.blt.name': 'BLT', 'baguettes.blt.desc': 'Speck, Salat und Tomate',
    'pizzas.margherita.name': 'Margherita', 'pizzas.margherita.desc': 'Tomate, Mozzarella di Bufala und frisches Basilikum',
    'pizzas.pepperoni.name': 'Pepperoni', 'pizzas.pepperoni.desc': 'Käse, Tomate, Paprika und Oliven',
    'pizzas.vegetarian.name': 'Vegetarisch', 'pizzas.vegetarian.desc': 'Käse und Tomate, gegrillte Paprika, Mais, Rucola und Kirschtomaten',
    'pizzas.smokedham.name': 'Geräucherter Schinken', 'pizzas.smokedham.desc': 'Käse und Tomate, geräucherter Schinken, geröstete Paprika und Oliven',
    'pizzas.tuna.name': 'Thunfisch', 'pizzas.tuna.desc': 'Tomate, Käse, Zwiebel, Mais und Oliven',
    'pizzas.centralcafe.name': 'Central Café', 'pizzas.centralcafe.desc': 'Käse, Zwiebel, Tomate, Chorizo, Oliven und wilder Oregano',
    'pizzas.chickenpiri.name': 'Hähnchen Piri-piri', 'pizzas.chickenpiri.desc': 'Tomate, Käse, Hähnchen, Paprika und Piri-piri',
    'pastas.bolognese.name': 'Spaghetti Bolognese', 'pastas.bolognese.desc': 'Hausgemacht mit 100% Rind',
    'pastas.carbonara.name': 'Spaghetti Carbonara', 'pastas.carbonara.desc': 'Parmesan, Eier und Speck',
    'pastas.ravioli.name': 'Ravioli al Pesto', 'pastas.ravioli.desc': 'Grüne Pesto-Sauce',
    'pastas.tagliatelle.name': 'Tagliatelle Funghi', 'pastas.tagliatelle.desc': 'Pilze, Schinken und Sahne',
    'pastas.pennedelmare.name': 'Penne del Mare', 'pastas.pennedelmare.desc': 'Garnelen, Kirschtomaten, Oliven und Rucola',
    'pastas.nero.name': 'Schwarze Spaghetti mit Riesengarnelen', 'pastas.nero.desc': 'Riesengarnelen, Kirschtomaten und Piri-Piri',
    'chicken.piripiri.name': 'Hähnchen Piri-piri', 'chicken.piripiri.desc': '½ Hähnchen am Knochen, mariniert und auf dem Holzkohlegrill, mit hausgemachten Pommes',
    'chicken.breastgrilled.name': 'Gegrillte Hähnchenbrust', 'chicken.breastgrilled.desc': 'Mit hausgemachten Pommes und Salat',
    'kebabs.chicken.name': 'Hähnchenspieß', 'kebabs.chicken.desc': 'Hausgemacht und auf dem Holzkohlegrill, mit Salat und Gratin-Kartoffeln',
    'kebabs.kingprawn.name': 'Hähnchen- und Riesengarnelen-Spieß', 'kebabs.kingprawn.desc': 'Hausgemacht und auf dem Holzkohlegrill, mit Salat und Gratin-Kartoffeln',
    'kebabs.satay.name': 'Hähnchen-Satay-Spieß', 'kebabs.satay.desc': 'Mit cremiger Erdnusssauce, mit Salat und Gratin-Kartoffeln',
    'breakfast.fullenglish.name': 'Volles Englisches Frühstück', 'breakfast.fullenglish.desc': 'Eier nach Wahl (Spiegelei, Rührei oder pochiert), Speck, Würstchen, Baked Beans, gegrillte Tomate, Pilze und Toast',
  }
};

const langMeta = {
  en: { img: 'images/united-kingdom.png', alt: 'English flag',    code: 'English'  },
  pt: { img: 'images/portugal.png',       alt: 'Portuguese flag', code: 'Português' },
  es: { img: 'images/spain.png',          alt: 'Spanish flag',    code: 'Español'  },
  fr: { img: 'images/france.png',         alt: 'French flag',     code: 'Français' },
  de: { img: 'images/germany.png',        alt: 'German flag',     code: 'Deutsch'  }
};

function applyLang(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = t[el.dataset.i18nPh];
    if (val !== undefined) el.placeholder = val;
  });

  const meta = langMeta[lang];
  const flagEl = document.getElementById('lang-flag-display');
  const codeEl = document.getElementById('lang-code-display');
  if (flagEl) { flagEl.src = meta.img; flagEl.alt = meta.alt; }
  if (codeEl) codeEl.textContent = meta.code;

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem('cafe-lang', lang);
}

// Language dropdown wiring
const langSelector = document.getElementById('lang-selector');
const langToggleBtn = document.getElementById('lang-toggle');

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = langSelector.classList.toggle('open');
    langToggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.getElementById('lang-dropdown').querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      applyLang(opt.dataset.lang);
      langSelector.classList.remove('open');
      langToggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (!langSelector.contains(e.target)) {
      langSelector.classList.remove('open');
      langToggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      langSelector.classList.remove('open');
      langToggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Apply saved or default language on load
const savedLang = localStorage.getItem('cafe-lang');
if (savedLang && translations[savedLang]) applyLang(savedLang);

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile burger menu ────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.querySelector('.burger-open').style.display = open ? 'none' : 'block';
  burger.querySelector('.burger-close').style.display = open ? 'block' : 'none';
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.querySelector('.burger-open').style.display = 'block';
    burger.querySelector('.burger-close').style.display = 'none';
    document.body.style.overflow = '';
  });
});

// ── Menu tabs ─────────────────────────────────────────────
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.menu-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) panel.classList.add('active');
  });
});

// ── Scroll-reveal ─────────────────────────────────────────
const revealElements = () => {
  const els = document.querySelectorAll(
    '.menu-card, .badge-item, .testi-card, .chef-text, ' +
    '.chef-image-wrap, .reservation-text, .reservation-form, ' +
    '.spotlight-text, .spotlight-img, .section-header, .stone-hero'
  );
  els.forEach(el => el.classList.add('reveal'));
};

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements();
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Reservation form ──────────────────────────────────────
const form = document.getElementById('res-form');
const success = document.getElementById('form-success');

// Set min date to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = '#e53935';
      valid = false;
    }
  });

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  const lang = localStorage.getItem('cafe-lang') || 'en';
  const t = translations[lang] || translations.en;
  btn.textContent = t['form.sending'] || 'Sending…';
  btn.disabled = true;

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
    .then(() => {
      form.reset();
      btn.textContent = t['form.submit'] || 'Confirm Reservation';
      btn.disabled = false;
      success.classList.add('visible');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(() => { success.classList.remove('visible'); }, 6000);
    })
    .catch(() => {
      btn.textContent = t['form.submit'] || 'Confirm Reservation';
      btn.disabled = false;
      alert(t['form.error'] || 'Something went wrong. Please try again or call us directly.');
    });
});

// ── Gallery lightbox (simple) ─────────────────────────────
const galItems = document.querySelectorAll('.gal-item');

galItems.forEach(item => {
  item.addEventListener('click', () => {
    const bg = item.style.backgroundImage;
    const url = bg.replace(/url\(['"]?([^'"]+)['"]?\)/, '$1');

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.9);
      z-index:9999;display:flex;align-items:center;justify-content:center;
      cursor:zoom-out;animation:fadeIn .25s ease;
    `;
    const img = document.createElement('img');
    img.src = url.replace('w=600', 'w=1200').replace('w=900', 'w=1400');
    img.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;object-fit:contain;';
    overlay.appendChild(img);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// ── Smooth anchor offset (fixed nav) ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
