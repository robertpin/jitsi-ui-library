(self.webpackChunkjitsi_ui_library=self.webpackChunkjitsi_ui_library||[]).push([[179],{"./src/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page}});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Example/Introduction",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",null,"Welcome to Jitsi UI Library"))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))},__webpack_exports__.default=componentMeta;const __namedExportsOrder=["__page"]},"./src/Button/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),makeStyles=__webpack_require__("./node_modules/@material-ui/core/esm/styles/makeStyles.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["primary","size","backgroundColor","label"],useStyles=(0,makeStyles.Z)((function(theme){return{button:{backgroundColor:theme.palette.warning01}}})),Button=function Button(_ref){_ref.primary,_ref.size,_ref.backgroundColor;var label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),styles=useStyles();return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:styles.button},props),{},{children:label}))};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Button_stories={title:"Example/Button",component:Button,argTypes:{backgroundColor:{control:"color"}}},Primary=function Template(args){return(0,jsx_runtime.jsx)(Button,(0,objectSpread2.Z)({},args))}.bind({});Primary.args={primary:!0,label:"Button"},Primary.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters);var __namedExportsOrder=["Primary"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},decorators:function(){return decorators},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),ThemeProvider=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js")),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),createMuiTheme=__webpack_require__("./node_modules/@material-ui/core/esm/styles/createMuiTheme.js"),font={weightRegular:"400",weightSemiBold:"600"};function createColorTokens(colorMap,colors){return Object.entries(colorMap).reduce((function(result,_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),token=_ref2[0],value=_ref2[1];return Object.assign(result,(0,defineProperty.Z)({},token,colors[value]||value))}),{})}var BaseTheme=function createWebTheme(_ref3){var font=_ref3.font,colors=_ref3.colors,colorMap=_ref3.colorMap,shape=_ref3.shape,spacing=_ref3.spacing,typography=_ref3.typography,breakpoints=_ref3.breakpoints;return(0,createMuiTheme.Z)({props:{MuiButtonBase:{disableRipple:!0}},spacing:spacing},{palette:createColorTokens(colorMap,colors),shape:shape,typography:(0,objectSpread2.Z)({font:font},typography),breakpoints:breakpoints})}({font:font,colors:{error03:"#7A141F",error04:"#A21B29",error05:"#CB2233",error06:"#D83848",error08:"#F24D5F",primary01:"#00112D",primary02:"#00225A",primary03:"#003486",primary04:"#0045B3",primary05:"#0056E0",primary06:"#246FE5",primary07:"#4687ED",primary08:"#99BBF3",primary09:"#CCDDF9",surface01:"#040404",surface02:"#141414",surface03:"#292929",surface04:"#3D3D3D",surface05:"#525252",surface06:"#666",surface07:"#858585",surface08:"#A3A3A3",surface09:"#C2C2C2",surface10:"#E0E0E0",surface11:"#FFF",success04:"#189B55",success05:"#1EC26A",warning05:"#F8AE1A",warning06:"#FFD600",support01:"#FF9B42",support02:"#F96E57",support03:"#DF486F",support04:"#B23683",support05:"#73348C",support06:"#6A50D3",support07:"#4380E2",support08:"#00A8B3",support09:"#2AA076",primary10:"#17A0DB",primary11:"#1081B2",primary12:"#B8C7E0",surface00:"#111111",surface12:"#AAAAAA",surface13:"#495258",surface14:"#555555",surface15:"#474747",surface16:"#131519",surface17:"#161618",warning07:"#FFD740",disabled01:"#00000040"},colorMap:{uiBackground:"surface01",ui01:"surface02",ui02:"surface03",ui03:"surface04",ui04:"surface05",ui05:"surface06",action01:"primary06",action01Hover:"primary07",action01Active:"primary04",action02:"surface10",action02Hover:"surface11",action02Active:"surface09",actionDanger:"error05",actionDangerHover:"error06",actionDangerActive:"error04",action03:"transparent",action03Hover:"surface04",action03Active:"surface03",disabled01:"surface09",focus01:"primary07",link01:"primary07",link01Hover:"primary08",link01Active:"primary06",text01:"surface11",text02:"surface09",text03:"surface07",text04:"surface01",textError:"error08",icon01:"surface11",icon02:"surface09",icon03:"surface07",icon04:"surface01",iconError:"error06",field01:"surface04",success01:"success05",success02:"success04",warning01:"warning05",warning02:"warning06",support01:"support01",support02:"support02",support03:"support03",support04:"support04",support05:"support05",support06:"support06",support07:"support07",support08:"support08",support09:"support09",ui00:"surface00",ui12:"surface11",ui13:"surface14",ui14:"surface15",ui15:"surface12",ui16:"surface16",action04:"primary11",action03Focus:"surface07",action03Disabled:"transparent",icon05:"surface04",text05:"surface06",text06:"surface03",text07Info:"surface02",screen01Header:"primary10",screen02Header:"surface17",underlay01:"surface13",bottomSheet:"surface00",dividerColor:"surface12",indicatorColor:"surface12",section01:"surface10",border01:"surface08",border02:"surface06",border03:"surface04",border04:"primary12",border05:"surface07",borderError:"error06",warning03:"warning07",tab01Disabled:"disabled01",switch01Enabled:"success04",switch01Disabled:"surface06",video01Disabled:"disabled01",field01Hover:"surface03",field01Focus:"primary05",field01Disabled:"surface05",field02:"surface11",field02Hover:"primary09",field02Focus:"primary05",field02Disabled:"surface06"},spacing:[0,4,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128],shape:{borderRadius:6,boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.15)"},typography:{labelRegular:{fontSize:12,lineHeight:16,fontWeight:font.weightRegular,letterSpacing:.16},labelBold:{fontSize:12,lineHeight:16,fontWeight:font.weightSemiBold,letterSpacing:.16},labelButton:{fontSize:14,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},labelButtonLarge:{fontSize:16,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},bodyShortRegular:{fontSize:14,lineHeight:18,fontWeight:font.weightRegular,letterSpacing:0},bodyShortBold:{fontSize:14,lineHeight:18,fontWeight:font.weightSemiBold,letterSpacing:0},bodyShortRegularLarge:{fontSize:16,lineHeight:24,fontWeight:font.weightRegular,letterSpacing:0},bodyShortBoldLarge:{fontSize:16,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},bodyLongRegular:{fontSize:14,lineHeight:24,fontWeight:font.weightRegular,letterSpacing:0},bodyLongRegularLarge:{fontSize:16,lineHeight:26,fontWeight:font.weightRegular,letterSpacing:0},bodyLongBold:{fontSize:14,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},heading1:{fontSize:54,lineHeight:64,fontWeight:font.weightSemiBold,letterSpacing:0},heading2:{fontSize:42,lineHeight:50,fontWeight:font.weightSemiBold,letterSpacing:0},heading3:{fontSize:32,lineHeight:40,fontWeight:font.weightSemiBold,letterSpacing:0},heading4:{fontSize:28,lineHeight:36,fontWeight:font.weightSemiBold,letterSpacing:0},heading5:{fontSize:20,lineHeight:28,fontWeight:font.weightSemiBold,letterSpacing:0},heading6:{fontSize:16,lineHeight:26,fontWeight:font.weightSemiBold,letterSpacing:0},heading7:{fontSize:14,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0}},breakpoints:{values:{0:0,320:320,400:400,480:480}}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function JitsiThemeProvider(props){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:BaseTheme,children:props.children})}var src_ThemeProvider=JitsiThemeProvider;try{JitsiThemeProvider.displayName="JitsiThemeProvider",JitsiThemeProvider.__docgenInfo={description:"",displayName:"JitsiThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ThemeProvider.tsx#JitsiThemeProvider"]={docgenInfo:JitsiThemeProvider.__docgenInfo,name:"JitsiThemeProvider",path:"src/ThemeProvider.tsx#JitsiThemeProvider"})}catch(__react_docgen_typescript_loader_error){}var decorators=[function(Story){return(0,jsx_runtime.jsx)(src_ThemeProvider,{children:(0,jsx_runtime.jsx)(Story,{})})}],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["decorators","parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Button/Button.stories.tsx":"./src/Button/Button.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./src/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[196],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);