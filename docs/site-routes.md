# Cavopack 页面清单

## 保留页面

- `/`：首页。
- `/about/`：包装业务介绍、生产要求、合作流程和询单入口；工厂/车间图为示意参考。
- `/contact/`：公司、地址、电话和邮箱联系方式；保留独立询单模块，当前仅预览，不发送、不保存。
- `/industries/`：八个行业的总览入口页。
- 产品：`/gift-boxes/`、`/tote-bag/`、`/packaging/`、`/brkery-boxes/`、`/label/`、`/hang-tag/`。
- 行业：`/cosmetics/`、`/jewelry/`、`/bakery/`、`/clothing/`、`/candle/`、`/perfume/`、`/e-commerce/`、`/gift-shop/`。

首页产品标签、图片和标题指向同一产品页。About 的 Browse Products 指向首页 `/#products`。

六类产品是独立落地页，共用模板、独立标题与说明、规格、FAQ、相关产品和预选询单类别。首页 Get Custom Quote 指向对应产品页的 #message；WhatsApp 消息携带类别。样图为 AI 示意，需用用户供图替换；表单仍不发送、不保存。

八个行业是独立落地页，共用行业模板、独立标题与说明、包装组合、三个采购重点、三个应用概念、四个FAQ、行业询单。使用现有行业图和产品样图，明确为示意；不存在已完成客户案例声明。公司、产品类别页面和公共页脚继续保留。

## 已移除页面

- `/recipes/`、`/recipes/page/2/`。
- `/author/admin_tasty/`。
- `/category/aperitives/`、`/category/pizzas/`、`/category/salads/`、`/category/deserts/`、`/category/soups/`。
- 2021 年日期路径下的四个食谱文章。

这些无关页面不再生成，旧网址返回 404；不将其重定向到无关的包装页面。
