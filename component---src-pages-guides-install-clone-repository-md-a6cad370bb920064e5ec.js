"use strict";(self.webpackChunkcommerce_contributor=self.webpackChunkcommerce_contributor||[]).push([[623],{4800:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a,o=n(7462),r=n(3366),i=(n(5007),n(4983)),m=n(1515),p=["components"],d={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),s={_frontmatter:d},c=m.Z;function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.mdx)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"clone-the-git-repository"},"Clone the git repository"),(0,i.mdx)("p",null,"You can clone the latest code from the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2"},"Magento Open Source GitHub repository"),", and use code from a release branch or a development branch."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"A ",(0,i.mdx)("strong",{parentName:"p"},"release branch")," is a ",(0,i.mdx)("em",{parentName:"p"},"stable"),", full-featured code branch officially released with a version number, such as 2.4. You ",(0,i.mdx)("em",{parentName:"p"},"must")," use a release branch with the ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/migration/bk-migration-guide.html"},"Data Migration Tool"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"A ",(0,i.mdx)("strong",{parentName:"p"},"development branch"),", or feature branch, is a less-stable code branch with the latest code intended as the next version or to introduce a specific feature."))),(0,i.mdx)("p",null,"You can checkout a specific branch after you clone the repository to your local development environment. See ",(0,i.mdx)("a",{parentName:"p",href:"https://help.github.com/articles/cloning-a-repository-from-github/"},"Cloning a repository")," in the ",(0,i.mdx)("em",{parentName:"p"},"GitHub Docs"),"."),(0,i.mdx)("h2",{id:"authentication-and-access"},"Authentication and access"),(0,i.mdx)("p",null,"The Adobe Commerce repository requires authentication, so you must prepare the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/connect-auth.html"},"Authentication key")),"—You must have an authentication key to access the Adobe Commerce Composer package on ",(0,i.mdx)("inlineCode",{parentName:"p"},"repo.magento.com")," and to enable install and update commands for your project.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/"},"GitHub personal access token")),"—Composer requires a ",(0,i.mdx)("em",{parentName:"p"},"personal access token")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"github-oauth")," property to authorize GitHub repository access. When you create this token, select all options in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"repo")," scope."))),(0,i.mdx)("h2",{id:"authentication-file"},"Authentication file"),(0,i.mdx)("p",null,"You must create an ",(0,i.mdx)("inlineCode",{parentName:"p"},"auth.json")," file that contains your Adobe Commerce ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/connect-auth.html"},"authorization credentials")," in the Magento root directory."),(0,i.mdx)("p",null,"To create an authentication file:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"If you do not have an ",(0,i.mdx)("inlineCode",{parentName:"p"},"auth.json")," file in your Magento root directory, create one."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Using a text editor, create an ",(0,i.mdx)("inlineCode",{parentName:"li"},"auth.json")," file in the Magento root directory."),(0,i.mdx)("li",{parentName:"ul"},"Copy the contents of the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/auth.json.sample"},"sample ",(0,i.mdx)("inlineCode",{parentName:"a"},"auth.json")," file")," into the new ",(0,i.mdx)("inlineCode",{parentName:"li"},"auth.json")," file."))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Replace ",(0,i.mdx)("inlineCode",{parentName:"p"},"<public-key>")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"<private-key>")," with your Adobe Commerce authentication credentials. Add the ",(0,i.mdx)("inlineCode",{parentName:"p"},"github-oauth")," section and replace the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<personal-access-token>")," with the one you created for your GitHub account."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "http-basic": {\n        "repo.magento.com": {\n            "username": "<public-key>",\n            "password": "<private-key>"\n        }\n    },\n    "github-oauth": {\n        "github.com": "<personal-access-token>"\n    }\n}\n'))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Save your changes and exit the text editor."))),(0,i.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Pushing an ",(0,i.mdx)("inlineCode",{parentName:"p"},"auth.json")," file to a public repository can expose your credentials."),(0,i.mdx)("p",null,"After completing the tasks discussed on this page, see ",(0,i.mdx)("a",{parentName:"p",href:"update-dependencies.md#update-installation-dependencies"},"update installation dependencies"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-install-clone-repository-md-a6cad370bb920064e5ec.js.map