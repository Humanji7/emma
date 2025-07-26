# 📚 MCP Servers Complete Documentation

## 📋 Table of Contents

1. [🚀 Quick Start Guide](#quick-start-guide)
2. [📦 Prerequisites](#prerequisites)
3. [🔥 Firecrawl MCP Server](#firecrawl-mcp-server)
4. [🐙 GitHub MCP Server](#github-mcp-server)
5. [🧠 Sequential Thinking MCP Server](#sequential-thinking-mcp-server)
6. [🎨 Figma MCP Server](#figma-mcp-server)
7. [🌐 Context7 MCP Server](#context7-mcp-server)
8. [🔗 Integration Examples](#integration-examples)
9. [❓ Common Issues & Troubleshooting](#common-issues--troubleshooting)
10. [✨ Best Practices](#best-practices)
11. [🔒 Security Considerations](#security-considerations)

---

## 🚀 Quick Start Guide

### 1. Install Claude Desktop App
Download and install the Claude Desktop application from [claude.ai](https://claude.ai)

### 2. Configure MCP Settings
Open Claude Desktop settings and add MCP server configurations to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "your_api_key"
      }
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

### 3. Restart Claude Desktop
After adding configurations, restart the Claude Desktop app to load the MCP servers.

---

## 📦 Prerequisites

### System Requirements
- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **Claude Desktop**: Latest version

### API Keys Required
| Service | Where to Get | Required For |
|---------|--------------|--------------|
| Firecrawl API Key | [firecrawl.dev](https://firecrawl.dev) | Firecrawl MCP Server |
| GitHub Personal Access Token | [GitHub Settings](https://github.com/settings/tokens) | GitHub MCP Server |
| Figma API Key | [Figma Account Settings](https://www.figma.com/developers/api#access-tokens) | Figma MCP Server |

### Installation Check
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Verify npx is available
npx --version
```

---

## 🔥 Firecrawl MCP Server

### Description
Firecrawl MCP Server enables web scraping, content extraction, and conversion of web pages to markdown format. Perfect for research, documentation, and data collection tasks.

### Key Features
- 🌐 Advanced web scraping with JavaScript rendering
- 📝 HTML to Markdown conversion
- 🔄 Batch processing of multiple URLs
- 🎯 CSS selector-based content extraction
- 📊 Structured data extraction

### Installation & Configuration

#### 1. Get Firecrawl API Key
Visit [firecrawl.dev](https://firecrawl.dev) and sign up for an API key.

#### 2. Add to MCP Settings
```json
{
  "firecrawl": {
    "command": "npx",
    "args": ["-y", "firecrawl-mcp"],
    "env": {
      "FIRECRAWL_API_KEY": "fc-YOUR_API_KEY_HERE"
    }
  }
}
```

### Available Commands

#### 📄 `firecrawl_scrape`
Scrapes a single webpage and converts it to markdown.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | ✅ | The URL to scrape |
| formats | array | ❌ | Output formats (default: ["markdown"]) |
| onlyMainContent | boolean | ❌ | Extract only main content (default: true) |
| includeTags | array | ❌ | HTML tags to include |
| excludeTags | array | ❌ | HTML tags to exclude |

**Example Usage:**
```javascript
// Basic scraping
{
  "tool": "firecrawl_scrape",
  "parameters": {
    "url": "https://example.com/article"
  }
}

// Advanced scraping with options
{
  "tool": "firecrawl_scrape",
  "parameters": {
    "url": "https://example.com/article",
    "formats": ["markdown", "html"],
    "onlyMainContent": true,
    "excludeTags": ["nav", "footer", "aside"]
  }
}
```

#### 🔍 `firecrawl_crawl`
Crawls an entire website or specific sections.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | ✅ | Starting URL for crawl |
| maxDepth | number | ❌ | Maximum crawl depth (default: 2) |
| limit | number | ❌ | Maximum pages to crawl (default: 10) |
| allowBackwardLinks | boolean | ❌ | Follow backward links (default: false) |
| allowExternalLinks | boolean | ❌ | Follow external links (default: false) |
| ignoreSitemap | boolean | ❌ | Ignore sitemap.xml (default: true) |

**Example Usage:**
```javascript
// Crawl documentation site
{
  "tool": "firecrawl_crawl",
  "parameters": {
    "url": "https://docs.example.com",
    "maxDepth": 3,
    "limit": 50,
    "allowBackwardLinks": true
  }
}
```

#### 🗺️ `firecrawl_map`
Maps out website structure and returns all discoverable URLs.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | ✅ | Website URL to map |
| search | string | ❌ | Filter URLs by search term |
| limit | number | ❌ | Maximum URLs to return (default: 5000) |

**Example Usage:**
```javascript
{
  "tool": "firecrawl_map",
  "parameters": {
    "url": "https://example.com",
    "search": "blog",
    "limit": 100
  }
}
```

### Practical Examples

#### 1. Research Article Collection
```javascript
// Step 1: Map the research site
{
  "tool": "firecrawl_map",
  "parameters": {
    "url": "https://research.example.com",
    "search": "2024"
  }
}

// Step 2: Scrape specific articles
{
  "tool": "firecrawl_scrape",
  "parameters": {
    "url": "https://research.example.com/article-2024-01",
    "onlyMainContent": true,
    "excludeTags": ["nav", "footer", "comments"]
  }
}
```

#### 2. Documentation Export
```javascript
// Crawl entire documentation
{
  "tool": "firecrawl_crawl",
  "parameters": {
    "url": "https://docs.myproject.com",
    "maxDepth": 5,
    "limit": 200,
    "allowBackwardLinks": true,
    "ignoreSitemap": false
  }
}
```

---

## 🐙 GitHub MCP Server

### Description
GitHub MCP Server provides comprehensive integration with GitHub repositories, enabling repository management, code exploration, and collaboration features directly through Claude.

### Key Features
- 📁 Repository creation and management
- 🔍 Code search and file navigation
- 📝 Issue and PR management
- 🌿 Branch operations
- ⭐ Repository starring and watching
- 👥 Collaboration features

### Installation & Configuration

#### 1. Create GitHub Personal Access Token
1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes:
   - `repo` (full control of private repositories)
   - `user` (read user profile data)
   - `gist` (create gists)

#### 2. Add to MCP Settings
```json
{
  "github": {
    "command": "npx",
    "args": ["@modelcontextprotocol/server-github"],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_YOUR_TOKEN_HERE"
    }
  }
}
```

### Available Commands

#### 📂 `create_repository`
Creates a new GitHub repository.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | ✅ | Repository name |
| description | string | ❌ | Repository description |
| private | boolean | ❌ | Make repository private (default: false) |
| auto_init | boolean | ❌ | Initialize with README (default: false) |

**Example:**
```javascript
{
  "tool": "create_repository",
  "parameters": {
    "name": "my-awesome-project",
    "description": "A revolutionary new application",
    "private": false,
    "auto_init": true
  }
}
```

#### 🔍 `search_repositories`
Search for repositories on GitHub.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | string | ✅ | Search query |
| sort | string | ❌ | Sort by: stars, forks, updated |
| order | string | ❌ | Order: asc, desc |
| per_page | number | ❌ | Results per page (max: 100) |

**Example:**
```javascript
{
  "tool": "search_repositories",
  "parameters": {
    "query": "language:python machine learning",
    "sort": "stars",
    "order": "desc",
    "per_page": 10
  }
}
```

#### 📄 `get_file_contents`
Retrieve contents of a file from a repository.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| owner | string | ✅ | Repository owner |
| repo | string | ✅ | Repository name |
| path | string | ✅ | File path |
| ref | string | ❌ | Branch/tag/commit (default: main) |

**Example:**
```javascript
{
  "tool": "get_file_contents",
  "parameters": {
    "owner": "facebook",
    "repo": "react",
    "path": "README.md",
    "ref": "main"
  }
}
```

#### 📝 `create_issue`
Create a new issue in a repository.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| owner | string | ✅ | Repository owner |
| repo | string | ✅ | Repository name |
| title | string | ✅ | Issue title |
| body | string | ❌ | Issue description |
| labels | array | ❌ | Labels to apply |
| assignees | array | ❌ | Users to assign |

**Example:**
```javascript
{
  "tool": "create_issue",
  "parameters": {
    "owner": "myusername",
    "repo": "my-project",
    "title": "Bug: Application crashes on startup",
    "body": "## Description\nThe application crashes when...\n\n## Steps to reproduce\n1. Start the app\n2. ...",
    "labels": ["bug", "high-priority"],
    "assignees": ["myusername"]
  }
}
```

### Practical Examples

#### 1. Project Setup Workflow
```javascript
// Step 1: Create repository
{
  "tool": "create_repository",
  "parameters": {
    "name": "full-stack-app",
    "description": "Modern full-stack application with React and Node.js",
    "private": false,
    "auto_init": true
  }
}

// Step 2: Create initial issues
{
  "tool": "create_issue",
  "parameters": {
    "owner": "myusername",
    "repo": "full-stack-app",
    "title": "Setup: Initialize React frontend",
    "body": "- [ ] Create React app\n- [ ] Setup routing\n- [ ] Configure state management",
    "labels": ["enhancement", "frontend"]
  }
}
```

#### 2. Code Review Helper
```javascript
// Get file contents for review
{
  "tool": "get_file_contents",
  "parameters": {
    "owner": "myteam",
    "repo": "backend-api",
    "path": "src/controllers/userController.js",
    "ref": "feature/user-auth"
  }
}
```

---

## 🧠 Sequential Thinking MCP Server

### Description
Sequential Thinking MCP Server provides structured problem-solving capabilities, enabling step-by-step analysis and logical reasoning for complex tasks.

### Key Features
- 📊 Structured problem decomposition
- 🔄 Step-by-step execution
- 📝 Progress tracking
- 🎯 Goal-oriented planning
- 🧩 Complex problem solving

### Installation & Configuration

```json
{
  "sequential-thinking": {
    "command": "npx",
    "args": ["@modelcontextprotocol/server-sequential-thinking"]
  }
}
```

### Available Commands

#### 🎯 `create_plan`
Creates a structured plan for solving a problem.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| goal | string | ✅ | The main objective |
| constraints | array | ❌ | Limitations or requirements |
| resources | array | ❌ | Available resources |

**Example:**
```javascript
{
  "tool": "create_plan",
  "parameters": {
    "goal": "Build a machine learning model for customer churn prediction",
    "constraints": [
      "Must achieve 85%+ accuracy",
      "Complete within 2 weeks",
      "Use only open-source tools"
    ],
    "resources": [
      "Historical customer data",
      "Python environment",
      "Cloud computing resources"
    ]
  }
}
```

#### 📋 `execute_step`
Executes a specific step in the plan.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| step_id | string | ✅ | Identifier of the step |
| inputs | object | ❌ | Input data for the step |
| validate | boolean | ❌ | Validate before execution |

**Example:**
```javascript
{
  "tool": "execute_step",
  "parameters": {
    "step_id": "data_preprocessing",
    "inputs": {
      "dataset": "customer_data.csv",
      "missing_value_strategy": "imputation"
    },
    "validate": true
  }
}
```

#### 🔍 `analyze_problem`
Performs deep analysis of a problem.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| problem | string | ✅ | Problem description |
| context | object | ❌ | Additional context |
| depth | string | ❌ | Analysis depth: shallow, medium, deep |

**Example:**
```javascript
{
  "tool": "analyze_problem",
  "parameters": {
    "problem": "Website loading time has increased by 300% in the last week",
    "context": {
      "traffic": "50% increase",
      "new_features": ["real-time chat", "video streaming"],
      "infrastructure": "unchanged"
    },
    "depth": "deep"
  }
}
```

### Practical Examples

#### 1. Software Architecture Planning
```javascript
// Step 1: Analyze requirements
{
  "tool": "analyze_problem",
  "parameters": {
    "problem": "Design scalable microservices architecture for e-commerce platform",
    "context": {
      "expected_users": "1 million daily",
      "peak_load": "Black Friday sales",
      "current_system": "monolithic"
    },
    "depth": "deep"
  }
}

// Step 2: Create implementation plan
{
  "tool": "create_plan",
  "parameters": {
    "goal": "Migrate from monolith to microservices",
    "constraints": [
      "Zero downtime migration",
      "Maintain all existing features",
      "Complete in 6 months"
    ]
  }
}
```

#### 2. Data Science Project
```javascript
// Create comprehensive ML project plan
{
  "tool": "create_plan",
  "parameters": {
    "goal": "Develop sentiment analysis model for product reviews",
    "constraints": [
      "95% accuracy target",
      "Process 10k reviews/minute",
      "Multi-language support"
    ],
    "resources": [
      "AWS infrastructure",
      "Labeled dataset (100k reviews)",
      "Team of 3 data scientists"
    ]
  }
}
```

---

## 🎨 Figma MCP Server

### Description
Figma MCP Server enables programmatic access to Figma designs, allowing extraction of design assets, component information, and design system data.

### Key Features
- 🖼️ Design file access
- 🎨 Component extraction
- 📐 Style and color extraction
- 📸 Asset export
- 🔄 Version history access

### Installation & Configuration

#### 1. Get Figma API Key
1. Log in to Figma
2. Go to Account Settings
3. Under "Personal Access Tokens", create a new token

#### 2. Add to MCP Settings
```json
{
  "figma": {
    "command": "npx",
    "args": [
      "-y",
      "figma-developer-mcp",
      "--figma-api-key=YOUR_FIGMA_API_KEY",
      "--stdio"
    ]
  }
}
```

### Available Commands

#### 📄 `get_file`
Retrieves information about a Figma file.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| file_key | string | ✅ | Figma file key from URL |
| version | string | ❌ | Specific version ID |
| depth | number | ❌ | Node tree depth (default: 2) |

**Example:**
```javascript
{
  "tool": "get_file",
  "parameters": {
    "file_key": "abc123XYZ",
    "depth": 3
  }
}
```

#### 🎨 `get_file_styles`
Retrieves all styles from a Figma file.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| file_key | string | ✅ | Figma file key |

**Example:**
```javascript
{
  "tool": "get_file_styles",
  "parameters": {
    "file_key": "abc123XYZ"
  }
}
```

#### 🧩 `get_file_components`
Retrieves all components from a Figma file.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| file_key | string | ✅ | Figma file key |

**Example:**
```javascript
{
  "tool": "get_file_components",
  "parameters": {
    "file_key": "abc123XYZ"
  }
}
```

#### 📸 `get_images`
Exports images from specific nodes.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| file_key | string | ✅ | Figma file key |
| ids | array | ✅ | Node IDs to export |
| scale | number | ❌ | Export scale (0.5-4) |
| format | string | ❌ | Format: jpg, png, svg, pdf |

**Example:**
```javascript
{
  "tool": "get_images",
  "parameters": {
    "file_key": "abc123XYZ",
    "ids": ["1:2", "3:4"],
    "scale": 2,
    "format": "png"
  }
}
```

### Practical Examples

#### 1. Design System Export
```javascript
// Step 1: Get all components
{
  "tool": "get_file_components",
  "parameters": {
    "file_key": "designSystemFileKey"
  }
}

// Step 2: Get all styles
{
  "tool": "get_file_styles",
  "parameters": {
    "file_key": "designSystemFileKey"
  }
}

// Step 3: Export component images
{
  "tool": "get_images",
  "parameters": {
    "file_key": "designSystemFileKey",
    "ids": ["component1", "component2"],
    "format": "svg"
  }
}
```

#### 2. Design Documentation
```javascript
// Get complete file structure
{
  "tool": "get_file",
  "parameters": {
    "file_key": "productDesignKey",
    "depth": 5
  }
}
```

---

## 🌐 Context7 MCP Server

### Description
Context7 MCP Server provides advanced contextual data processing and analysis capabilities through a cloud-based service.

### Key Features
- 🔍 Contextual analysis
- 📊 Data enrichment
- 🤖 AI-powered insights
- 🔄 Real-time processing
- 📈 Advanced analytics

### Installation & Configuration

```json
{
  "context7": {
    "url": "https://mcp.context7.com/mcp"
  }
}
```

### Available Commands

#### 🔍 `analyze_context`
Performs contextual analysis on provided data.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| data | object | ✅ | Data to analyze |
| mode | string | ❌ | Analysis mode |
| options | object | ❌ | Additional options |

**Example:**
```javascript
{
  "tool": "analyze_context",
  "parameters": {
    "data": {
      "text": "Customer feedback about product",
      "metadata": {
        "source": "support_ticket",
        "date": "2024-01-15"
      }
    },
    "mode": "sentiment_and_intent"
  }
}
```

#### 📊 `enrich_data`
Enriches data with additional context.

**Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| input | object | ✅ | Input data |
| enrichment_types | array | ❌ | Types of enrichment |

**Example:**
```javascript
{
  "tool": "enrich_data",
  "parameters": {
    "input": {
      "company": "Acme Corp",
      "industry": "Technology"
    },
    "enrichment_types": ["company_info", "market_data", "competitors"]
  }
}
```

### Practical Examples

#### 1. Customer Feedback Analysis
```javascript
{
  "tool": "analyze_context",
  "parameters": {
    "data": {
      "feedback": "The new feature is great but the UI is confusing",
      "user_segment": "enterprise",
      "product_version": "2.5.0"
    },
    "mode": "comprehensive"
  }
}
```

#### 2. Market Intelligence
```javascript
{
  "tool": "enrich_data",
  "parameters": {
    "input": {
      "company_list": ["Apple", "Google", "Microsoft"],
      "analysis_period": "Q4 2023"
    },
    "enrichment_types": ["financial_data", "news_sentiment", "market_position"]
  }
}
```

---

## 🔗 Integration Examples

### 1. Full-Stack Development Workflow

```javascript
// 1. Research similar projects with Firecrawl
{
  "tool": "firecrawl_scrape",
  "parameters": {
    "url": "https://github.com/trending/javascript"
  }
}

// 2. Create GitHub repository
{
  "tool": "create_repository",
  "parameters": {
    "name": "my-fullstack-app",
    "description": "Modern full-stack application",
    "auto_init": true
  }
}

// 3. Plan the architecture
{
  "tool": "create_plan",
  "parameters": {
    "goal": "Build scalable full-stack application",
    "constraints": ["Use React", "Node.js backend", "PostgreSQL"]
  }
}

// 4. Get design inspiration from Figma
{
  "tool": "get_file_components",
  "parameters": {
    "file_key": "uiKitFileKey"
  }
}
```

### 2. Research and Documentation Pipeline

```javascript
// 1. Map documentation sites
{
  "tool": "firecrawl_map",
  "parameters": {
    "url": "https://docs.framework.com",
    "limit": 100
  }
}

// 2. Analyze the structure
{
  "tool": "analyze_problem",
  "parameters": {
    "problem": "Create comprehensive documentation structure",
    "context": {
      "pages_found": 100,
      "topics": ["API", "Guides", "Examples"]
    }
  }
}

// 3. Create GitHub issues for documentation
{
  "tool": "create_issue",
  "parameters": {
    "owner": "myteam",
    "repo": "documentation",
    "title": "Document: API Reference",
    "body": "Create comprehensive API documentation"
  }
}
```

### 3. Design to Code Workflow

```javascript
// 1. Extract design components
{
  "tool": "get_file_components",
  "parameters": {
    "file_key": "designFileKey"
  }
}

// 2. Get color palette
{
  "tool": "get_file_styles",
  "parameters": {
    "file_key": "designFileKey"
  }
}

// 3. Create implementation plan
{
  "tool": "create_plan",
  "parameters": {
    "goal": "Implement Figma design in React",
    "resources": ["Component library", "Style guide", "Design tokens"]
  }
}

// 4. Create GitHub issues for components
{
  "tool": "create_issue",
  "parameters": {
    "owner": "myusername",
    "repo": "ui-components",
    "title": "Implement: Button Component",
    "body": "Create Button component matching Figma design",
    "labels": ["component", "ui"]
  }
}
```

---

## ❓ Common Issues & Troubleshooting

### 🔧 General Issues

#### MCP Server Not Loading
```bash
# Check if Node.js is installed
node --version

# Verify npx works
npx --version

# Check Claude Desktop logs
# Windows: %APPDATA%\Claude\logs
# macOS: ~/Library/Logs/Claude
# Linux: ~/.config/Claude/logs
```

#### Permission Errors
```bash
# Fix npm permissions (macOS/Linux)
sudo npm install -g npm

# Windows: Run as Administrator
```

### 🔥 Firecrawl Issues

#### API Key Invalid
- Verify key starts with `fc-`
- Check key hasn't expired
- Ensure no extra spaces in configuration

#### Rate Limiting
- Free tier: 100 requests/month
- Implement delays between requests
- Consider upgrading plan for heavy usage

### 🐙 GitHub Issues

#### Authentication Failed
```bash
# Test token
curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/user

# Common fixes:
# 1. Regenerate token
# 2. Check token scopes
# 3. Verify no extra characters
```

#### Repository Not Found
- Check repository visibility (private vs public)
- Verify owner/repo names are correct
- Ensure token has appropriate permissions

### 🎨 Figma Issues

#### Invalid File Key
- Extract from Figma URL: `figma.com/file/FILE_KEY/File-Name`
- Ensure you have access to the file
- Check if file is in a team you belong to

#### Export Limits
- Free plan: Limited exports per month
- Large files may timeout
- Use smaller node selections

### 🧠 Sequential Thinking Issues

#### Plan Creation Failures
- Ensure goal is clearly defined
- Break complex goals into sub-goals
- Provide sufficient context

#### Step Execution Errors
- Verify step_id exists in plan
- Check input parameters match expected format
- Ensure dependencies are met

### 🌐 Context7 Issues

#### Connection Timeouts
- Check internet connectivity
- Verify URL is accessible
- May need proxy configuration

#### Data Format Errors
- Ensure JSON is properly formatted
- Check required fields are present
- Validate data types

---

## ✨ Best Practices

### 🏗️ General Best Practices

1. **Error Handling**
   - Always handle potential failures
   - Implement retry logic for network requests
   - Log errors for debugging

2. **Performance Optimization**
   - Batch operations when possible
   - Cache frequently accessed data
   - Use appropriate rate limiting

3. **Security**
   - Never commit API keys to version control
   - Use environment variables
   - Rotate keys regularly

### 🔥 Firecrawl Best Practices

1. **Efficient Crawling**
   ```javascript
   // Use specific selectors
   {
     "tool": "firecrawl_scrape",
     "parameters": {
       "url": "https://example.com",
       "includeTags": ["article", "main"],
       "excludeTags": ["nav", "footer", "aside"]
     }
   }
   ```

2. **Respect robots.txt**
   - Check site's robots.txt before crawling
   - Implement delays between requests
   - Don't overload servers

### 🐙 GitHub Best Practices

1. **Commit Message Standards**
   ```
   feat: Add new feature
   fix: Fix bug in component
   docs: Update documentation
   style: Format code
   refactor: Refactor function
   test: Add tests
   chore: Update dependencies
   ```

2. **Branch Strategy**
   - Use feature branches
   - Keep main branch stable
   - Regular PR reviews

### 🧠 Sequential Thinking Best Practices

1. **Problem Definition**
   - Be specific and measurable
   - Include all constraints upfront
   - Define success criteria

2. **Plan Validation**
   - Review each step before execution
   - Ensure logical flow
   - Have fallback strategies

### 🎨 Figma Best Practices

1. **File Organization**
   - Use consistent naming
   - Group related components
   - Maintain version history

2. **Export Optimization**
   - Export only needed assets
   - Use appropriate formats
   - Consider file sizes

---

## 🔒 Security Considerations

### API Key Management

1. **Storage**
   - Never hardcode keys in code
   - Use environment variables
   - Implement key rotation

2. **Access Control**
   - Limit key permissions
   - Use separate keys for different environments
   - Monitor key usage

### Data Privacy

1. **Sensitive Information**
   - Don't scrape personal data without consent
   - Comply with GDPR/CCPA
   - Implement data retention policies

2. **Repository Security**
   - Use private repos for sensitive code
   - Enable 2FA on GitHub
   - Regular security audits

### Network Security

1. **HTTPS Only**
   - Always use HTTPS endpoints
   - Verify SSL certificates
   - Implement certificate pinning for critical apps

2. **Rate Limiting**
   - Respect API rate limits
   - Implement backoff strategies
   - Monitor usage patterns

### Compliance

1. **License Compliance**
   - Respect open source licenses
   - Check Figma asset licenses
   - Attribute content properly

2. **Legal Considerations**
   - Terms of Service compliance
   - Copyright respect
   - Data protection laws

---

## 📚 Additional Resources

### Official Documentation
- [MCP Protocol Specification](https://modelcontextprotocol.org)
- [Firecrawl Documentation](https://docs.firecrawl.dev)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Figma API Documentation](https://www.figma.com/developers/api)

### Community Resources
- [MCP Community Forum](https://community.modelcontextprotocol.org)
- [GitHub Discussions](https://github.com/modelcontextprotocol/discussions)
- [Stack Overflow MCP Tag](https://stackoverflow.com/questions/tagged/mcp)

### Tutorials and Guides
- [Building MCP Servers](https://modelcontextprotocol.org/tutorials)
- [Best Practices Guide](https://modelcontextprotocol.org/best-practices)
- [Security Guidelines](https://modelcontextprotocol.org/security)

---

## 🎯 Quick Reference

### Command Cheatsheet

```javascript
// Firecrawl
firecrawl_scrape      // Scrape single page
firecrawl_crawl       // Crawl website
firecrawl_map         // Map site structure

// GitHub
create_repository     // Create new repo
search_repositories   // Search repos
get_file_contents    // Get file content
create_issue         // Create issue

// Sequential Thinking
create_plan          // Create action plan
execute_step         // Execute plan step
analyze_problem      // Analyze problem

// Figma
get_file            // Get file info
get_file_styles     // Get styles
get_file_components // Get components
get_images          // Export images

// Context7
analyze_context     // Contextual analysis
enrich_data        // Data enrichment
```

### Configuration Template

```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "fc-YOUR_KEY"
      }
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_YOUR_TOKEN"
      }
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-sequential-thinking"]
    },
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "figma-developer-mcp",
        "--figma-api-key=YOUR_KEY",
        "--stdio"
      ]
    },
    "context7": {
      "url": "https://mcp.context7.com/mcp"
    }
  }
}
```

---

*Last updated: January 2025*