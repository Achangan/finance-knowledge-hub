import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '理财与股票知识库',
  description: '系统化的理财与股票知识沉淀：资产配置、基金、债券、股票估值与交易',
  lang: 'zh-CN',
  base: '/finance-knowledge-hub/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '理财基础', link: '/guide/finance-basics' },
      { text: '基金', link: '/guide/mutual-funds' },
      { text: '股票', link: '/guide/stock-basics' },
      { text: '交易实战', link: '/guide/ashare-trading-tactics' },
      { text: '资产配置', link: '/guide/asset-allocation' },
      { text: '学习日志', link: '/daily/2026-10-20' }
    ],
    sidebar: [
      {
        text: '每日学习日志',
        items: [
          { text: '2026-10-20', link: '/daily/2026-10-20' },
          { text: '2026-10-19', link: '/daily/2026-10-19' }
        ]
      },
      {
        text: '理财基础',
        items: [
          { text: '复利与时间价值', link: '/guide/finance-basics' },
          { text: '风险与收益的关系', link: '/guide/risk-return' },
          { text: '常见资产大类', link: '/guide/asset-classes' }
        ]
      },
      {
        text: '基金',
        items: [
          { text: '基金类型与结构', link: '/guide/mutual-funds' },
          { text: '指数基金与 ETF', link: '/guide/index-funds' },
          { text: '主动 ETF', link: '/guide/active-etf' },
          { text: '基金定投策略', link: '/guide/fund-dca' }
        ]
      },
      {
        text: '股票',
        items: [
          { text: '股票基础与 A 股交易规则', link: '/guide/stock-basics' },
          { text: '基本面分析（财务三表）', link: '/guide/fundamental-analysis' },
          { text: '估值方法（PE/PB/DCF）', link: '/guide/valuation' },
          { text: '技术分析入门（K 线与形态）', link: '/guide/technical-analysis' }
        ]
      },
      {
        text: 'A 股交易实战',
        items: [
          { text: 'A 股交易技法总览', link: '/guide/ashare-trading-tactics' },
          { text: '资金流向与龙虎榜跟踪', link: '/guide/capital-flow-tracking' },
          { text: '仓位管理与止损纪律', link: '/guide/risk-management' }
        ]
      },
      {
        text: '债券与固收',
        items: [
          { text: '债券基础与定价', link: '/guide/bonds' }
        ]
      },
      {
        text: '资产配置',
        items: [
          { text: '资产配置方法论', link: '/guide/asset-allocation' },
          { text: '投资组合构建与再平衡', link: '/guide/portfolio-rebalance' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: { label: '页面导航' },
    docFooter: { prev: '上一页', next: '下一页' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Achangan/finance-knowledge-hub' }
    ]
  }
})
