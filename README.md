# Cavopack
包装产品 B2B 询单网站：https://www.cavopack.com/

## 开发与发布

- Node.js 24 或以上；使用 `npm ci` 安装依赖。
- `npm run dev`：本地开发。
- `npm run build`：生成静态网站到 `out/`。
- `npm run lint`、`npm run typecheck`：代码检查。
- 推送到 `main` 后，`.github/workflows/deploy-pages.yml` 自动发布至 GitHub Pages。
- 本地查看生成的网站：`python3 -m http.server 3000 --directory out`。
- 更新后检查发布任务和线上页面，不能把 Git 推送成功当作线上验收。

## 网站结构

- 首页：包装轮播、工厂介绍、六类产品、八个行业、包装流程、联系页脚和固定导航。
- 产品与行业数据：`src/components/sites/tasty/tasty-data.ts`。
- 六类产品共用 `product-landing-page.tsx` 版式，各自内容见 `product-landing-data.ts`；样图位于 `public/sites/tasty/images/landing/`，标注为示意。
- 内容页：`tasty-content-page.tsx`；首页：`tasty-home.tsx`。
- Header、Footer：`tasty-shell.tsx`；样式：`src/app/globals.css`。
- 路由清单见 `docs/site-routes.md`。
- 原有 `tasty` 文件夹名称为内部路径，暂保留以减少资源地址变更。

## 当前边界

- About 已改为包装业务介绍、生产要求、合作流程和询单入口；工厂/车间图按用户确认标注为示意参考。Contact 已改为真实联系方式及项目询单布局，表单仍为预览。
- `InquiryModule` 是用户指定保留的“询单模块”。其中 `LocalPreviewForm` 仅显示本地预览提示，不发送或保存信息。
- 包装产品网址 `/brkery-boxes/` 沿用现有拼写，避免已有链接失效。
- 食谱、作者、餐饮分类、评论和打印页面已移除；旧网址返回 404。
- 项目外“清理归档”目录保存本地素材备份；Git 历史保留已追踪删除文件。
- 项目基于 MIT 开源模板，原版权声明保留在 `LICENSE`。
