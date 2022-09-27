"use strict";(self.webpackChunkcommerce_contributor=self.webpackChunkcommerce_contributor||[]).push([[113],{9241:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return p},default:function(){return h}});var a,n=o(7462),r=o(3366),s=(o(5007),o(4983)),m=o(1515),l=["components"],p={},d=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),i={_frontmatter:p},c=m.Z;function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,s.mdx)(c,(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"update-installation-dependencies"},"Update installation dependencies"),(0,s.mdx)("p",null,"We use ",(0,s.mdx)("a",{parentName:"p",href:"http://getcomposer.org"},"Composer")," to resolve dependencies before you install the Magento software and extensions."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/composer"},"Composer")," is a separate application that manages ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/php"},"PHP")," dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/dev_install.html"},"Install the Composer software"),"."),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"Create the file system owner")," so Composer can write files to the web server docroot as the correct user."),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("a",{parentName:"li",href:"#update-dependencies"},"Update dependencies")," in your local root project directory (for example, ",(0,s.mdx)("inlineCode",{parentName:"li"},"/var/www/magento2/"),").")),(0,s.mdx)("p",null,"The Magento root directory is a subdirectory of your web server's docroot."),(0,s.mdx)("p",null,"If the following error displays, see ",(0,s.mdx)("a",{parentName:"p",href:"https://support.magento.com/hc/en-us/articles/360033818091"},"troubleshooting"),":"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-terminal"},"file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory\n")),(0,s.mdx)("p",null,"For you to be able to run the Magento application, make sure you perform all tasks as a user with privileges to write to the web server docroot. One way to do this is to log in as or switch to the ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"switch to the file system owner"),"."),(0,s.mdx)("h2",{id:"update-dependencies"},"Update dependencies"),(0,s.mdx)("p",null,"Update installation dependencies as follows:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Log in to your Magento server as the ",(0,s.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/magento-file-system-owner"},"file system owner")," or ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"switch to that user"),".")),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"Change to the Magento installation directory and run ",(0,s.mdx)("inlineCode",{parentName:"p"},"composer install"),". Examples:"),(0,s.mdx)("p",{parentName:"li"},"CentOS:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/html/magento2 && composer install\n")),(0,s.mdx)("p",{parentName:"li"},"Ubuntu:"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/magento2 && composer install\n")),(0,s.mdx)("p",{parentName:"li"},"This command updates package dependencies and can take a few minutes to complete."))),(0,s.mdx)("p",null,"The following error might display:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-terminal"},'[Composer\\Downloader\\TransportException]\nThe "https://repo.magento.com/archives/magento/composer/magento-composer-1.0.2.0.zip" file could not be downloaded (HTTP/1.1 404 Not Found)\n')),(0,s.mdx)("p",null,"If so, create ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/dev_install.html"},(0,s.mdx)("inlineCode",{parentName:"a"},"auth.json"))," in the file system owner's ",(0,s.mdx)("inlineCode",{parentName:"p"},"<home>/.composer")," directory and run ",(0,s.mdx)("inlineCode",{parentName:"p"},"composer install")," again."),(0,s.mdx)("h2",{id:"set-file-ownership-and-permissions"},"Set file ownership and permissions"),(0,s.mdx)("p",null,"You must set read and write permissions for the web server group before you install Adobe Commerce or Magento Open Source. It is necessary so that the command line can write to the file system. See ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"file ownership and permissions"),"."),(0,s.mdx)(d,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Hooray! You've completed the contributor install. Need more advanced help? Check out our ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli.html"},"Advanced install")," guide."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-install-update-dependencies-md-656e8ebadbc03f5de838.js.map