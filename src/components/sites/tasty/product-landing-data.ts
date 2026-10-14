export type ProductLandingContent = {
  heading: string;
  description: string;
  quoteType: string;
  styles: { name: string; description: string }[];
  specifications: { name: string; description: string }[];
  details: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const productLandingContent: Record<string, ProductLandingContent> = {
  "gift-boxes": {
    heading: "Custom Gift Boxes for Your Brand",
    description: "Start with the product you want to present. Discuss box dimensions, opening styles, inserts and brand finishes for your gift packaging project.",
    quoteType: "Gift boxes",
    styles: [
      { name: "Lid & base boxes", description: "A separate lid and base for a simple unboxing experience. Share the product dimensions and preferred fit." },
      { name: "Magnetic closure boxes", description: "Discuss a hinged opening, closure detail and whether a folding construction suits your project." },
      { name: "Drawer boxes", description: "A sliding opening for smaller gifts or sets. Consider pull tabs and inserts alongside the outer box." },
    ],
    specifications: [
      { name: "Size & fit", description: "Product dimensions, internal clearance and the number of items in each box." },
      { name: "Board & wrap", description: "Board construction, paper wrap, colour and surface texture to be confirmed." },
      { name: "Print & finish", description: "Artwork placement, foil, embossing or other desired finishes for review." },
      { name: "Inserts & accessories", description: "Product support, dividers, ribbons or other accessories you need." },
      { name: "Delivery format", description: "Discuss assembled or folding construction and transport space." },
    ],
    details: [
      { name: "Make room for what matters.", description: "Provide the dimensions and weight of the contents. We can discuss clearance, insert layout and how the products should be presented." },
      { name: "Define the finishing details.", description: "Use artwork or a reference image to explain colour, texture and decorative preferences. Confirm the appearance through agreed samples before production." },
    ],
    faqs: [
      { question: "Can the box include an insert?", answer: "Include your product dimensions, weight and a photo in the enquiry. Insert material and construction need to be confirmed for the specific project." },
      { question: "Can gift boxes be delivered flat?", answer: "This depends on the construction. Tell us if transport space is a priority so folding and assembled options can be discussed." },
      { question: "What is the minimum order quantity?", answer: "The order requirements depend on size, structure, materials and finishing. Share your estimated quantity to request a project-specific quotation." },
      { question: "How do I confirm the appearance?", answer: "Discuss sample type, cost and timing with us. Confirm the size, construction, artwork and finish before approving production." },
    ],
    related: ["tote-bag", "label", "hang-tag"],
  },
  "tote-bag": {
    heading: "Custom-Branded Bags for Your Business",
    description: "Discuss the size, material, handles and print requirements for bags that carry your products and present your brand.",
    quoteType: "Tote bags",
    styles: [
      { name: "Retail carry bags", description: "Plan the bag around the product or gift box it needs to carry, including space for easy loading." },
      { name: "Promotional bags", description: "Share the intended event or campaign, contents and branding requirements." },
      { name: "Gift presentation bags", description: "Coordinate the bag dimensions, handles and appearance with your gift packaging." },
    ],
    specifications: [
      { name: "Bag dimensions", description: "Width, height, base depth and the size of the contents." },
      { name: "Material", description: "Tell us the material you have in mind; availability and suitability need confirmation." },
      { name: "Handles", description: "Handle type, length, attachment and carrying comfort." },
      { name: "Branding", description: "Artwork, colours and placement on one or both sides." },
      { name: "Carrying requirements", description: "Contents, weight and intended use to discuss construction and reinforcement." },
    ],
    details: [
      { name: "Start with the contents.", description: "A bag should fit the actual product or box. Share its dimensions and weight, including any accessories that will be carried together." },
      { name: "Consider how it is carried.", description: "Discuss handle length, attachment and base construction. A load rating should only be stated after the agreed design has been evaluated." },
    ],
    faqs: [
      { question: "Which bag materials can I request?", answer: "Tell us your preferred material or share a reference photo. The material, printing method and production options will be confirmed during the enquiry." },
      { question: "How do I choose the bag size?", answer: "Provide the dimensions of the product or gift box and explain how it will be loaded. Include the depth, not just the front width and height." },
      { question: "Can the bag carry heavier products?", answer: "Share the packed weight and expected use. Handle attachment, base reinforcement and any load evaluation should be agreed before a carrying claim is made." },
      { question: "What affects the price?", answer: "Size, material, handles, printing, construction and quantity affect the quotation. Send your estimated quantity and delivery destination." },
    ],
    related: ["gift-boxes", "packaging", "hang-tag"],
  },
  "packaging": {
    heading: "Custom Packaging Boxes for Your Products",
    description: "Bring product protection and brand presentation together. Discuss box structures, material choices and printing around your product and distribution needs.",
    quoteType: "Packaging boxes",
    styles: [
      { name: "Retail product boxes", description: "Discuss shelf presentation, opening style and space for product information." },
      { name: "Mailer-style boxes", description: "Start with your shipping needs, contents and packed weight to review the structure." },
      { name: "Box & insert sets", description: "Consider a coordinated outer box and internal support for multiple or delicate items." },
    ],
    specifications: [
      { name: "Product dimensions", description: "Length, width, height, weight and internal clearance." },
      { name: "Structure", description: "Opening, closure, folding layout and assembly requirements." },
      { name: "Material", description: "Paperboard or corrugated construction to discuss against the intended use." },
      { name: "Printing", description: "Exterior and interior artwork, colour requirements and print coverage." },
      { name: "Distribution", description: "Retail handling, shipping method, inserts and packing arrangements." },
    ],
    details: [
      { name: "Plan for the whole journey.", description: "Explain whether the box is for shelf display, gifting or transport. Shipping protection requires its own agreed construction and evaluation." },
      { name: "Keep assembly practical.", description: "Share how your team packs the product and whether boxes should arrive flat or assembled. Consider opening, closure and storage alongside appearance." },
    ],
    faqs: [
      { question: "Is a retail box suitable for shipping?", answer: "Not automatically. Describe the shipping method and contents so transport protection and any additional outer packaging can be discussed." },
      { question: "Can I request printing inside the box?", answer: "Include the interior artwork and desired coverage in your brief. Feasibility and cost depend on material and construction." },
      { question: "Should I provide internal or external dimensions?", answer: "Please say which you are providing. Product dimensions and required internal space help avoid confusion during quotation and sampling." },
      { question: "What do you need for a quotation?", answer: "Box use, structure, size, material preference, artwork, quantity and delivery destination are useful. A reference photo is a good starting point if details are undecided." },
    ],
    related: ["label", "hang-tag", "gift-boxes"],
  },
  "brkery-boxes": {
    heading: "Custom Bakery Boxes for Your Brand",
    description: "Plan bakery packaging around the products you serve. Discuss size, opening styles, windows, handles and branding for your bakery business.",
    quoteType: "Bakery boxes",
    styles: [
      { name: "Cake boxes", description: "Provide the cake and board dimensions, including height, decorations and loading space." },
      { name: "Pastry & treat boxes", description: "Consider the number of items, portion size and whether dividers are needed." },
      { name: "Window presentation boxes", description: "Discuss product visibility, window placement and the intended food contact arrangement." },
    ],
    specifications: [
      { name: "Size & portions", description: "Product and board dimensions, height and items per box." },
      { name: "Material & contact", description: "Food type, direct or indirect contact, use conditions and documentation requirements." },
      { name: "Openings & windows", description: "Loading method, closure, visibility and window material." },
      { name: "Handles & inserts", description: "Carrying arrangements, bases, dividers and product support." },
      { name: "Brand presentation", description: "Artwork, colours and exterior print placement." },
    ],
    details: [
      { name: "Give the product enough space.", description: "Allow for boards, toppings and decorations as well as the food itself. Describe how items are loaded, carried and handed to the customer." },
      { name: "Specify the food contact conditions.", description: "Explain moisture, oil, temperature and whether food touches the packaging directly. Suitability and required evidence must be confirmed for the intended use." },
    ],
    faqs: [
      { question: "Can the box touch food directly?", answer: "That must be confirmed for the selected materials and intended use. Tell us the food type, contact conditions and destination market so relevant documentation can be discussed." },
      { question: "Can I request a window or handle?", answer: "Include your preferred window position or carrying method in the brief. Material, size, structure and suitability need project-specific confirmation." },
      { question: "What size should I provide for a cake box?", answer: "Include the cake board dimensions and the total height with toppings or decorations. Explain the clearance and loading method you need." },
      { question: "Can I request oil or moisture resistance?", answer: "Describe the actual use conditions. Material and any lining or treatment should be reviewed rather than assuming every bakery box has the same resistance." },
    ],
    related: ["label", "tote-bag", "packaging"],
  },
  "label": {
    heading: "Custom Labels for Your Products",
    description: "Discuss self-adhesive labels around your product surface, artwork and application needs. Start with size, shape and the conditions in which the label will be used.",
    quoteType: "Labels & stickers",
    styles: [
      { name: "Bottle & jar labels", description: "Share the container material, shape and dimensions of the labelling area." },
      { name: "Packaging & seal labels", description: "Discuss branding or sealing needs, the surface and how the packaging will be opened." },
      { name: "Product information labels", description: "Plan the space needed for product details, artwork and any variable information." },
    ],
    specifications: [
      { name: "Size & shape", description: "Label dimensions, shape and the available application area." },
      { name: "Surface & adhesive", description: "Container material, curvature and whether the label needs to be removable." },
      { name: "Use conditions", description: "Moisture, oil, temperature, refrigeration and handling." },
      { name: "Artwork & finish", description: "Colours, text legibility, desired finish and any barcode requirements." },
      { name: "Supply format", description: "Sheets or rolls; for machine application, winding and equipment requirements." },
    ],
    details: [
      { name: "Match the label to the surface.", description: "Glass, paper, plastic and curved containers can need different solutions. Share the actual surface and use conditions for material and adhesive review." },
      { name: "Plan the application method.", description: "For rolls, confirm core size, roll dimensions and winding direction against the equipment. For manual use, discuss a practical sheet or roll format." },
    ],
    faqs: [
      { question: "Are all labels waterproof?", answer: "No. Water resistance depends on the material, print, adhesive and conditions of use. Include moisture or refrigeration requirements in your enquiry." },
      { question: "Can labels be supplied on rolls?", answer: "Discuss roll or sheet requirements with us. For machine application, include the equipment requirements, core size and winding direction." },
      { question: "Can I request removable labels?", answer: "Explain the surface, required adhesion time and acceptable residue. Adhesive suitability should be confirmed on the intended surface." },
      { question: "What should I send for a quote?", answer: "Label size, shape, artwork, application surface, use conditions, supply format and quantity help define the project." },
    ],
    related: ["packaging", "brkery-boxes", "gift-boxes"],
  },
  "hang-tag": {
    heading: "Custom Hang Tags for Your Brand",
    description: "Bring branding and product information together on a custom hang tag. Discuss shapes, paper, print, hole positions and attachment details.",
    quoteType: "Hang tags",
    styles: [
      { name: "Brand presentation tags", description: "Focus on the logo, paper feel, shape and the overall presentation of the product." },
      { name: "Product information tags", description: "Allow room for the details customers need, including readable text or a supplied barcode." },
      { name: "Folded tags", description: "Discuss extra information space, fold position and how the tag will hang or open." },
    ],
    specifications: [
      { name: "Size & shape", description: "Finished dimensions, cut shape and fold requirements." },
      { name: "Paper & thickness", description: "Texture, colour, stiffness and preferred material to be confirmed." },
      { name: "Print & finish", description: "Front and back artwork, colours and desired decorative finishes." },
      { name: "Hole & attachment", description: "Hole position, string length, attachment method and assembly." },
      { name: "Information", description: "Product copy, barcode artwork and any variable data requirements." },
    ],
    details: [
      { name: "Consider the tag and attachment together.", description: "Specify the product, where the tag hangs and how it is attached. Hole position, string length and assembly affect the final presentation." },
      { name: "Keep the information readable.", description: "Supply final copy and artwork. Check small text, barcode size and front-to-back layout during proofing rather than relying on a decorative mockup." },
    ],
    faqs: [
      { question: "Can I print on both sides?", answer: "Include the front and back artwork in your enquiry. Printing and finishing choices will be reviewed against the selected paper and quantity." },
      { question: "Are strings included?", answer: "Specify whether you need tags only, separate strings or assembled tags. Attachment type, colour and length should be confirmed in the quotation." },
      { question: "Can tags include a barcode?", answer: "Provide the final barcode artwork and its intended use. Size, print contrast and any required scan checks should be agreed during proofing." },
      { question: "Can I request a custom shape?", answer: "Send the shape or a reference image with dimensions. Cut shape, hole position and finishing feasibility need confirmation for the project." },
    ],
    related: ["tote-bag", "gift-boxes", "label"],
  },
};
