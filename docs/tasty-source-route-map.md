# Tasty reference site: local route map

Source inspected: `https://startersites.io/blocksy/tasty/` (7 October 2026).

This map records the internal pages found while following the source site's menus, cards, author links, categories, pagination, and article links. The local site is a static export; page routes and assets are stored in this repository.

## Local pages

| Source page | Local route | Notes |
| --- | --- | --- |
| Home | `/` | Homepage and six featured article cards |
| Recipes archive, page 1 | `/recipes/` | Nine cards |
| Recipes archive, page 2 | `/recipes/page/2/` | Final article and pagination back to page 1 |
| About | `/about/` | Story, team, Grandma's Recipes, testimonials |
| Contact | `/contact/` | Contact details and preview-only form |
| Author Amie | `/author/admin_tasty/` | Ten articles |
| Aperitives category | `/category/aperitives/` | Three articles |
| Pizzas category | `/category/pizzas/` | One article |
| Salads category | `/category/salads/` | Three articles |
| Deserts category | `/category/deserts/` | Three articles |
| Soups category | `/category/soups/` | One article |

## Article pages

- `/2021/04/16/topping-marzipan-tart-cheesecake-sweet-lollipop/`
- `/2021/04/16/topping-carrot-cake-jujubes-lemon-drops/`
- `/2021/04/16/muffin-donut-souffle-piebear-claw-croissant/`
- `/2021/04/16/bearclaw-dragee-sweet-rolloat-mosering/`
- `/2021/04/16/gingerbread-donut-bear-claw/`
- `/2021/04/16/sweet-roll-chupa-chups-halvah-muffin/`
- `/2021/04/16/tootsie-donut-fruitcake-gummies/`
- `/2021/04/14/blueberry-buttermilk-pancakes/`
- `/2021/04/14/fennel-slaw-with-mint-vinaigrette/`
- `/2021/04/13/hello-world/` (Slow Cooker Beef Bourguignon)

## Route and content boundaries

- Source paths such as `/?page_id=7` lead back to the recipes list in this demo. Those links point to `/recipes/` locally.
- Article categories, author bylines, pagination, trending cards, and breadcrumbs all point to local pages.
- In-page anchors for recipe print and comments have local targets. Print uses the browser's print dialog.
- The source's social, legal, pricing, and roadmap links are `#` placeholders, not working pages. They were not recreated as false destinations; visible navigation links lead to actual local routes.
- Search and login controls remain absent per the earlier site-edit request.
- The contact addresses/phone numbers are sample data from the source demo, not verified Cavopack details. Contact and comment forms show a local preview notice and do not send or store submissions.
- Recipe card details preserve the inspected titles, categories, images, metadata, ingredients, and directions. Some source pages contain filler/lorem copy; this document does not claim to reproduce hidden WordPress behavior or external service functionality.
