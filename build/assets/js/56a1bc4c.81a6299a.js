(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[72429],{16239:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var o=t(22122),i=t(19756),a=t(86010),r=t(67294),s="docsButton_2Emz",c="docsButtonRound_3i9G";function l(e){var n,t=e.href,l=e.round,u=void 0!==l&&l,p=(0,i.Z)(e,["href","round"]);return p.className=(0,a.Z)(((n={})[p.className]=Boolean(p.className),n[s]=!0,n["docs-button"]=!0,n[c]=u,n["docs-button--round"]=u,n)),t?r.createElement("a",(0,o.Z)({href:t,className:"docsButton"},p),p.children):r.createElement("button",(0,o.Z)({className:"docsButton"},p),p.children)}},17271:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var o=t(22122),i=t(19756),a=(t(67294),t(3905)),r=t(28312),s=t(16239),c=t(41395),l=t(58215),u=t(81840),p={title:"Screen Orientation"},d={unversionedId:"native/plugins/screen-orientation",id:"native/plugins/screen-orientation",isDocsHomePage:!1,title:"Screen Orientation",description:"Cordova plugin to set/lock the screen orientation in a common way.",source:"@site/docs/native/plugins/screen-orientation.md",sourceDirName:"native/plugins",slug:"/native/plugins/screen-orientation",permalink:"/docs/native/plugins/screen-orientation",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/screen-orientation.md",version:"current",frontMatter:{title:"Screen Orientation"},sidebar:"native",previous:{title:"Safari View Controller",permalink:"/docs/native/plugins/safari-view-controller"},next:{title:"Screenshot",permalink:"/docs/native/plugins/screenshot"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]},{value:"Usage",id:"usage",children:[{value:"React",id:"react",children:[]},{value:"Angular",id:"angular",children:[]}]}],v={toc:m};function g(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cordova plugin to set/lock the screen orientation in a common way."),(0,a.kt)("p",null,"Requires Cordova plugin: ",(0,a.kt)("inlineCode",{parentName:"p"},"cordova-plugin-screen-orientation"),". For more info, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/cordova-plugin-screen-orientation"},"Screen Orientation plugin docs"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/apache/cordova-plugin-screen-orientation",target:"_blank",rel:"noopener",className:"git-link"},(0,a.kt)("svg",{viewBox:"0 0 512 512"},(0,a.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-screen-orientation")),(0,a.kt)("h2",null,"Stuck on a Cordova issue?"),(0,a.kt)(r.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,a.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,a.kt)(s.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,a.kt)("h2",{id:"installation"},(0,a.kt)("a",{href:"#installation"},"Installation")),(0,a.kt)(c.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Capacitor",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-screen-orientation ","\n","$ npm install @ionic-native/screen-orientation ","\n","$ ionic cap sync")),(0,a.kt)(l.Z,{value:"Cordova",mdxType:"TabItem"},(0,a.kt)(u.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-screen-orientation ","\n","$ npm install @ionic-native/screen-orientation ","\n")),(0,a.kt)(l.Z,{value:"Enterprise",mdxType:"TabItem"},(0,a.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,a.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,a.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,a.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android"),(0,a.kt)("li",{parentName:"ul"},"iOS"),(0,a.kt)("li",{parentName:"ul"},"Windows")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/native/community#react"},"Learn more about using Ionic Native components in React")),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';\n\nconstructor(private screenOrientation: ScreenOrientation) { }\n\n...\n\n\n// get current\nconsole.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'\n\n// set to landscape\nthis.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);\n\n// allow user rotate\nthis.screenOrientation.unlock();\n\n// detect orientation changes\nthis.screenOrientation.onChange().subscribe(\n   () => {\n       console.log(\"Orientation Changed\");\n   }\n);\n\n")))}g.isMDXComponent=!0}}]);