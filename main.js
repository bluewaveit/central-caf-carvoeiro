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
