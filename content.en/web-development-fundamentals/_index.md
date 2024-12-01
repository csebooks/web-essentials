---
title: Fundamentals of Web Development
weight: 2
---

Establish a strong understanding of the three pillars of web development—content, presentation, and user interaction—and their roles in creating a complete website.

Lets get started !

We need Node Version Manager to start our work. You will have installer for  [Windows](https://github.com/coreybutler/nvm-windows) and [Unix](https://github.com/nvm-sh/nvm).

> **Node Version Manager (NVM)** is a popular tool used to manage multiple versions of **Node.js** on a single system. Node.js is a JavaScript runtime used for server-side development, and different projects may require different versions of Node.js. NVM makes it easy to install, manage, and switch between these versions seamlessly.


**Advantages of NVM :**

1. **Multiple Version Management**
   - Allows you to install and maintain multiple Node.js versions on your system.
   - Useful for projects that rely on different Node.js versions.

2. **Version Switching**
    - Easily switch between installed Node.js versions with a single command.
    - For example, you can use `nvm use 16` to switch to Node.js version 16.

3. **Simple Installation and Removal**
   - Quickly install and uninstall Node.js versions as needed.
   - For example, use `nvm install 18` to install version 18 and `nvm uninstall 18` uninstall version 18.


After instalations lets test nvm

```sh
nvm -version
```
We have to install and check the node.js version details

```sh
nvm install 22
nvm use 22
node -v
npm -v
```