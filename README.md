# my-website
 
---

## Build a Blog with Docusaurus and Deploy to Vercel

In this tutorial, you will learn how to:
- Set up a Docusaurus project using Cursor IDE
- Utilize AI assistance in development
- Deploy the project on the Vercel platform

### Prerequisites
Ensure you have the following installed:
- Cursor IDE
- GitHub Desktop
- Node.js (version >= 14)
- A GitHub account
- A Vercel account

### Step 1: Create a Docusaurus Project

1. **Open Cursor IDE**
2. **Create a new project by navigating to the desired parent directory:**
   - Use the shortcut `Ctrl + Shift + ~` to open the terminal.
   - Run the creation command:
     ```
     npx create-docusaurus@latest my-website classic
     ```
   - Enter the project directory:
     ```
     cd my-website
     ```
   - Start the development server:
     ```
     npm start
     ```

### Step 2: Configure GitHub Repository

1. **Open GitHub Desktop**
2. **Click `File` -> `Add local repository`**
3. **Click `Create Repository` and fill in the repository information:**
   - Name: my-website
   - Description: My Docusaurus Documentation Site
   - Local Path: [Select your project directory]

4. **Make the first commit:**
   - Commit Title: Initial commit
   - Description: Initialize Docusaurus project

### Step 3: Deploy to Vercel

1. **Log in to Vercel**
2. **Click `New Project`**
3. **Import your newly created GitHub repository**
4. **Keep default configurations and click `Deploy`**

🎉 **Deployment Success**  
Your site is now live! Vercel automatically generates a domain for you in the format: `https://my-website-xxx.vercel.app`

### Basic Project Configuration

- **Modify basic website information in `docusaurus.config.js`:**
  ```js
  module.exports = {
    title: 'Your Blog Name',
    tagline: 'A short description of your blog',
    url: 'https://yourdomain.com',
    favicon: 'img/favicon.ico',
    organizationName: 'yourGitHubUsername',
    projectName: 'repositoryName',
  }
  ```

### Custom Theme Configuration

- **Configure the navigation bar in `themeConfig`:**
  ```js
  navbar: {
    title: 'Site Title',
    logo: {
      alt: 'Logo',
      src: 'img/logo.svg',
    },
    items: [
      { to: 'docs/', activeBasePath: 'docs', label: 'Docs', position: 'left' },
      { to: 'blog', label: 'Blog', position: 'left' },
      { href: 'https://github.com/yourUsername/repositoryName', label: 'GitHub', position: 'right' },
    ],
  }
  ```

- **Configure color themes:**
  ```js
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  }
  ```

This README provides a comprehensive guide to getting your blog up and running with modern tools and deployment platforms. Enjoy blogging!
