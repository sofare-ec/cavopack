export type TastyRecipe = {
  slug: string;
  title: string;
  category: string[];
  image: string;
  date: string;
  excerpt: string;
  course: string;
  cuisine: string;
  difficulty: string;
  ingredients: string[];
  directions: string[];
};

const post = (date: string, slug: string) => `/${date}/${slug}/`;

export const productRouteSlugs: Record<string, string> = {
  "muffin-donut-souffle-piebear-claw-croissant": "packaging",
  "bearclaw-dragee-sweet-rolloat-mosering": "brkery-boxes",
  "gingerbread-donut-bear-claw": "label",
  "sweet-roll-chupa-chups-halvah-muffin": "hang-tag",
};

export const tastyRecipes: TastyRecipe[] = [
  { slug: "gift-boxes", title: "Customizable rigid gift boxes with consistent quality for bulk orders.", category: ["Aperitives"], image: "/sites/tasty/images/product-type-01.webp", date: "April 16, 2021", excerpt: "Customizable rigid gift boxes with consistent quality for bulk orders.", course: "Packaging", cuisine: "Custom", difficulty: "Custom", ingredients: [], directions: [] },
  { slug: "tote-bag", title: "Custom-branded tote bags with consistent quality for bulk orders.", category: ["Pizzas"], image: "/sites/tasty/images/product-type-02.webp", date: "April 16, 2021", excerpt: "Custom-branded tote bags with consistent quality for bulk orders.", course: "Pizzas", cuisine: "Italian", difficulty: "Medium", ingredients: ["Topping marzipan tart cheesecake sweet", "Powder sesame snaps powder sesame", "Croissant caramels candy canes fruitcake", "Sugar plum croissant cake cotton"], directions: ["Candy tart sesame snaps soufflé tart", "Gingerbread tootsie roll jujubes sweet roll", "Biscuit ice cream candy canes powder", "Gingerbread gingerbread lemon drops"] },
  { slug: "muffin-donut-souffle-piebear-claw-croissant", title: "Muffin Donut Soufflé Piebear Claw Croissant", category: ["Aperitives"], image: "/sites/tasty/images/product-type-03.webp", date: "April 16, 2021", excerpt: "I love tootsie roll sesame snaps croissant I love powder. Jelly beans I love jujubes. Marshmallow croissant ice cream soufflé. I love bonbon tootsie roll I love icing. I love powder jelly-o ice cream powder macaroon ice cream.", course: "Aperitives", cuisine: "Mediterranean", difficulty: "Medium", ingredients: ["Bear claw dragée sweet roll oat cake icing", "Ice cream sweet roll muffin", "Brownie soufflé biscuit marshmallow chocolate", "Bonbon macaroon cupcake dragée"], directions: ["Cheesecake caramels tiramisu I love toffee", "Wafer dragée I love jujubes cookie halvah", "Powder I love oat cake biscuit", "Pudding sweet halvah tiramisu lemon drops"] },
  { slug: "bearclaw-dragee-sweet-rolloat-mosering", title: "Bearclaw Dragée Sweet Rolloat Mosering", category: ["Salads"], image: "/sites/tasty/images/product-type-04.png", date: "April 16, 2021", excerpt: "Toffee dessert cake halvah topping. Powder I love oat cake biscuit. Brownie lemon drops I love cheesecake gummi bears lollipop cupcake. I love icing cake brownie cheesecake I love.", course: "Salads", cuisine: "Mexican", difficulty: "Easy", ingredients: ["Sweet jelly beans I love I love jelly halvah", "Cake ice cream lollipop lollipop chupa", "Macaroon bear claw I love", "Cheesecake icing pie croissant cotton candy"], directions: ["Candy canes ice cream chocolate bar donut", "Gummies danish cake lollipop I love croissant", "Muffin donut I love soufflé", "Oat cake bear claw jujubes jelly lemon"] },
  { slug: "gingerbread-donut-bear-claw", title: "Gingerbread Donut Bear Claw Powder", category: ["Aperitives"], image: "/sites/tasty/images/product-type-05.webp", date: "April 16, 2021", excerpt: "Sweet roll chupa chups halvah muffin sweet roll jujubes caramels cupcake chocolate bar. Chupa chups donut ice cream cupcake carrot cake oat cake sweet pastry jujubes.", course: "Aperitives", cuisine: "Italian", difficulty: "Easy", ingredients: ["Gingerbread donut bear claw dessert", "Bonbon croissant oat cake wafer", "I love cotton candy I love macaroon lollipop", "Candy canes I love chocolate candy cake"], directions: ["Cake lollipop gummies pastry cotton", "Caramels toffee sweet tiramisu", "Sweet roll wafer jujubes gingerbread", "Croissant tart dragée wafer marzipan"] },
  { slug: "sweet-roll-chupa-chups-halvah-muffin", title: "Sweet roll chupa chups halvah muffin", category: ["Deserts", "Salads"], image: "/sites/tasty/images/product-type-06.webp", date: "April 16, 2021", excerpt: "Liquorice sweet biscuit chocolate pudding. Candy canes jujubes cake gingerbread I love toffee powder. Topping cotton candy soufflé chocolate pie tart wafer liquorice.", course: "Deserts", cuisine: "French", difficulty: "Easy", ingredients: ["Dessert I love gummies caramels danish dragée", "Croissant tart dragée wafer marzipan", "Liquorice croissant chocolate cake", "Danish jujubes jelly beans toffee candy marzipan"], directions: ["Halvah brownie sesame snaps I love oat", "Candy biscuit sesame snaps tiramisu donut pastry", "Caramels dessert cake pudding macaroon", "Dessert I love gummies gummi bears"] },
  { slug: "tootsie-donut-fruitcake-gummies", title: "Tootsie Donut Fruitcake Gummies", category: ["Soups"], image: "/sites/tasty/images/nick-karvounis-ymyfbvw7og8-unsplash-800x530.jpg", date: "April 16, 2021", excerpt: "I love jelly beans dessert cotton candy I love macaroon. Lollipop cake I love cake cupcake chupa chups. Tootsie roll donut fruitcake gummies.", course: "Soups", cuisine: "", difficulty: "Medium", ingredients: ["Tootsie roll bear claw cheesecake cotton", "Cotton candy toffee powder jelly-o fruitcake", "Dessert tootsie roll cookie gummi bears", "Sugar plum fruitcake I love pudding"], directions: ["Bonbon croissant oat cake wafer carrot", "Bear claw cookie jelly biscuit candy macaroon", "Brownie lollipop cake fruitcake gingerbread", "Marshmallow soufflé lollipop tootsie roll jelly beans"] },
  { slug: "blueberry-buttermilk-pancakes", title: "Blueberry Buttermilk Pancakes", category: ["Deserts"], image: "/sites/tasty/images/monika-grabkowska-p1aohbit-ey-unsplash.jpeg", date: "April 14, 2021", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Sed adipiscing diam donec adipiscing tristique risus. Mattis ullamcorper velit sed ullamcorper.", course: "Uncategorized", cuisine: "French", difficulty: "Medium", ingredients: ["Massa placerat duis ultricies lacus", "Augue interdum velit euismod", "Orci ac auctor augue mauris augue", "Amet consectetur adipiscing elit", "Turpis egestas integer eget aliquet"], directions: ["Mattis vulputate enim nulla aliquet.", "Turpis egestas integer eget aliquet nibh praesent tristique magna sit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Cursus sit amet dictum sit amet justo donec enim", "Augue interdum velit euismod in pellentesque massa placerat"] },
  { slug: "fennel-slaw-with-mint-vinaigrette", title: "Fennel Slaw with Mint Vinaigrette", category: ["Salads"], image: "/sites/tasty/images/clarissa-carbungco-zczl4f8wopq-unsplash.jpg", date: "April 14, 2021", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Sed adipiscing diam donec adipiscing tristique risus. Mattis ullamcorper velit sed ullamcorper.", course: "Uncategorized", cuisine: "Italian", difficulty: "Easy", ingredients: ["Augue interdum velit euismod in pellentesque", "Massa placerat duis ultricies", "Consectetur a erat nam at lectus", "Amet consectetur adipiscing"], directions: ["Nunc id cursus metus aliquam", "Condimentum mattis pellentesque", "Arcu non sodales neque sodales", "Diam maecenas sed enim ut sem"] },
  { slug: "hello-world", title: "Slow Cooker Beef Bourguignon", category: ["Deserts"], image: "/sites/tasty/images/madie-hamilton-dz-hi4euwca-unsplash.jpg", date: "April 13, 2021", excerpt: "A slow cooker take on beef bourguignon, with tender beef and vegetables in a rich sauce.", course: "Uncategorized", cuisine: "French", difficulty: "Medium", ingredients: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Mattis vulputate enim nulla aliquet.", "Turpis egestas integer eget aliquet nibh", "Tincidunt id aliquet risus feugiat in."], directions: ["Orci ac auctor augue mauris augue", "Augue interdum velit euismod in pellentesque", "Massa placerat duis ultricies lacus", "Magna etiam tempor orci eu lobortis"] },
];

export const recipeHref = (recipe: TastyRecipe) => productRouteSlugs[recipe.slug] ? `/${productRouteSlugs[recipe.slug]}/` : recipe.slug === "gift-boxes" || recipe.slug === "tote-bag" ? `/${recipe.slug}/` : post(recipe.date.includes("13") ? "2021/04/13" : recipe.date.includes("14") ? "2021/04/14" : "2021/04/16", recipe.slug);

export const categorySlugs = ["aperitives", "pizzas", "salads", "deserts", "soups"] as const;
export const categoryTitle = (slug: string) => ({ aperitives: "Aperitives", pizzas: "Pizzas", salads: "Salads", deserts: "Deserts", soups: "Soups" }[slug as typeof categorySlugs[number]] ?? slug);

export const industries = [
  { title: "Cosmetics", slug: "cosmetics", image: "/sites/tasty/images/industry/cosmetics.webp" },
  { title: "Jewelry", slug: "jewelry", image: "/sites/tasty/images/industry/jewelry.webp" },
  { title: "Bakery", slug: "bakery", image: "/sites/tasty/images/industry/bakery.webp" },
  { title: "Clothing", slug: "clothing", image: "/sites/tasty/images/industry/clothing.webp" },
  { title: "Candle", slug: "candle", image: "/sites/tasty/images/industry/candle.webp" },
  { title: "Perfume", slug: "perfume", image: "/sites/tasty/images/industry/perfume.webp" },
  { title: "E-commerce", slug: "e-commerce", image: "/sites/tasty/images/industry/e-commerce.webp" },
  { title: "Gift shop", slug: "gift-shop", image: "/sites/tasty/images/industry/gift-shop.webp" },
];
