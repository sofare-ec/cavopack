<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cavopack 项目说明

- 这是包装产品 B2B 询单网站，使用 Next.js App Router、React、TypeScript 和 Tailwind CSS。
- GitHub Pages 静态发布，主分支为 `main`；保留 `output: "export"`、`trailingSlash: true` 和现有业务网址。
- 代码、数据与资源位置见 README.md 和 docs/site-routes.md。
- TypeScript 保持 strict；使用既有组件与样式，不添加无调用的模板组件。
- About 已按用户确认的包装业务方案排版；工厂和车间图是示意/生成图，必须明确标注，不得称为自有工厂实拍。Contact 已使用用户提供的温州荣诺包装有限公司地址、电话和既有邮箱，表单仍为不发送、不保存的预览。
- 保留“询单模块” InquiryModule；当前表单不发送和保存信息，不得把预览称为真实询单成功。
- 修改前说明影响范围；删除文件应可恢复。原 MIT 版权声明不得移除。
- 清理后的六类产品和八个行业仍需保持首页与二级页面数据一致。
