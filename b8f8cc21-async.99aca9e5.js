(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b8f8cc21"],{b8f8cc21:function(e,l,s){"use strict";s.d(l,"__esModule",{value:!0}),s.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=s("f19d2b93");s("e60bc177");var i=s("5b220c3d"),n=s("e22febe0"),r=s("a9d1a279");let a=r.Input.Group,d=r.Button.Group,{Option:o}=r.Select,{TreeNode:c}=r.Tree,{Search:h}=r.Input,x=[{value:"tehran",label:"\u062A\u0647\u0631\u0627\u0646",children:[{value:"tehran-c",label:"\u062A\u0647\u0631\u0627\u0646",children:[{value:"saadat-abad",label:"\u0633\u0639\u0627\u062F\u062A \u0622\u06CC\u0627\u062F"}]}]},{value:"ardabil",label:"\u0627\u0631\u062F\u0628\u06CC\u0644",children:[{value:"ardabil-c",label:"\u0627\u0631\u062F\u0628\u06CC\u0644",children:[{value:"primadar",label:"\u067E\u06CC\u0631\u0645\u0627\u062F\u0631"}]}]},{value:"gilan",label:"\u06AF\u06CC\u0644\u0627\u0646",children:[{value:"rasht",label:"\u0631\u0634\u062A",children:[{value:"district-3",label:"\u0645\u0646\u0637\u0642\u0647 \u06F3"}]}]}],j=({placement:e})=>{let[l,s]=(0,i.useState)(0),[j,u]=(0,i.useState)(!1),[p,f]=(0,i.useState)(5),[m,b]=(0,i.useState)(!0),v=(0,t.jsxs)(r.Select,{defaultValue:"Http://",style:{width:90},children:[(0,t.jsx)(o,{value:"Http://",children:"Http://"}),(0,t.jsx)(o,{value:"Https://",children:"Https://"})]}),g=(0,t.jsxs)(r.Select,{defaultValue:".com",style:{width:80},children:[(0,t.jsx)(o,{value:".com",children:".com"}),(0,t.jsx)(o,{value:".jp",children:".jp"}),(0,t.jsx)(o,{value:".cn",children:".cn"}),(0,t.jsx)(o,{value:".org",children:".org"})]}),w=e=>{console.log(e);};return(0,t.jsxs)("div",{className:"direction-components",children:[(0,t.jsx)(r.Row,{children:(0,t.jsxs)(r.Col,{span:24,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Cascader example"}),(0,t.jsx)(r.Cascader,{suffixIcon:(0,t.jsx)(n.SearchOutlined,{}),options:x,onChange:w,placeholder:"\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",placement:e}),"\xa0\xa0\xa0\xa0With search:\xa0\xa0",(0,t.jsx)(r.Cascader,{suffixIcon:(0,t.jsx)(n.SmileOutlined,{}),options:x,onChange:w,placeholder:"Select an item",placement:e,showSearch:{filter:(e,l)=>l.some(l=>l.label.toLowerCase().includes(e.toLowerCase()))}})]})}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.Row,{children:[(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Switch example"}),"\xa0\xa0",(0,t.jsx)(r.Switch,{defaultChecked:!0}),"\xa0\xa0",(0,t.jsx)(r.Switch,{loading:!0,defaultChecked:!0}),"\xa0\xa0",(0,t.jsx)(r.Switch,{size:"small",loading:!0})]}),(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Radio Group example"}),(0,t.jsxs)(r.Radio.Group,{defaultValue:"c",buttonStyle:"solid",children:[(0,t.jsx)(r.Radio.Button,{value:"a",children:"\u062A\u0647\u0631\u0627\u0646"}),(0,t.jsx)(r.Radio.Button,{value:"b",disabled:!0,children:"\u0627\u0635\u0641\u0647\u0627\u0646"}),(0,t.jsx)(r.Radio.Button,{value:"c",children:"\u0641\u0627\u0631\u0633"}),(0,t.jsx)(r.Radio.Button,{value:"d",children:"\u062E\u0648\u0632\u0633\u062A\u0627\u0646"})]})]})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.Row,{children:[(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Button example"}),(0,t.jsxs)("div",{className:"button-demo",children:[(0,t.jsx)(r.Button,{type:"primary",icon:(0,t.jsx)(n.DownloadOutlined,{})}),(0,t.jsx)(r.Button,{type:"primary",shape:"circle",icon:(0,t.jsx)(n.DownloadOutlined,{})}),(0,t.jsx)(r.Button,{type:"primary",shape:"round",icon:(0,t.jsx)(n.DownloadOutlined,{})}),(0,t.jsx)(r.Button,{type:"primary",shape:"round",icon:(0,t.jsx)(n.DownloadOutlined,{}),children:"Download"}),(0,t.jsx)(r.Button,{type:"primary",icon:(0,t.jsx)(n.DownloadOutlined,{}),children:"Download"}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.Button.Group,{children:[(0,t.jsxs)(r.Button,{type:"primary",children:[(0,t.jsx)(n.LeftOutlined,{}),"Backward"]}),(0,t.jsxs)(r.Button,{type:"primary",children:["Forward",(0,t.jsx)(n.RightOutlined,{})]})]}),(0,t.jsx)(r.Button,{type:"primary",loading:!0,children:"Loading"}),(0,t.jsx)(r.Button,{type:"primary",size:"small",loading:!0,children:"Loading"})]})]}),(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Tree example"}),(0,t.jsx)(r.Tree,{showLine:!0,checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],children:(0,t.jsxs)(c,{title:"parent 1",children:[(0,t.jsxs)(c,{title:"parent 1-0",disabled:!0,children:[(0,t.jsx)(c,{title:"leaf",disableCheckbox:!0},"0-0-0-0"),(0,t.jsx)(c,{title:"leaf"},"0-0-0-1")]},"0-0-0"),(0,t.jsx)(c,{title:"parent 1-1",children:(0,t.jsx)(c,{title:(0,t.jsx)("span",{style:{color:"#1677ff"},children:"sss"})},"0-0-1-0")},"0-0-1")]},"0-0")})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)(r.Row,{children:(0,t.jsxs)(r.Col,{span:24,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Input (Input Group) example"}),(0,t.jsx)(a,{size:"large",children:(0,t.jsxs)(r.Row,{gutter:8,children:[(0,t.jsx)(r.Col,{span:5,children:(0,t.jsx)(r.Input,{defaultValue:"0571"})}),(0,t.jsx)(r.Col,{span:8,children:(0,t.jsx)(r.Input,{defaultValue:"26888888"})})]})}),(0,t.jsx)("br",{}),(0,t.jsxs)(a,{compact:!0,children:[(0,t.jsx)(r.Input,{style:{width:"20%"},defaultValue:"0571"}),(0,t.jsx)(r.Input,{style:{width:"30%"},defaultValue:"26888888"})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(a,{compact:!0,children:[(0,t.jsxs)(r.Select,{defaultValue:"Option1",children:[(0,t.jsx)(o,{value:"Option1",children:"Option1"}),(0,t.jsx)(o,{value:"Option2",children:"Option2"})]}),(0,t.jsx)(r.Input,{style:{width:"50%"},defaultValue:"input content"}),(0,t.jsx)(r.InputNumber,{})]}),(0,t.jsx)("br",{}),(0,t.jsx)(h,{placeholder:"input search text",enterButton:"Search",size:"large"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{style:{marginBottom:16},children:(0,t.jsx)(r.Input,{addonBefore:v,addonAfter:g,defaultValue:"mysite"})}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.Row,{children:[(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Select example"}),(0,t.jsxs)(r.Space,{wrap:!0,children:[(0,t.jsxs)(r.Select,{mode:"multiple",defaultValue:"\u0645\u0648\u0631\u0686\u0647",style:{width:120},children:[(0,t.jsx)(o,{value:"jack",children:"Jack"}),(0,t.jsx)(o,{value:"\u0645\u0648\u0631\u0686\u0647",children:"\u0645\u0648\u0631\u0686\u0647"}),(0,t.jsx)(o,{value:"disabled",disabled:!0,children:"Disabled"}),(0,t.jsx)(o,{value:"Yiminghe",children:"yiminghe"})]}),(0,t.jsx)(r.Select,{defaultValue:"\u0645\u0648\u0631\u0686\u0647",style:{width:120},disabled:!0,children:(0,t.jsx)(o,{value:"\u0645\u0648\u0631\u0686\u0647",children:"\u0645\u0648\u0631\u0686\u0647"})}),(0,t.jsx)(r.Select,{defaultValue:"\u0645\u0648\u0631\u0686\u0647",style:{width:120},loading:!0,children:(0,t.jsx)(o,{value:"\u0645\u0648\u0631\u0686\u0647",children:"\u0645\u0648\u0631\u0686\u0647"})}),(0,t.jsxs)(r.Select,{showSearch:!0,style:{width:200},placeholder:"Select a person",children:[(0,t.jsx)(o,{value:"jack",children:"Jack"}),(0,t.jsx)(o,{value:"\u0633\u0639\u06CC\u062F",children:"\u0633\u0639\u06CC\u062F"}),(0,t.jsx)(o,{value:"tom",children:"Tom"})]})]})]}),(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"TreeSelect example"}),(0,t.jsx)(r.TreeSelect,{showSearch:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,children:(0,t.jsxs)(c,{title:"parent 1",children:[(0,t.jsxs)(c,{title:"parent 1-0",children:[(0,t.jsx)(c,{title:"my leaf"},"random"),(0,t.jsx)(c,{title:"your leaf"},"random1")]},"0-1-1"),(0,t.jsx)(c,{title:"parent 1-1",children:(0,t.jsx)(c,{title:(0,t.jsx)("b",{style:{color:"#08c"},children:"sss"})},"random3")},"random2")]},"0-1")})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)(r.Row,{children:(0,t.jsxs)(r.Col,{span:24,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Modal example"}),(0,t.jsx)(r.Button,{type:"primary",onClick:()=>{u(!0);},children:"Open Modal"}),(0,t.jsxs)(r.Modal,{title:"\u067E\u0646\u0686\u0631\u0647 \u0633\u0627\u062F\u0647",open:j,onOk:e=>{console.log(e),u(!1);},onCancel:e=>{console.log(e),u(!1);},children:[(0,t.jsx)("p",{children:"\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F"}),(0,t.jsx)("p",{children:"\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F"}),(0,t.jsx)("p",{children:"\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F"})]})]})}),(0,t.jsx)("br",{}),(0,t.jsx)(r.Row,{children:(0,t.jsxs)(r.Col,{span:24,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Steps example"}),(0,t.jsx)(r.Steps,{progressDot:!0,current:l,items:[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}),(0,t.jsx)("br",{}),(0,t.jsx)(r.Steps,{current:l,onChange:e=>{console.log("onChange:",e),s(e);},items:[{title:"Step 1",description:"This is a description."},{title:"Step 2",description:"This is a description."},{title:"Step 3",description:"This is a description."}]})]})}),(0,t.jsx)("br",{}),(0,t.jsxs)(r.Row,{children:[(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Rate example"}),(0,t.jsx)(r.Rate,{defaultValue:2.5}),(0,t.jsx)("br",{}),(0,t.jsx)("strong",{children:"* Note:"})," Half star not implemented in RTL direction, it will be supported after"," ",(0,t.jsx)("a",{href:"https://github.com/react-component/rate",target:"_blank",rel:"noreferrer",children:"rc-rate"})," ","implement rtl support."]}),(0,t.jsxs)(r.Col,{span:12,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Badge example"}),(0,t.jsx)(r.Badge,{count:p,children:(0,t.jsx)("a",{href:"#",className:"head-example"})}),(0,t.jsxs)(d,{children:[(0,t.jsx)(r.Button,{onClick:()=>{f(e=>e-1<0?0:e-1);},children:(0,t.jsx)(n.MinusOutlined,{})}),(0,t.jsx)(r.Button,{onClick:()=>{f(p+1);},children:(0,t.jsx)(n.PlusOutlined,{})})]}),(0,t.jsxs)("div",{style:{marginTop:12},children:[(0,t.jsx)(r.Badge,{dot:m,children:(0,t.jsx)("a",{href:"#",className:"head-example"})}),(0,t.jsx)(r.Switch,{onChange:e=>{b(e);},checked:m})]})]})]})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(r.Row,{children:(0,t.jsxs)(r.Col,{span:24,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Pagination example"}),(0,t.jsx)(r.Pagination,{showSizeChanger:!0,defaultCurrent:3,total:500})]})}),(0,t.jsx)("br",{}),(0,t.jsx)(r.Row,{children:(0,t.jsxs)(r.Col,{span:24,children:[(0,t.jsx)(r.Divider,{orientation:"left",children:"Grid System example"}),(0,t.jsx)("div",{className:"grid-demo",children:(0,t.jsxs)("div",{className:"code-box-demo",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"* Note:"})," Every calculation in RTL grid system is from right side (offset, push, etc.)"]}),(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.Col,{span:8,children:"col-8"}),(0,t.jsx)(r.Col,{span:8,offset:8,children:"col-8"})]}),(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.Col,{span:6,offset:6,children:"col-6 col-offset-6"}),(0,t.jsx)(r.Col,{span:6,offset:6,children:"col-6 col-offset-6"})]}),(0,t.jsx)(r.Row,{children:(0,t.jsx)(r.Col,{span:12,offset:6,children:"col-12 col-offset-6"})}),(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.Col,{span:18,push:6,children:"col-18 col-push-6"}),(0,t.jsx)(r.Col,{span:6,pull:18,children:"col-6 col-pull-18"})]})]})})]})})]});};var u=()=>{let[e,l]=(0,i.useState)("ltr"),[s,n]=(0,i.useState)("bottomLeft");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{marginBottom:16},children:[(0,t.jsx)("span",{style:{marginInlineEnd:16},children:"Change direction of components:"}),(0,t.jsxs)(r.Radio.Group,{defaultValue:"ltr",onChange:e=>{let s=e.target.value;l(s),n("rtl"===s?"bottomRight":"bottomLeft");},children:[(0,t.jsx)(r.Radio.Button,{value:"ltr",children:"LTR"},"ltr"),(0,t.jsx)(r.Radio.Button,{value:"rtl",children:"RTL"},"rtl")]})]}),(0,t.jsx)(r.ConfigProvider,{direction:e,children:(0,t.jsx)(j,{placement:s})})]});};}}]);