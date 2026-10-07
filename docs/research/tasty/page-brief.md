# Blocksy Tasty home page recreation

## Scope and route map

Reference: `https://startersites.io/blocksy/tasty/`

Local route: `/` (the only page requested in this pass).

The reference navigation also points to Recipes, About, and Contact pages. Those pages are outside this one-page scope; links to those destinations point to the original reference site. No connection to the user's WordPress site is configured.

## Observed desktop structure

1. White masthead with centered Tasty wordmark, search control, and account control.
2. Navigation row with social links, Home / Recipes / About / Contact, and an orange Submit Recipe action.
3. Warm cream hero with faint culinary line art; left-hand recipe label, large two-line headline, author/time row, short description and two orange actions; large rounded food photograph at right.
4. Centered “Recipes of the Week” introduction and six recipe cards in a three-column grid, followed by a centered “View all Recipes” button.
5. “Recipes By Category” introduction and four darkened image tiles in one row.
6. Full-bleed split app promo: kitchen/tablet photo at left, pale peach copy panel and store badges at right.
7. Pale patterned chef section with centered intro and three circular chef portraits.
8. Darkened full-width photo with a centered community heading and three statistics.
9. Centered newsletter card with one email field and orange submit button.
10. Black trending-recipe strip with four round thumbnails and previous/next controls.
11. Four-column black footer and a copyright line.

## Visual rules observed

- White page base; cream hero / chef backgrounds; orange accent close to `#ed793f`; charcoal headings and footer.
- Centered content width is roughly 1,290 px at a 1,440 px browser width.
- Main heading is heavy, rounded-looking sans serif. Section headings are bold, centered, and around 36 px on desktop.
- Recipe cards use large landscape crops, white information panels, small orange category chips, and a circular author portrait.
- Desktop header has a centered brand row and a second navigation row. The second row stays visible while scrolling.
- The mobile version is implemented with a stacked hero, two-column category tiles, single-column recipes and chef cards, and a collapsible nav.

## Assets

The source page was visually inspected in Chrome. A direct HTTP read of the source was denied by the origin, so the implementation does not reuse or hotlink its image files. Local food and chef photographs were downloaded from the Unsplash CDN and are stored under `public/sites/tasty/images/`; this means the images are substitutes, not a pixel-identical asset match.

- `hero-pancakes.jpg`: Unsplash photo ID `photo-1671522636384-abaa828ec275` (pancakes with syrup).
- Other local image files use these Unsplash CDN photo IDs:

  | Local file | Photo ID |
  | --- | --- |
  | `recipe-pizza.jpg` | `photo-1513104890138-7c749659a591` |
  | `recipe-avocado.jpg` | `photo-1525351484163-7529414344d8` |
  | `recipe-salad.jpg` | `photo-1540420773420-3366772f4999` |
  | `recipe-bowl.jpg` | `photo-1490645935967-10de6ba17061` |
  | `recipe-berries.jpg` | `photo-1490474418585-ba9bad8fd0ea` |
  | `category-sweets.jpg` | `photo-1488477181946-6428a0291777` |
  | `category-burger.jpg` | `photo-1568901346375-23c9450c58cd` |
  | `category-drinks.jpg` | `photo-1514362545857-3bc16c4c7d1b` |
  | `category-pizza.jpg` | `photo-1579751626657-72bc17010498` |
  | `app-kitchen.jpg` | `photo-1556911220-bff31c812dba` |
  | `chef-nick.jpg` | `photo-1577219491135-ce391730fb2c` |
  | `chef-jacob.jpg` | `photo-1583394293214-28ded15ee548` |
  | `chef-melissa.jpg` | `photo-1580489944761-15a19d654956` |
  | `community-bg.jpg` | `photo-1556761175-b413da4baf72` |
- `food-doodles.svg`: locally authored decorative line pattern inspired by the reference's faint food illustrations.

## Interactions in the local page

- Search button opens a search dialog; results filter the recipe cards as the user types.
- Recipe category chips filter the visible cards; “View all Recipes” clears the filter.
- Category tiles link to the reference Recipes archive.
- Mobile navigation expands/collapses.
- Account control opens a local-only sign-in mockup; no account service is connected.
- Newsletter form validates an email and shows a local preview message; no email list is connected.
- Trending arrows rotate the four visible recipe teasers.
- Hero calls to action scroll to recipes. Footer and main navigation links to out-of-scope pages point to the reference site.

## Remaining differences / verification boundary

- Photographs, chef portraits, original WordPress theme typography, exact background drawings, and native theme hover behavior are not extracted from the reference. Current images are alternatives; this is a visual recreation, not a pixel-exact copy.
- Only the reference homepage is in scope. Recipes/About/Contact destination pages are not recreated here.
- Login, newsletter subscription, and recipe submission are presentation-only; there is no server or mailing-list integration.
- Compare at the same browser width and scroll point before describing the result as visually matched. Build success alone is not visual acceptance.
