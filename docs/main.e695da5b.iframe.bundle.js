(self.webpackChunkjitsi_ui_library=self.webpackChunkjitsi_ui_library||[]).push([[179],{"./src/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page}});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Jitsi UI/Introduction",mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",null,"Welcome to Jitsi UI Library"))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Jitsi UI/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))},__webpack_exports__.default=componentMeta;const __namedExportsOrder=["__page"]},"./src/Button/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Icon:function(){return Button_stories_Icon},IconText:function(){return IconText},Text:function(){return Text},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),makeStyles=__webpack_require__("./node_modules/@material-ui/core/esm/styles/makeStyles.js");function withPixelLineHeight(base){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},base),{},{lineHeight:"".concat(base.lineHeight,"px")})}var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),createForOfIteratorHelper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),_excluded=["children","style","touchFeedback","visible"];function getFixedPlatformStyle(style){if(Array.isArray(style)){var _step,_style={},_iterator=(0,createForOfIteratorHelper.Z)(style);try{for(_iterator.s();!(_step=_iterator.n()).done;){var component=_step.value;Object.assign(_style,component)}}catch(err){_iterator.e(err)}finally{_iterator.f()}return _style}return style}var AbstractContainer=function(_Component){(0,inherits.Z)(AbstractContainer,_Component);var _super=(0,createSuper.Z)(AbstractContainer);function AbstractContainer(){return(0,classCallCheck.Z)(this,AbstractContainer),_super.apply(this,arguments)}return(0,createClass.Z)(AbstractContainer,[{key:"_render",value:function _render(type,props){var _ref=props||this.props,children=_ref.children,style=_ref.style,filteredProps=(_ref.touchFeedback,_ref.visible,(0,objectWithoutProperties.Z)(_ref,_excluded)),_style=getFixedPlatformStyle(style);return react.createElement(type,(0,objectSpread2.Z)({style:_style},filteredProps),children)}}]),AbstractContainer}(react.Component);try{getFixedPlatformStyle.displayName="getFixedPlatformStyle",getFixedPlatformStyle.__docgenInfo={description:"",displayName:"getFixedPlatformStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base/react/AbstractContainer.tsx#getFixedPlatformStyle"]={docgenInfo:getFixedPlatformStyle.__docgenInfo,name:"getFixedPlatformStyle",path:"src/base/react/AbstractContainer.tsx#getFixedPlatformStyle"})}catch(__react_docgen_typescript_loader_error){}try{AbstractContainer.displayName="AbstractContainer",AbstractContainer.__docgenInfo={description:"Abstract (base) class for container of React {@link Component} children with\na style.",displayName:"AbstractContainer",props:{accessibilityLabel:{defaultValue:null,description:"An optional accessibility label to apply to the container root.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"Whether or not this element is an accessibility element.",name:"accessible",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"React Elements to display within the component.",name:"children",required:!1,type:{name:"string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ... 40 more ..."}},className:{defaultValue:null,description:"Class names of the component (for web).",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"The event handler/listener to be invoked when this\n{@code AbstractContainer} is clicked on Web or pressed on React\nNative. If {@code onClick} is defined and {@link touchFeedback } is\nundefined, {@code touchFeedback} is considered defined as\n{@code true}.",name:"onClick",required:!1,type:{name:"Function"}},style:{defaultValue:null,description:"The style (as in stylesheet) to be applied to this\n{@code AbstractContainer}.",name:"style",required:!1,type:{name:"Object | string[]"}},touchFeedback:{defaultValue:null,description:"If this instance is to provide visual feedback when touched, then\n{@code true}; otherwise, {@code false}. If {@code touchFeedback} is\nundefined and {@link onClick } is defined, {@code touchFeedback} is\nconsidered defined as {@code true}.",name:"touchFeedback",required:!1,type:{name:"Function"}},underlayColor:{defaultValue:null,description:"Color to display when clicked.",name:"underlayColor",required:!1,type:{name:"string"}},visible:{defaultValue:null,description:"If this {@code AbstractContainer} is to be visible, then {@code true}\nor {@code false} if this instance is to be hidden or not rendered at\nall.",name:"visible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base/react/AbstractContainer.tsx#AbstractContainer"]={docgenInfo:AbstractContainer.__docgenInfo,name:"AbstractContainer",path:"src/base/react/AbstractContainer.tsx#AbstractContainer"})}catch(__react_docgen_typescript_loader_error){}var Container=function(_AbstractContainer){(0,inherits.Z)(Container,_AbstractContainer);var _super=(0,createSuper.Z)(Container);function Container(){return(0,classCallCheck.Z)(this,Container),_super.apply(this,arguments)}return(0,createClass.Z)(Container,[{key:"render",value:function render(){var _this$props$visible=this.props.visible;return void 0===_this$props$visible||_this$props$visible?(0,get.Z)((0,getPrototypeOf.Z)(Container.prototype),"_render",this).call(this,"div"):null}}]),Container}(AbstractContainer);try{Container.displayName="Container",Container.__docgenInfo={description:"Represents a container of React/Web {@link Component } children with a style.",displayName:"Container",props:{accessibilityLabel:{defaultValue:null,description:"An optional accessibility label to apply to the container root.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"Whether or not this element is an accessibility element.",name:"accessible",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"React Elements to display within the component.",name:"children",required:!1,type:{name:"string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ... 40 more ..."}},className:{defaultValue:null,description:"Class names of the component (for web).",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"The event handler/listener to be invoked when this\n{@code AbstractContainer} is clicked on Web or pressed on React\nNative. If {@code onClick} is defined and {@link touchFeedback } is\nundefined, {@code touchFeedback} is considered defined as\n{@code true}.",name:"onClick",required:!1,type:{name:"Function"}},style:{defaultValue:null,description:"The style (as in stylesheet) to be applied to this\n{@code AbstractContainer}.",name:"style",required:!1,type:{name:"Object | string[]"}},touchFeedback:{defaultValue:null,description:"If this instance is to provide visual feedback when touched, then\n{@code true}; otherwise, {@code false}. If {@code touchFeedback} is\nundefined and {@link onClick } is defined, {@code touchFeedback} is\nconsidered defined as {@code true}.",name:"touchFeedback",required:!1,type:{name:"Function"}},underlayColor:{defaultValue:null,description:"Color to display when clicked.",name:"underlayColor",required:!1,type:{name:"string"}},visible:{defaultValue:null,description:"If this {@code AbstractContainer} is to be visible, then {@code true}\nor {@code false} if this instance is to be hidden or not rendered at\nall.",name:"visible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base/react/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/base/react/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon_excluded=["className","color","id","containerId","onClick","size","src","style","ariaHasPopup","ariaLabel","ariaDisabled","ariaExpanded","ariaControls","tabIndex","ariaPressed","ariaDescribedBy","role","onKeyPress","onKeyDown"],_excluded2=["color","fontSize"];function styleTypeToObject(st){if(!st)return{};if(Array.isArray(st)){var _step,flatStyle={},_iterator=(0,createForOfIteratorHelper.Z)(st);try{for(_iterator.s();!(_step=_iterator.n()).done;){var styleElement=_step.value;Object.assign(flatStyle,styleTypeToObject(styleElement))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return flatStyle}return st}var DEFAULT_COLOR="ReactNative"===navigator.product?"white":void 0,DEFAULT_SIZE="ReactNative"===navigator.product?36:22;function Icon(props){var _ref,_ref2,className=props.className,color=props.color,id=props.id,containerId=props.containerId,onClick=props.onClick,size=props.size,IconComponent=props.src,style=props.style,ariaHasPopup=props.ariaHasPopup,ariaLabel=props.ariaLabel,ariaDisabled=props.ariaDisabled,ariaExpanded=props.ariaExpanded,ariaControls=props.ariaControls,tabIndex=props.tabIndex,ariaPressed=props.ariaPressed,ariaDescribedBy=props.ariaDescribedBy,role=props.role,onKeyPress=props.onKeyPress,onKeyDown=props.onKeyDown,rest=(0,objectWithoutProperties.Z)(props,Icon_excluded),_styleTypeToObject=styleTypeToObject(null!=style?style:{}),styleColor=_styleTypeToObject.color,styleSize=_styleTypeToObject.fontSize,restStyle=(0,objectWithoutProperties.Z)(_styleTypeToObject,_excluded2),calculatedColor=null!==(_ref=null!=color?color:styleColor)&&void 0!==_ref?_ref:DEFAULT_COLOR,calculatedSize=null!==(_ref2=null!=size?size:styleSize)&&void 0!==_ref2?_ref2:DEFAULT_SIZE,onKeyPressHandler=(0,react.useCallback)((function(e){"Enter"!==e.key&&" "!==e.key||!onClick?onKeyPress&&onKeyPress(e):(e.preventDefault(),onClick(e))}),[onClick,onKeyPress]),jitsiIconClassName=calculatedColor?"jitsi-icon":"jitsi-icon jitsi-icon-default";return(0,jsx_runtime.jsx)(Container,(0,objectSpread2.Z)((0,objectSpread2.Z)({},rest),{},{"aria-controls":ariaControls,"aria-describedby":ariaDescribedBy,"aria-disabled":ariaDisabled,"aria-expanded":ariaExpanded,"aria-haspopup":ariaHasPopup,"aria-label":ariaLabel,"aria-pressed":ariaPressed,className:"".concat(jitsiIconClassName," ").concat(className||""),id:containerId,onClick:onClick,onKeyDown:onKeyDown,onKeyPress:onKeyPressHandler,role:role,style:restStyle,tabIndex:tabIndex,children:(0,jsx_runtime.jsx)(IconComponent,{fill:calculatedColor,height:calculatedSize,id:id,width:calculatedSize})}))}Icon.defaultProps={className:""};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Implements an Icon component that takes a loaded SVG file as prop and renders it as an icon.",displayName:"Icon",props:{className:{defaultValue:{value:""},description:"Class name for the web platform, if any.",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Color of the icon (if not provided by the style object).",name:"color",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Id prop (mainly for autotests).",name:"id",required:!1,type:{name:"string"}},containerId:{defaultValue:null,description:"Id of the icon container.",name:"containerId",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Function to invoke on click.",name:"onClick",required:!1,type:{name:"Function"}},size:{defaultValue:null,description:"The size of the icon (if not provided by the style object).",name:"size",required:!1,type:{name:"string | number"}},src:{defaultValue:null,description:"The preloaded icon component to render.",name:"src",required:!0,type:{name:"any"}},style:{defaultValue:null,description:"Style object to be applied.",name:"style",required:!1,type:{name:"Object"}},ariaDisabled:{defaultValue:null,description:"Aria disabled flag for the Icon.",name:"ariaDisabled",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Aria label for the Icon.",name:"ariaLabel",required:!1,type:{name:"string"}},ariaHasPopup:{defaultValue:null,description:"Whether the element has a popup.",name:"ariaHasPopup",required:!1,type:{name:"boolean"}},ariaPressed:{defaultValue:null,description:"Whether the element has a pressed.",name:"ariaPressed",required:!1,type:{name:"boolean"}},ariaDescribedBy:{defaultValue:null,description:"Id of description label.",name:"ariaDescribedBy",required:!1,type:{name:"string"}},ariaExpanded:{defaultValue:null,description:"Whether the element popup is expanded.",name:"ariaExpanded",required:!1,type:{name:"boolean"}},ariaControls:{defaultValue:null,description:"The id of the element this button icon controls.",name:"ariaControls",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"TabIndex  for the Icon.",name:"tabIndex",required:!1,type:{name:"number"}},role:{defaultValue:null,description:"Role for the Icon.",name:"role",required:!1,type:{name:"string"}},onKeyPress:{defaultValue:null,description:"Keypress handler.",name:"onKeyPress",required:!1,type:{name:"Function"}},onKeyDown:{defaultValue:null,description:"Keydown handler.",name:"onKeyDown",required:!1,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/components/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icons/components/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}var useStyles=(0,makeStyles.Z)((function(theme){return{button:(0,objectSpread2.Z)((0,objectSpread2.Z)({backgroundColor:theme.palette.action01,color:theme.palette.text01,borderRadius:theme.shape.borderRadius,padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"center",border:0},withPixelLineHeight(theme.typography.bodyShortBold)),{},{transition:"background .2s",cursor:"pointer","&:hover":{backgroundColor:theme.palette.action01Hover},"&:active":{backgroundColor:theme.palette.action01Active},"&:focus":{outline:0,boxShadow:"0px 0px 0px 2px ".concat(theme.palette.focus01)},"& svg":{fill:theme.palette.icon01}}),primary:{},secondary:{backgroundColor:theme.palette.action02,color:theme.palette.text04,"&:hover":{backgroundColor:theme.palette.action02Hover},"&:active":{backgroundColor:theme.palette.action02Active},"& svg":{fill:theme.palette.icon04}},tertiary:{backgroundColor:theme.palette.action03,"&:hover":{backgroundColor:theme.palette.action03Hover},"&:active":{backgroundColor:theme.palette.action03Active}},destructive:{backgroundColor:theme.palette.actionDanger,"&:hover":{backgroundColor:theme.palette.actionDangerHover},"&:active":{backgroundColor:theme.palette.actionDangerActive}},disabled:{backgroundColor:theme.palette.disabled01,color:theme.palette.text03,"&:hover":{backgroundColor:theme.palette.disabled01,color:theme.palette.text03},"&:active":{backgroundColor:theme.palette.disabled01,color:theme.palette.text03},"& svg":{fill:theme.palette.icon03}},iconButton:{padding:"10px"},textWithIcon:{marginLeft:"".concat(theme.spacing(2),"px")},small:(0,objectSpread2.Z)((0,objectSpread2.Z)({padding:"8px 16px"},withPixelLineHeight(theme.typography.labelBold)),{},{"&.iconButton":{padding:"6px"}}),medium:{},large:(0,objectSpread2.Z)((0,objectSpread2.Z)({padding:"13px 16px"},withPixelLineHeight(theme.typography.bodyShortBoldLarge)),{},{"&.iconButton":{padding:"14px"}})}})),Button=function Button(_ref){var text=_ref.text,icon=_ref.icon,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,disabled=_ref.disabled,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,onClick=_ref.onClick,styles=useStyles();return(0,jsx_runtime.jsxs)("button",{type:"button",className:"".concat(styles.button," ").concat(styles[type]," ").concat(disabled?styles.disabled:""," ").concat(icon&&!text?"".concat(styles.iconButton," iconButton"):""," ").concat(styles[size]),disabled:disabled,onClick:onClick,children:[icon&&(0,jsx_runtime.jsx)(Icon,{src:icon,style:{display:"flex"}}),text&&(0,jsx_runtime.jsx)("span",{className:icon?styles.textWithIcon:"",children:text})]})};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Object"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"destructive"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var camera_empty_path;function camera_empty_extends(){return camera_empty_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},camera_empty_extends.apply(this,arguments)}var camera_empty=function SvgCameraEmpty(props){return react.createElement("svg",camera_empty_extends({},props,{viewBox:"0 0 22 22"}),camera_empty_path||(camera_empty_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.75 5.5H3.667c-1.013 0-1.834.82-1.834 1.833v7.334c0 1.012.821 1.833 1.834 1.833H13.75c1.012 0 1.833-.82 1.833-1.833v-.786l3.212 1.835a.916.916 0 001.372-.796V7.08a.917.917 0 00-1.372-.796l-3.212 1.835v-.786c0-1.012-.82-1.833-1.833-1.833zm0 3.667v5.5H3.667V7.333H13.75v1.834zm4.583 4.174l-2.75-1.572v-1.538l2.75-1.572v4.682z"})))};var Button_stories={title:"Jitsi UI/Button",component:Button,argTypes:{onClick:{action:"clicked"}}},Template=function Template(args){return(0,jsx_runtime.jsx)(Button,(0,objectSpread2.Z)({},args))},Text=Template.bind({});Text.args={text:"Button",type:"primary",disabled:!1,size:"medium"};var Button_stories_Icon=Template.bind({});Button_stories_Icon.args={type:"primary",disabled:!1,size:"medium",icon:camera_empty};var IconText=Template.bind({});IconText.args={text:"Button",type:"primary",disabled:!1,size:"medium",icon:camera_empty},Text.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Text.parameters),Button_stories_Icon.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Button_stories_Icon.parameters),IconText.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},IconText.parameters);var __namedExportsOrder=["Text","Icon","IconText"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},decorators:function(){return decorators},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),ThemeProvider=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js")),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),createMuiTheme=__webpack_require__("./node_modules/@material-ui/core/esm/styles/createMuiTheme.js"),font={weightRegular:"400",weightSemiBold:"600"};function createColorTokens(colorMap,colors){return Object.entries(colorMap).reduce((function(result,_ref){var _ref2=(0,slicedToArray.Z)(_ref,2),token=_ref2[0],value=_ref2[1];return Object.assign(result,(0,defineProperty.Z)({},token,colors[value]||value))}),{})}var BaseTheme=function createWebTheme(_ref3){var font=_ref3.font,colors=_ref3.colors,colorMap=_ref3.colorMap,shape=_ref3.shape,spacing=_ref3.spacing,typography=_ref3.typography,breakpoints=_ref3.breakpoints;return(0,createMuiTheme.Z)({props:{MuiButtonBase:{disableRipple:!0}},spacing:spacing},{palette:createColorTokens(colorMap,colors),shape:shape,typography:(0,objectSpread2.Z)({font:font},typography),breakpoints:breakpoints})}({font:font,colors:{error03:"#7A141F",error04:"#A21B29",error05:"#CB2233",error06:"#D83848",error08:"#F24D5F",primary01:"#00112D",primary02:"#00225A",primary03:"#003486",primary04:"#0045B3",primary05:"#0056E0",primary06:"#246FE5",primary07:"#4687ED",primary08:"#99BBF3",primary09:"#CCDDF9",surface01:"#040404",surface02:"#141414",surface03:"#292929",surface04:"#3D3D3D",surface05:"#525252",surface06:"#666",surface07:"#858585",surface08:"#A3A3A3",surface09:"#C2C2C2",surface10:"#E0E0E0",surface11:"#FFF",success04:"#189B55",success05:"#1EC26A",warning05:"#F8AE1A",warning06:"#FFD600",support01:"#FF9B42",support02:"#F96E57",support03:"#DF486F",support04:"#B23683",support05:"#73348C",support06:"#6A50D3",support07:"#4380E2",support08:"#00A8B3",support09:"#2AA076",primary10:"#17A0DB",primary11:"#1081B2",primary12:"#B8C7E0",surface00:"#111111",surface12:"#AAAAAA",surface13:"#495258",surface14:"#555555",surface15:"#474747",surface16:"#131519",surface17:"#161618",warning07:"#FFD740",disabled01:"#00000040"},colorMap:{uiBackground:"surface01",ui01:"surface02",ui02:"surface03",ui03:"surface04",ui04:"surface05",ui05:"surface06",action01:"primary06",action01Hover:"primary07",action01Active:"primary04",action02:"surface10",action02Hover:"surface11",action02Active:"surface09",actionDanger:"error05",actionDangerHover:"error06",actionDangerActive:"error04",action03:"transparent",action03Hover:"surface04",action03Active:"surface03",disabled01:"surface09",focus01:"primary07",link01:"primary07",link01Hover:"primary08",link01Active:"primary06",text01:"surface11",text02:"surface09",text03:"surface07",text04:"surface01",textError:"error08",icon01:"surface11",icon02:"surface09",icon03:"surface07",icon04:"surface01",iconError:"error06",field01:"surface04",success01:"success05",success02:"success04",warning01:"warning05",warning02:"warning06",support01:"support01",support02:"support02",support03:"support03",support04:"support04",support05:"support05",support06:"support06",support07:"support07",support08:"support08",support09:"support09",ui00:"surface00",ui12:"surface11",ui13:"surface14",ui14:"surface15",ui15:"surface12",ui16:"surface16",action04:"primary11",action03Focus:"surface07",action03Disabled:"transparent",actionDisabled:"surface09",icon05:"surface04",text05:"surface06",text06:"surface03",text07Info:"surface02",screen01Header:"primary10",screen02Header:"surface17",underlay01:"surface13",bottomSheet:"surface00",dividerColor:"surface12",indicatorColor:"surface12",section01:"surface10",border01:"surface08",border02:"surface06",border03:"surface04",border04:"primary12",border05:"surface07",borderError:"error06",warning03:"warning07",tab01Disabled:"disabled01",switch01Enabled:"success04",switch01Disabled:"surface06",video01Disabled:"disabled01",field01Hover:"surface03",field01Focus:"primary05",field01Disabled:"surface05",field02:"surface11",field02Hover:"primary09",field02Focus:"primary05",field02Disabled:"surface06"},spacing:[0,4,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128],shape:{borderRadius:6,boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.15)"},typography:{labelRegular:{fontSize:12,lineHeight:16,fontWeight:font.weightRegular,letterSpacing:.16},labelBold:{fontSize:12,lineHeight:16,fontWeight:font.weightSemiBold,letterSpacing:.16},labelButton:{fontSize:14,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},labelButtonLarge:{fontSize:16,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},bodyShortRegular:{fontSize:14,lineHeight:18,fontWeight:font.weightRegular,letterSpacing:0},bodyShortBold:{fontSize:14,lineHeight:18,fontWeight:font.weightSemiBold,letterSpacing:0},bodyShortRegularLarge:{fontSize:16,lineHeight:24,fontWeight:font.weightRegular,letterSpacing:0},bodyShortBoldLarge:{fontSize:16,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},bodyLongRegular:{fontSize:14,lineHeight:24,fontWeight:font.weightRegular,letterSpacing:0},bodyLongRegularLarge:{fontSize:16,lineHeight:26,fontWeight:font.weightRegular,letterSpacing:0},bodyLongBold:{fontSize:14,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0},heading1:{fontSize:54,lineHeight:64,fontWeight:font.weightSemiBold,letterSpacing:0},heading2:{fontSize:42,lineHeight:50,fontWeight:font.weightSemiBold,letterSpacing:0},heading3:{fontSize:32,lineHeight:40,fontWeight:font.weightSemiBold,letterSpacing:0},heading4:{fontSize:28,lineHeight:36,fontWeight:font.weightSemiBold,letterSpacing:0},heading5:{fontSize:20,lineHeight:28,fontWeight:font.weightSemiBold,letterSpacing:0},heading6:{fontSize:16,lineHeight:26,fontWeight:font.weightSemiBold,letterSpacing:0},heading7:{fontSize:14,lineHeight:24,fontWeight:font.weightSemiBold,letterSpacing:0}},breakpoints:{values:{0:0,320:320,400:400,480:480}}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function JitsiThemeProvider(props){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:BaseTheme,children:props.children})}var src_ThemeProvider=JitsiThemeProvider;try{JitsiThemeProvider.displayName="JitsiThemeProvider",JitsiThemeProvider.__docgenInfo={description:"",displayName:"JitsiThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ThemeProvider.tsx#JitsiThemeProvider"]={docgenInfo:JitsiThemeProvider.__docgenInfo,name:"JitsiThemeProvider",path:"src/ThemeProvider.tsx#JitsiThemeProvider"})}catch(__react_docgen_typescript_loader_error){}var decorators=[function(Story){return(0,jsx_runtime.jsx)(src_ThemeProvider,{children:(0,jsx_runtime.jsx)(Story,{})})}],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"dark",values:[{name:"dark",value:"#000"},{name:"light",value:"#fff"}]}},__namedExportsOrder=["decorators","parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Button/Button.stories.tsx":"./src/Button/Button.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./src/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[689],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);