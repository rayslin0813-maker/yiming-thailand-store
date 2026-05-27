# 上传说明

这个文件夹是独立站上线包。

## 包含页面

- `index.html`：独立站首页
- `products/handheld-fan.html`：手持风扇详情页
- `products/neck-fan.html`：挂脖风扇详情页
- `assets/`：图片资源
- `styles.css` / `script.js`：样式和交互

## 当前购买路径

- 首页和详情页负责展示与成交引导。
- Buy Now 按钮跳转 Shopify 商品页：
  - Handheld Fan：`https://fh8gjq-qg.myshopify.com/products/handheld-fan`
  - Neck Fan：`https://fh8gjq-qg.myshopify.com/products/neck-fan`

## 推荐上线方式

先上传到独立静态主机或域名空间，社媒流量先进独立站，再跳 Shopify 收款。

Shopify CLI 授权成功后，再把同样设计迁移到 Shopify 主题。
