# StockScope
# Google Finance POM Cypress Tests

Automated end-to-end tests for Google Finance, built with Cypress and a Page Object Model (POM) structure.  
Includes scheduled nightly runs (midnight PDT) via GitHub Actions and on-demand dispatch.

---
## 🚀 Features

- **POM Architecture**: Encapsulated page interactions in `FinancePage` and `BasePage`.  
- **Data-Driven**: External JSON fixture (`stocks.json`) for expected ticker lists.  
- **Advanced Assertions**: Separate smoke tests for missing vs. unexpected symbols.  
- **Error Handling**: Ignores cross-origin “Script error” exceptions on Google Finance.  
- **CI/CD**:  
  - Nightly runs at 00:00 PDT via GitHub Actions cron  
  - Manual dispatch via `workflow_dispatch`  

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) ≥ 14  
- [npm](https://npmjs.com) (bundled with Node)  
- Internet access to run Google Finance tests  

---

## ⬇️ Installation

1. Clone repo:  
   ```bash
   git clone https://github.com/<your-username>/StockScope.git
   cd StockScope
