type IndustryLandingContent = {
  heading: string;
  description: string;
  scope: string;
  products: string[];
  priorities: { title: string; description: string }[];
  applications: { title: string; description: string; product: string }[];
  faqs: { question: string; answer: string }[];
  brief: string;
};

export const industryLandingContent: Record<string, IndustryLandingContent> = {
  cosmetics: {
    heading: "Custom Packaging for Beauty & Cosmetics",
    description: "Plan product boxes, gift sets, labels and carry bags around your beauty range, brand presentation and purchasing needs.",
    scope: "This page focuses on outer boxes, gift packaging and labels. Cosmetic products, formulations and primary containers are outside the scope of these packaging examples.",
    products: ["packaging", "gift-boxes", "label", "tote-bag"],
    priorities: [
      { title: "Fit the container", description: "Provide bottle or jar dimensions, closures and packed weight. Leave suitable clearance and discuss any internal support." },
      { title: "Coordinate the range", description: "Plan colours, artwork and information across different product sizes so the collection has a consistent appearance." },
      { title: "Match the sales channel", description: "Retail shelves, gift sets and online orders can need different packaging layers and presentation." },
    ],
    applications: [
      { title: "Single-product retail", description: "A product box and label for an individual bottle or jar. Confirm the information layout and actual container dimensions.", product: "packaging" },
      { title: "Beauty gift sets", description: "Group several items in a gift box and discuss the insert layout for a coordinated presentation.", product: "gift-boxes" },
      { title: "Branded labelling", description: "Discuss label size, application surface and use conditions for bottles, jars or outer packaging.", product: "label" },
    ],
    faqs: [
      { question: "Can packaging be coordinated across a product range?", answer: "Send the range of container dimensions, artwork and quantities by item. Shared design elements and size-specific layouts can be discussed together." },
      { question: "Can I enquire about a multi-product gift set?", answer: "Provide each product’s size and weight, the items per set and a reference layout. Box structure and insert requirements need confirmation." },
      { question: "Does this include cosmetic bottles or jars?", answer: "These examples concern external packaging and labels. If you need primary containers, state that separately so the scope can be clarified before quotation." },
      { question: "What should I send to start?", answer: "Container photos and dimensions, packaging type, artwork or references, quantities by item and delivery destination are useful starting points." },
    ],
    brief: "Share the bottle or jar dimensions, products per set, packaging types, quantities and any brand references.",
  },
  jewelry: {
    heading: "Custom Packaging for Jewelry Brands",
    description: "Discuss gift boxes, presentation inserts, carry bags and brand tags for jewelry collections, retail purchases and gifting.",
    scope: "The packaging concepts shown are illustrative. Insert materials, product-contact suitability and any protection requirements must be agreed for the actual jewelry.",
    products: ["gift-boxes", "tote-bag", "hang-tag", "label"],
    priorities: [
      { title: "Hold the piece in place", description: "Rings, earrings, pendants and chains need different positioning. Explain the piece dimensions and how it should be displayed." },
      { title: "Consider contact surfaces", description: "Discuss the materials touching the piece. Do not assume a decorative insert provides anti-tarnish or scratch protection." },
      { title: "Create a gift presentation", description: "Coordinate box opening, paper texture, branding and the carry bag around the desired customer experience." },
    ],
    applications: [
      { title: "Individual jewelry boxes", description: "A gift box with the insert layout discussed around a specific ring, pendant or pair of earrings.", product: "gift-boxes" },
      { title: "Retail carry bags", description: "A bag sized to the presentation box, with handles and branding coordinated for the store.", product: "tote-bag" },
      { title: "Collection tags", description: "Tags for brand or product information, with hole position and attachment agreed around the display.", product: "hang-tag" },
    ],
    faqs: [
      { question: "Can I request different inserts for different pieces?", answer: "Send photos and dimensions for each jewelry type. The positioning, contact materials and construction should be reviewed separately." },
      { question: "Will the packaging prevent tarnishing?", answer: "That cannot be assumed from the appearance. Any anti-tarnish requirement needs specific material suitability and agreed supporting evidence." },
      { question: "Can the box and bag share a design?", answer: "Provide the logo, colour references, box dimensions and expected bag contents. The coordinated design and print requirements can be discussed." },
      { question: "How should I describe a jewelry set?", answer: "List the pieces in the set with dimensions and the desired arrangement. Include whether each item should be removable or fixed in position." },
    ],
    brief: "Share the jewelry type, dimensions, pieces per set, desired presentation and estimated quantities.",
  },
  bakery: {
    heading: "Custom Packaging for Bakery Businesses",
    description: "Discuss bakery boxes, presentation windows, labels and carry bags around your cakes, pastries and takeaway service.",
    scope: "Food-contact suitability is not established by the illustrations. Materials, contact conditions and required documentation must be confirmed for the intended use and market.",
    products: ["brkery-boxes", "label", "tote-bag"],
    priorities: [
      { title: "Allow for the full product", description: "Include boards, toppings and decorations in the dimensions. Explain portions per box and the loading method." },
      { title: "Plan for carrying", description: "Discuss handles, bases, dividers and how the order is carried. Packaging must suit the actual contents and weight." },
      { title: "Define contact conditions", description: "Tell us about direct food contact, moisture, oil and temperature so material requirements can be reviewed." },
    ],
    applications: [
      { title: "Cake presentation", description: "A cake box planned around the board, total height and loading clearance, with carrying details to be confirmed.", product: "brkery-boxes" },
      { title: "Pastry & treat orders", description: "Discuss the item count, placement and whether a window or internal divider is needed.", product: "packaging" },
      { title: "Branded takeaway", description: "Coordinate labels and bags with the bakery box. Final information and application surfaces need confirmation.", product: "label" },
    ],
    faqs: [
      { question: "Can packaging contact food directly?", answer: "This needs confirmation for the selected material and actual use. Share the food type, contact duration, temperature and destination market." },
      { question: "Which dimensions matter for cake packaging?", answer: "Provide the board width and depth, total height with decorations, weight and the clearance needed to load the cake safely." },
      { question: "Can a window or handle be included?", answer: "Explain the visibility and carrying requirements. Window materials, handles and structure should be confirmed with the box design." },
      { question: "Does a bakery box automatically resist oil or moisture?", answer: "No. Describe the actual conditions so any material, lining or treatment requirements can be reviewed and confirmed." },
    ],
    brief: "Share the food type, board and product dimensions, portions per box, contact conditions and quantities.",
  },
  clothing: {
    heading: "Custom Packaging for Clothing Brands",
    description: "Coordinate garment boxes, carry bags, hang tags and labels for retail, gifting and your clothing brand’s order presentation.",
    scope: "Examples focus on printed packaging and brand accessories. Garment manufacturing and unconfirmed protective or environmental claims are outside this page’s scope.",
    products: ["packaging", "tote-bag", "hang-tag", "label"],
    priorities: [
      { title: "Fit the folded garment", description: "Use packed dimensions rather than garment measurements alone. Allow for sets, accessories and packing clearance." },
      { title: "Make information clear", description: "Plan tags and labels for the brand and supplied product information. Confirm the copy and any barcode requirements." },
      { title: "Separate retail and shipping", description: "A presentation box or shopping bag may need an additional outer layer for courier transport." },
    ],
    applications: [
      { title: "Garment presentation boxes", description: "Discuss a box for folded apparel, accessories or gift sets, based on the actual packed dimensions.", product: "packaging" },
      { title: "Store carry bags", description: "Coordinate bag size and branding with purchases from the shop, including multiple garments if needed.", product: "tote-bag" },
      { title: "Brand & product tags", description: "Plan front and back information, paper feel, hole positions and attachment for the garment range.", product: "hang-tag" },
    ],
    faqs: [
      { question: "How do I choose a garment box size?", answer: "Measure the garment as it will be folded and packed. Include accessories, wrapping and the number of items per order." },
      { question: "Can boxes, bags and tags share a design?", answer: "Send your artwork and a list of packaging components with quantities. Colour, placement and material differences should be reviewed together." },
      { question: "Can tags include product details or barcodes?", answer: "Supply the final information and barcode artwork. Print size, readability and any required scan checks need agreement before production." },
      { question: "Can the retail packaging also be used for shipping?", answer: "Not automatically. Explain the courier method, handling and packed weight so any additional outer protection can be discussed." },
    ],
    brief: "Share folded garment dimensions, items per order, retail or shipping use, required tags or labels and quantities.",
  },
  candle: {
    heading: "Custom Packaging for Candle Brands",
    description: "Discuss product boxes, gift packaging and labels around candle jars, gift sets and your brand’s retail presentation.",
    scope: "Packaging is for presentation and transport of unlit products. The illustrations do not demonstrate heat resistance, fire safety or tested transport performance.",
    products: ["packaging", "gift-boxes", "label", "tote-bag"],
    priorities: [
      { title: "Account for jar weight", description: "Provide the jar dimensions, lid and total weight. Glass products need an agreed support and packing arrangement." },
      { title: "Coordinate the collection", description: "Plan shared design elements across scents, jar sizes and seasonal sets while keeping supplied information clear." },
      { title: "Review the delivery method", description: "Retail presentation and courier transport can need different packaging layers and protection checks." },
    ],
    applications: [
      { title: "Single-candle packaging", description: "A product box sized to the jar and lid, with clearance and internal support reviewed for the project.", product: "packaging" },
      { title: "Candle gift sets", description: "A gift box for several candles or accessories, with arrangement and insert requirements to discuss.", product: "gift-boxes" },
      { title: "Jar & packaging labels", description: "Labels for brand presentation and supplied product information, matched to the application surface.", product: "label" },
    ],
    faqs: [
      { question: "Can you plan packaging around a glass candle jar?", answer: "Provide the jar photo, dimensions and packed weight. Support, clearance and any transport evaluation need to be agreed against the intended use." },
      { question: "Can several candles be packed as a gift set?", answer: "List each item and size with the desired layout. Discuss separation, support and how the contents will be loaded and removed." },
      { question: "Is the packaging heat resistant?", answer: "No heat or fire performance is implied. These examples are for unlit products; any special requirement needs separate review and supporting evidence." },
      { question: "What information should appear on the label?", answer: "Provide your final product and warning copy. Artwork layout can be discussed, but the packaging illustration does not verify the accuracy of that information." },
    ],
    brief: "Share jar and lid dimensions, packed weight, items per set, shipping or retail use and quantities.",
  },
  perfume: {
    heading: "Custom Packaging for Perfume Brands",
    description: "Plan outer boxes, gift sets, inserts and labels around your perfume bottles and the presentation of your fragrance collection.",
    scope: "The examples concern external packaging and labels, not perfume production or bottle manufacturing. Shipping requirements for the contents must be clarified separately.",
    products: ["packaging", "gift-boxes", "label", "tote-bag"],
    priorities: [
      { title: "Fit the complete bottle", description: "Include caps, pumps and bottle shape in the dimensions. Share the packed weight and preferred orientation." },
      { title: "Support glass contents", description: "Discuss the insert, clearance and packing layers for the actual bottle, rather than assuming the outer box alone prevents damage." },
      { title: "Present single items and sets", description: "Coordinate finishes and layout across bottles, sample sizes and gift combinations." },
    ],
    applications: [
      { title: "Fragrance retail boxes", description: "Outer packaging around a single bottle, with room for the cap and supplied product information.", product: "packaging" },
      { title: "Fragrance gift sets", description: "A presentation box for bottles or sample combinations, with the layout and inserts agreed per set.", product: "gift-boxes" },
      { title: "Coordinated labels", description: "Discuss bottle or outer-packaging labels against the actual surface, dimensions and final artwork.", product: "label" },
    ],
    faqs: [
      { question: "Does this page include perfume bottles?", answer: "The examples focus on outer packaging, inserts and labels. State primary-container requirements separately so the scope can be clarified." },
      { question: "How can the bottle be held in place?", answer: "Send a photo, full dimensions and weight. Insert material, positioning and suitability need review for the actual bottle." },
      { question: "Can I request packaging for a discovery set?", answer: "List the sample bottles and accessories, quantities per set and desired arrangement. Include the cap and pump dimensions." },
      { question: "Does a gift box make perfume suitable for courier shipping?", answer: "No. Transport packaging and any requirements related to the contents must be checked separately from the retail presentation." },
    ],
    brief: "Share bottle dimensions including caps, weight, items per set, desired finish, quantity and destination.",
  },
  "e-commerce": {
    heading: "Custom Packaging for E-commerce Brands",
    description: "Discuss shipping-oriented boxes, brand labels and order presentation around your products, packing workflow and delivery needs.",
    scope: "A visually appealing box is not proof of shipping performance. Material, construction and any transport checks must be agreed for the product and distribution route.",
    products: ["packaging", "label", "hang-tag"],
    priorities: [
      { title: "Define the protection needs", description: "Share product size, weight and fragility. Consider how the contents are supported and what outer protection is needed." },
      { title: "Keep packing practical", description: "Explain assembly, loading and sealing steps. Discuss flat storage and order variations alongside presentation." },
      { title: "Review package volume", description: "Avoid excessive empty space while allowing the required protection. Shipping cost needs the agreed packed dimensions and route." },
    ],
    applications: [
      { title: "Single-product orders", description: "A box planned around one product and the support it needs through the delivery journey.", product: "packaging" },
      { title: "Sealing & brand labels", description: "Discuss exterior branding or sealing labels against the carton surface and packing workflow.", product: "label" },
      { title: "Product information tags", description: "A tag for supplied product details or branding inside the order, with attachment requirements to confirm.", product: "hang-tag" },
    ],
    faqs: [
      { question: "Is a mailer-style box enough for a fragile item?", answer: "That depends on the product, material, internal support and delivery route. Describe these so the packing arrangement and any evaluation can be agreed." },
      { question: "Can packaging arrive flat for storage?", answer: "Specify your storage and assembly requirements. Flat delivery depends on the selected box construction." },
      { question: "Can one box fit several order combinations?", answer: "Send the common combinations with packed dimensions and weights. Fit, support and unused space should be reviewed for each combination." },
      { question: "Can you quote shipping from the product dimensions?", answer: "Product dimensions alone are not enough. Confirm the packaging, order quantity, packed dimensions, weight and destination for delivery planning." },
    ],
    brief: "Share product dimensions and weight, fragile or liquid contents, common order combinations, quantities and delivery route.",
  },
  "gift-shop": {
    heading: "Custom Packaging for Gift Shops",
    description: "Coordinate gift boxes, carry bags, labels and tags for a varied gift assortment, seasonal collections and in-store presentation.",
    scope: "Shown combinations are packaging ideas rather than customer case studies. Dimensions, materials and availability need confirmation for the actual gift assortment.",
    products: ["gift-boxes", "tote-bag", "label", "hang-tag"],
    priorities: [
      { title: "Cover the assortment", description: "Group products by packed size and weight to discuss a practical range of boxes and bags." },
      { title: "Build coordinated gift sets", description: "List the contents of each set and plan the arrangement, internal support and overall presentation." },
      { title: "Plan seasonal requirements", description: "Share expected quantities and required dates for seasonal artwork, sampling and delivery discussions." },
    ],
    applications: [
      { title: "Mixed-product gift boxes", description: "Combine several gift items in a presentation box with the layout planned around their sizes.", product: "gift-boxes" },
      { title: "Store carry bags", description: "Plan bag sizes for common purchases and coordinate branding with gift boxes or wrapping.", product: "tote-bag" },
      { title: "Seasonal gift tags", description: "Discuss gift messages, branding or product details with the final copy and attachment method.", product: "hang-tag" },
    ],
    faqs: [
      { question: "Can a small range of sizes cover different gifts?", answer: "Provide typical product groups and packed dimensions. A practical size range can be discussed, but each combination still needs enough clearance and support." },
      { question: "Can I request boxes and bags together?", answer: "List the components, artwork and quantities by item. Bag dimensions should be coordinated with the boxes and products they carry." },
      { question: "Can seasonal artwork be changed?", answer: "Send the artwork versions and quantities for each. Print setup, sampling and timing need confirmation before the seasonal order is agreed." },
      { question: "When should I enquire for a seasonal launch?", answer: "Share the required arrival date and destination early. Sampling, approval, production and transport should be planned as separate stages." },
    ],
    brief: "Share the gift assortment, common set combinations, packaging sizes, artwork versions, quantities and required arrival date.",
  },
};
