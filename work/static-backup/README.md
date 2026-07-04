# GitHub Pages 个人主页搭建指南

这份项目是一个无需构建工具的静态个人学术主页，可以直接部署到 GitHub Pages。当前初版参考了 `al-folio`、`academicpages` 这类开源学术主页的常见信息架构，但保留为纯 HTML/CSS/JS，避免引入 Jekyll/Ruby 构建依赖。

## 你现在拥有的文件

- `index.html`：页面内容，包括身份卡片、个人信息、外链、学术宣言、研究预览和详细 CV。
- `styles.css`：页面视觉样式和移动端适配。
- `script.js`：控制“展开主页”和“进入 CV 详情”的点击交互。

## 本地预览

直接用浏览器打开 `index.html` 即可。如果你想用本地服务预览，可以在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 替换个人信息

优先编辑 `index.html` 中这些位置：

1. `<title>`：改成你的名字，例如 `Li Beverly Kong | Academic Homepage`。
2. 顶部 `.brand` 和 `<h1>`：改成你希望公开展示的姓名。
3. `.role` 和 `.affiliation`：改成你的身份、机构、实验室或研究方向。
4. `.contact-list`：替换邮箱、地点、研究关键词。
5. `.hero-copy`：写 2-3 句首页学术简介。
6. “额外个人网站”：替换 GitHub、Google Scholar、LinkedIn、ORCID、个人站、博客等链接。
7. “学术宣言”：换成你的真实研究理念。
8. “研究与项目预览”：放 1-2 个最能代表你的研究或作品。
9. “详细 CV”：替换教育、论文、项目、教学、奖项、学术服务等条目。

## 部署到 GitHub Pages

### 方式一：用户主页仓库

如果你的 GitHub 用户名是 `yourname`，创建仓库：

```text
yourname.github.io
```

把本项目的 `index.html`、`styles.css`、`script.js` 和 `README.md` 上传到仓库根目录。几分钟后，你的网站通常会出现在：

```text
https://yourname.github.io
```

### 方式二：普通项目仓库

如果仓库名不是 `yourname.github.io`：

1. 进入 GitHub 仓库页面。
2. 打开 `Settings`。
3. 找到 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待部署完成。

访问地址通常类似：

```text
https://yourname.github.io/repository-name/
```

## 推荐维护方式

- 主页首层只放最重要的个人介绍，避免太长。
- CV 详情保持结构化，论文、项目和教学经历最好按时间倒序。
- 每次新增论文或项目，只需要复制一个 `.cv-item` 区块并修改文字。
- 公开邮箱建议使用学术邮箱；如果担心垃圾邮件，可以写成 `name [at] domain [dot] edu`。
- 如果你有 PDF 版 CV，可以把文件放到仓库里，然后在页面上添加下载链接。

## 下一步可选增强

- 添加头像或研究照片。
- 给论文添加 PDF、Code、Demo 链接。
- 添加中英文切换。
- 添加 `assets/` 文件夹管理图片和 PDF。
- 绑定自定义域名。
