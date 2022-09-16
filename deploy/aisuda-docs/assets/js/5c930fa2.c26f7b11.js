"use strict";(self.webpackChunkaisuda_docs=self.webpackChunkaisuda_docs||[]).push([[3961],{3905:(n,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var t=a(67294);function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function p(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function o(n,e){if(null==n)return{};var a,t,l=function(n,e){if(null==n)return{};var a,t,l={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(l[a]=n[a])}return l}var i=t.createContext({}),d=function(n){var e=t.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):p(p({},e),n)),a},m=function(n){var e=d(n.components);return t.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(n,e){var a=n.components,l=n.mdxType,r=n.originalType,i=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),s=d(a),c=l,k=s["".concat(i,".").concat(c)]||s[c]||u[c]||r;return a?t.createElement(k,p(p({ref:e},m),{},{components:a})):t.createElement(k,p({ref:e},m))}));function c(n,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=a.length,p=new Array(r);p[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o.mdxType="string"==typeof n?n:l,p[1]=o;for(var d=2;d<r;d++)p[d]=a[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},17726:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(87462),l=(a(67294),a(3905));const r={id:"\u5e94\u7528"},p=void 0,o={unversionedId:"OpenAPI/\u5e94\u7528",id:"OpenAPI/\u5e94\u7528",title:"\u5e94\u7528",description:"\u6574\u4f53\u8bf4\u660e",source:"@site/docs/OpenAPI/\u5e94\u7528.md",sourceDirName:"OpenAPI",slug:"/OpenAPI/\u5e94\u7528",permalink:"/aisuda-docs/OpenAPI/\u5e94\u7528",draft:!1,editUrl:"https://github.com/aisuda/aisuda-docs/edit/main/docs/OpenAPI/\u5e94\u7528.md",tags:[],version:"current",frontMatter:{id:"\u5e94\u7528"},sidebar:"openAPI",previous:{title:"\u7ec4\u7ec7",permalink:"/aisuda-docs/OpenAPI/\u7ec4\u7ec7"},next:{title:"\u6570\u636e\u6a21\u578b",permalink:"/aisuda-docs/OpenAPI/\u6570\u636e\u6a21\u578b"}},i={},d=[{value:"\u6574\u4f53\u8bf4\u660e",id:"\u6574\u4f53\u8bf4\u660e",level:2},{value:"\u5e94\u7528\u6574\u4f53\u63a5\u53e3",id:"\u5e94\u7528\u6574\u4f53\u63a5\u53e3",level:2},{value:"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u6240\u6709\u8d44\u6e90",id:"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u6240\u6709\u8d44\u6e90",level:3},{value:"\u89d2\u8272\u76f8\u5173\u63a5\u53e3",id:"\u89d2\u8272\u76f8\u5173\u63a5\u53e3",level:2},{value:"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u89d2\u8272\u5217\u8868",id:"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u89d2\u8272\u5217\u8868",level:3},{value:"\u521b\u5efa\u5e94\u7528\u5185\u89d2\u8272",id:"\u521b\u5efa\u5e94\u7528\u5185\u89d2\u8272",level:3},{value:"\u5220\u9664\u89d2\u8272",id:"\u5220\u9664\u89d2\u8272",level:3},{value:"\u83b7\u53d6\u89d2\u8272\u4e2d\u7684\u7528\u6237\u5217\u8868",id:"\u83b7\u53d6\u89d2\u8272\u4e2d\u7684\u7528\u6237\u5217\u8868",level:3},{value:"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u7528\u6237",id:"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u7528\u6237",level:3},{value:"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u89d2\u8272",id:"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u89d2\u8272",level:3},{value:"\u6743\u9650\u76f8\u5173\u63a5\u53e3",id:"\u6743\u9650\u76f8\u5173\u63a5\u53e3",level:2},{value:"\u83b7\u53d6\u5e94\u7528\u4e0b\u6709\u54ea\u4e9b ACL \u914d\u7f6e\u9879",id:"\u83b7\u53d6\u5e94\u7528\u4e0b\u6709\u54ea\u4e9b-acl-\u914d\u7f6e\u9879",level:3},{value:"\u8bbe\u7f6e\u67d0\u4e2a\u89d2\u8272\u6240\u62e5\u6709\u7684\u8d44\u6e90\u6743\u9650",id:"\u8bbe\u7f6e\u67d0\u4e2a\u89d2\u8272\u6240\u62e5\u6709\u7684\u8d44\u6e90\u6743\u9650",level:3},{value:"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u53ef\u914d\u7f6e\u7684\u6743\u9650\u70b9",id:"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u53ef\u914d\u7f6e\u7684\u6743\u9650\u70b9",level:3},{value:"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u8fd0\u884c\u6001\u6743\u9650\u503c",id:"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u8fd0\u884c\u6001\u6743\u9650\u503c",level:3},{value:"\u83b7\u53d6\u7528\u6237\u5728\u67d0\u4e2a\u5e94\u7528\u4e2d\u7684\u89d2\u8272",id:"\u83b7\u53d6\u7528\u6237\u5728\u67d0\u4e2a\u5e94\u7528\u4e2d\u7684\u89d2\u8272",level:3}],m={toc:d};function u(n){let{components:e,...a}=n;return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6574\u4f53\u8bf4\u660e"},"\u6574\u4f53\u8bf4\u660e"),(0,l.kt)("p",null,"\u5e94\u7528 API \u53ef\u4ee5\u4f7f\u7528\u7ec4\u7ec7\u7684\u5bc6\u94a5\u6216\u8005\u5e94\u7528\u7ea7\u522b\u5bc6\u94a5\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u63a5\u53e3\u8def\u5f84\u524d\u7f00\u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"/openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/"),"\uff0c\u9700\u8981\u5c06\u8def\u5f84\u4e2d\u7684\u77ed\u540d\u5b57\u6362\u6210\u5b9e\u9645\u7684\u503c\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"/openapi/company/50b55/app/6a814/")),(0,l.kt)("h2",{id:"\u5e94\u7528\u6574\u4f53\u63a5\u53e3"},"\u5e94\u7528\u6574\u4f53\u63a5\u53e3"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u6240\u6709\u8d44\u6e90"},"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u6240\u6709\u8d44\u6e90"),(0,l.kt)("p",null,"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u6240\u6709\u8d44\u6e90\uff0c\u7528\u4e8e\u5916\u90e8\u7cfb\u7edf\u63a7\u5236\u7231\u901f\u642d\u7684\u6743\u9650\u5206\u914d\u3002"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"GET /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/resources")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "",\n  "data": {\n    "page": {\n      "name": "\u9875\u9762",\n      "items": [\n        {\n          "id": "k1Jw8ME8Gq",\n          "name": "\u9875\u9762\u540d"\n        }\n      ]\n    },\n    "dataModel": {\n      "name": "\u6570\u636e\u6a21\u578b",\n      "items": [\n        {\n          "id": "M9QEWvywp8",\n          "name": "\u6570\u636e\u6a21\u578b\u540d"\n        }\n      ]\n    },\n    "dataSource": {\n      "name": "\u6570\u636e\u6e90",\n      "items": [\n        {\n          "id": "k1Jw8ME8Gq",\n          "name": "\u6570\u636e\u6e90\u540d"\n        }\n      ]\n    },\n    "component": {\n      "name": "\u81ea\u5b9a\u4e49\u7ec4\u4ef6",\n      "items": [\n        {\n          "id": "LM6wPMEJdb",\n          "name": "\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u540d"\n        }\n      ]\n    },\n    "APICenter": {\n      "name": "API",\n      "items": [\n        {\n          "id": "pezEbloLAB",\n          "name": "api\u540d"\n        }\n      ]\n    },\n    "APICenterGroup": {\n      "name": "API \u5206\u7ec4",\n      "items": [\n        {\n          "id": "grOwVRwNXG",\n          "name": "\u5206\u7ec4\u540d"\n        }\n      ]\n    },\n    "role": {\n      "name": "\u89d2\u8272",\n      "items": [\n        {\n          "id": "pezEbloLAB",\n          "name": "\u5e94\u7528\u7ba1\u7406\u5458"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"\u89d2\u8272\u76f8\u5173\u63a5\u53e3"},"\u89d2\u8272\u76f8\u5173\u63a5\u53e3"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u89d2\u8272\u5217\u8868"},"\u83b7\u53d6\u5e94\u7528\u4e0b\u7684\u89d2\u8272\u5217\u8868"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"GET /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "",\n  "data": {\n    "items": [\n      {\n        "name": "\u5e94\u7528\u7ba1\u7406\u5458", // \u89d2\u8272\u540d\u79f0\uff0c\u89d2\u8272\u540d\u79f0\u5728\u4e00\u4e2a\u5e94\u7528\u5185\u4e0d\u53ef\u91cd\u540d\n        "id": "pezEbloLAB", // \u89d2\u8272\u552f\u4e00 id\n        "description": "\u7cfb\u7edf\u81ea\u52a8\u521b\u5efa\uff0c\u5e94\u7528\u7ea7\u522b\u89d2\u8272\uff0c\u53ea\u5728\u5e94\u7528\u300cnw\u300d\u4e2d\u53ef\u89c1\u3002", // \u63cf\u8ff0\u65b0\n        "scope": "app", // \u8fd9\u662f\u5e94\u7528\u7ea7\u522b\n        "isBultin": true, // \u662f\u5426\u662f\u9ed8\u8ba4\u521b\u5efa\u7684\n        "editable": true, // \u662f\u5426\u53ef\u7f16\u8f91\n        "deleteable": true // \u662f\u5426\u53ef\u5220\u9664\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"\u521b\u5efa\u5e94\u7528\u5185\u89d2\u8272"},"\u521b\u5efa\u5e94\u7528\u5185\u89d2\u8272"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Post /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role")),(0,l.kt)("p",null,"\u63d0\u4ea4\u5185\u5bb9\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'{"name": "\u89d2\u8272\u540d"}')),(0,l.kt)("h3",{id:"\u5220\u9664\u89d2\u8272"},"\u5220\u9664\u89d2\u8272"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Delete /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role/{\u89d2\u8272 id}")),(0,l.kt)("p",null,"\u9700\u8981\u5c06\u89d2\u8272 id \u653e\u5230 url \u4e2d"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u89d2\u8272\u4e2d\u7684\u7528\u6237\u5217\u8868"},"\u83b7\u53d6\u89d2\u8272\u4e2d\u7684\u7528\u6237\u5217\u8868"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Get /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role/{\u89d2\u8272 id}/member")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "",\n  "data": {\n    // \u89d2\u8272\u4e0b\u5305\u542b\u7684\u7528\u6237\u7c7b\u522b\n    "users": [\n      {\n        "nickName": "xxx", // \u7528\u6237\u6635\u79f0\n        "email": "xxx@yyy.com", // \u7528\u6237\u90ae\u7bb1\n        "roleId": "l2pEKAo1Ry",\n        "id": "XdkEyJZMRp", // \u7528\u6237 id\n        "removable": true\n      }\n    ],\n    // \u89d2\u8272\u4e0b\u5305\u542b\u7684\u90e8\u95e8\u5217\u8868\n    "departments": [\n      {\n        "roleId": "l2pEKAo1Ry",\n        "id": "4MDE4xELmX", // \u90e8\u95e8 id\n        "name": "\u90e8\u95e8\u540d"\n      }\n    ],\n    // \u89d2\u8272\u4e0b\u5305\u542b\u7684\u89d2\u8272\u5217\u8868\n    "roles": [\n      {\n        "roleId": "l2pEKAo1Ry",\n        "id": "3Y4wzNwQ7P",\n        "name": "\u5b50\u89d2\u8272\u540d"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u7528\u6237"},"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u7528\u6237"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Post /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role/{\u89d2\u8272 id}/member/user")),(0,l.kt)("p",null,"\u63d0\u4ea4\u5185\u5bb9\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'{"email": "xxx@yyy.com"}')),(0,l.kt)("h3",{id:"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u89d2\u8272"},"\u5f80\u89d2\u8272\u4e2d\u6dfb\u52a0\u89d2\u8272"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Post /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role/{\u89d2\u8272 id}/member/role")),(0,l.kt)("p",null,"\u63d0\u4ea4\u5185\u5bb9\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'{"role": " \u89d2\u8272 ID"}')),(0,l.kt)("h2",{id:"\u6743\u9650\u76f8\u5173\u63a5\u53e3"},"\u6743\u9650\u76f8\u5173\u63a5\u53e3"),(0,l.kt)("h3",{id:"\u83b7\u53d6\u5e94\u7528\u4e0b\u6709\u54ea\u4e9b-acl-\u914d\u7f6e\u9879"},"\u83b7\u53d6\u5e94\u7528\u4e0b\u6709\u54ea\u4e9b ACL \u914d\u7f6e\u9879"),(0,l.kt)("p",null,"\u7528\u4e8e\u544a\u77e5\u7b2c\u4e09\u65b9\u7231\u901f\u642d\u4e2d\u6709\u54ea\u4e9b\u53ef\u4ee5\u914d\u7f6e\u7684\u6743\u9650\uff0c\u6bd4\u5982\u9875\u9762\u53ef\u4ee5\u914d\u7f6e\u300c\u53ef\u89c1\u300d\u3001\u300c\u53ef\u5199\u300d\u3001\u300c\u53ef\u5220\u300d\u8fd9\u4e09\u9879\u3002"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Get /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/acl/options")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "",\n  "data": [\n    {\n      "name": "page",\n      "options": [\n        {\n          "name": "read",\n          "label": "\u53ef\u89c1"\n        },\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        }\n      ]\n    },\n    {\n      "name": "dataModel",\n      "options": [\n        {\n          "name": "read",\n          "label": "\u53ef\u89c1"\n        },\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        }\n      ]\n    },\n    {\n      "name": "dataSource",\n      "options": [\n        {\n          "name": "read",\n          "label": "\u53ef\u89c1"\n        },\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        }\n      ]\n    },\n    {\n      "name": "component",\n      "options": [\n        {\n          "name": "read",\n          "label": "\u53ef\u89c1"\n        },\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        }\n      ]\n    },\n    {\n      "name": "APICenter",\n      "options": [\n        {\n          "name": "read",\n          "label": "\u53ef\u89c1"\n        },\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        },\n        {\n          "name": "call",\n          "label": "\u8c03\u7528"\n        }\n      ]\n    },\n    {\n      "name": "APICenterGroup",\n      "options": [\n        {\n          "name": "read",\n          "label": "\u53ef\u89c1"\n        },\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        }\n      ]\n    },\n    {\n      "name": "role",\n      "options": [\n        {\n          "name": "write",\n          "label": "\u53ef\u5199"\n        },\n        {\n          "name": "delete",\n          "label": "\u53ef\u5220"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u67d0\u4e2a\u89d2\u8272\u6240\u62e5\u6709\u7684\u8d44\u6e90\u6743\u9650"},"\u8bbe\u7f6e\u67d0\u4e2a\u89d2\u8272\u6240\u62e5\u6709\u7684\u8d44\u6e90\u6743\u9650"),(0,l.kt)("p",null,"\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Post /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/acl/role?roleName={\u89d2\u8272\u540d}")),(0,l.kt)("p",null,"\u63d0\u4ea4\u5185\u5bb9\u793a\u4f8b\uff0c\u63d0\u4ea4\u5185\u5bb9\u662f\u6570\u7ec4\uff0c\u53ef\u4ee5\u540c\u65f6\u8bbe\u7f6e\u591a\u4e2a\u8d44\u6e90\u7684\u6743\u9650\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "APICenter", // \u4fee\u6539 api \u4e2d\u5fc3\u7684\u6743\u9650\n    "id": "LM6wPMEJdb", // \u5bf9\u5e94\u7684 api id\n    "acl": {"read": true, "write": false, "call": true, "delete": false} // \u6743\u9650\u8be6\u60c5\uff0c\u5177\u4f53\u67d0\u4e2a\u8d44\u6e90\u6709\u54ea\u4e9b\u8bf7\u53c2\u8003\u524d\u9762\u63a5\u53e3\u8fd4\u56de\u7684\u5185\u5bb9\n  },\n  {\n    "type": "page", // \u4fee\u6539\u67d0\u4e2a\u9875\u9762\u7684\u6743\u9650\n    "id": "dl6EgeojP1", // \u5bf9\u5e94\u7684\u9875\u9762 id\n    "acl": "*" // \u9664\u4e86\u524d\u9762\u8bf4\u5230\u7684\u65b9\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 * \u6765\u65b9\u4fbf\u8bbe\u7f6e\u8fd9\u4e2a\u8d44\u6e90\u7684\u6240\u6709\u6743\u9650\n  }\n]\n')),(0,l.kt)("h3",{id:"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u53ef\u914d\u7f6e\u7684\u6743\u9650\u70b9"},"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u53ef\u914d\u7f6e\u7684\u6743\u9650\u70b9"),(0,l.kt)("p",null,"\u5730\u5740: ",(0,l.kt)("inlineCode",{parentName:"p"},"Get /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/acl")),(0,l.kt)("p",null,"\u8fd4\u56de\u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "",\n  "data": {\n    "app": {\n      "key": "877f21d1cc5a",\n      "name": "XXX\u5e94\u7528",\n      "subResources": [\n        {\n          "label": "\u5e94\u7528\u8bbf\u95ee",\n          "value": "read"\n        },\n        {\n          "label": "\u5e94\u7528\u7ba1\u7406",\n          "value": "edit"\n        },\n        {\n          "label": "\u6570\u636e\u7ba1\u7406",\n          "value": "dataManage"\n        }\n      ]\n    },\n    "page": {\n      "name": "\u9875\u9762",\n      "items": [\n        {\n          "id": "k1Jw8ME8Gq",\n          "name": "\u9875\u9762\u540d",\n          "subResources": [\n            {\n              "label": "\u53ef\u6253\u5370",\n              "value": "print"\n            },\n            {\n              "label": "\u53ef\u5bfc\u51fa",\n              "value": "export"\n            },\n            {\n              "label": "xxx\u63a5\u53e3\u53ef\u8c03\u7528",\n              "value": "api.muEb9u9DdpbaGiFMhWqdjm.call"\n            }\n          ],\n          "children": [\n            // \u9875\u9762\u672c\u8eab\u662f\u6811\u5f62\u7ed3\u6784\u7684\uff0c\u6240\u4ee5\u7528 tree \u7684\u683c\u5f0f\u8fd4\u56de\n          ]\n        }\n      ]\n    },\n    "dataModel": {\n      "name": "\u6570\u636e\u6a21\u578b",\n      "items": [\n        {\n          "id": "M9QEWvywp8",\n          "name": "\u6570\u636e\u6a21\u578b\u540d"\n        }\n      ]\n    },\n    "dataSource": {\n      "name": "\u6570\u636e\u6e90",\n      "items": [\n        {\n          "id": "k1Jw8ME8Gq",\n          "name": "\u6570\u636e\u6e90\u540d"\n        }\n      ]\n    },\n    "component": {\n      "name": "\u81ea\u5b9a\u4e49\u7ec4\u4ef6",\n      "items": [\n        {\n          "id": "LM6wPMEJdb",\n          "name": "\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u540d"\n        }\n      ]\n    },\n    "APICenter": {\n      "name": "API",\n      "items": [\n        {\n          "id": "pezEbloLAB",\n          "name": "api\u540d"\n        }\n      ]\n    },\n    "APICenterGroup": {\n      "name": "API \u5206\u7ec4",\n      "items": [\n        {\n          "id": "grOwVRwNXG",\n          "name": "\u5206\u7ec4\u540d"\n        }\n      ]\n    },\n    "role": {\n      "name": "\u89d2\u8272",\n      "items": [\n        {\n          "id": "pezEbloLAB",\n          "name": "\u5e94\u7528\u7ba1\u7406\u5458"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u8fd0\u884c\u6001\u6743\u9650\u503c"},"\u83b7\u53d6\u67d0\u4e2a\u5e94\u7528\u8fd0\u884c\u6001\u6743\u9650\u503c"),(0,l.kt)("p",null,"\u5730\u5740: ",(0,l.kt)("inlineCode",{parentName:"p"},"Get /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/acl/runtime")),(0,l.kt)("p",null,"\u8fd4\u56de\u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "data": {\n    "readAcl": ["role:pezEbAOwLA", "role:yMJwpLmwpx"],\n    "editAcl": ["role:lKVZOXnoBd", "role:7dAE5Kro59"],\n    "dataManageAcl": ["role:lKVZOXnoBd", "role:7dAE5Kro59"],\n    "resourceAcl": {\n      "pages": [\n        {\n          "id": "8Yrw1RREK9",\n          "acl": {\n            "read": ["role:pezEbAOwLA"],\n            "owner": {\n              "write": true,\n              "delete": true\n            },\n            "3mrZq9ZjNR": {\n              "write": true,\n              "delete": true\n            },\n            "role:pezEbAOwLA": {\n              "read": true\n            }\n          },\n          "title": "\u9996\u9875",\n          "children": [\n            {\n              "id": "3nywlG0ogX",\n              "acl": {\n                "read": ["role:pezEbAOwLA"],\n                "owner": {\n                  "write": true,\n                  "delete": true\n                },\n                "3mrZq9ZjNR": {\n                  "write": true,\n                  "delete": true\n                },\n                "role:pezEbAOwLA": {\n                  "read": true\n                }\n              },\n              "title": "A",\n              "children": []\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"\u83b7\u53d6\u7528\u6237\u5728\u67d0\u4e2a\u5e94\u7528\u4e2d\u7684\u89d2\u8272"},"\u83b7\u53d6\u7528\u6237\u5728\u67d0\u4e2a\u5e94\u7528\u4e2d\u7684\u89d2\u8272"),(0,l.kt)("p",null,"\u5730\u5740: ",(0,l.kt)("inlineCode",{parentName:"p"},"Get /openapi/company/{\u7ec4\u7ec7\u77ed\u540d\u5b57}/app/{\u5e94\u7528\u77ed\u540d\u5b57}/role/member/{\u7528\u6237ID}/roles")),(0,l.kt)("p",null,"\u8fd4\u56de\u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "msg": "",\n  "data": {\n    "companyId": "k1Jw8ME8Gq",\n    "appId": "7dAE5Ko59n",\n    "userId": "k1Jw8ME8Gq",\n    "roles": [\n      {\n        "roleId": "lKVZOnEBdk", // \u89d2\u8272ID\n        "roleName": "MyApp-\u7ba1\u7406\u5458" // \u89d2\u8272\u540d\u79f0\n      },\n      {\n        "roleId": "dl6EgeojP1",\n        "roleName": "MyApp-\u7528\u6237"\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);