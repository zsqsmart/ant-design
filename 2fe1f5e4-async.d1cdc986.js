(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["2fe1f5e4"],{"1ccab34b":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}}),t("cc9e01bc");var s='import React from \'react\';\nimport { Flex, Progress } from \'antd\';\n\nconst Demo = () => (\n  <Flex vertical gap="middle">\n    <Progress type="line" percent={50} showInfo={false} style={{ width: 320 }} />\n    <Progress percent={50} showInfo={false} size="small" style={{ width: 100 }} />\n  </Flex>\n);\n\nexport default Demo;\n';},"2f19b747":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}}),t("6b67b8bc");var s='import React from \'react\';\nimport { Flex, Progress, theme } from \'antd\';\n\nconst Demo = () => {\n  const { token } = theme.useToken();\n\n  return (\n    <Flex gap="large">\n      <Flex gap="small" align="center">\n        <Progress size={16} type="circle" percent={68} trailColor={token.colorPrimaryBg} />\n        <div>\u8FDB\u884C\u4E2D</div>\n      </Flex>\n      <Flex gap="small" align="center">\n        <Progress size={16} type="circle" percent={100} status="success" />\n        <div>\u5DF2\u5B8C\u6210</div>\n      </Flex>\n      <Flex gap="small" align="center">\n        <Progress\n          size={16}\n          type="circle"\n          percent={68}\n          status="exception"\n          trailColor={token.colorErrorBg}\n        />\n        <div>\u9519\u8BEF/\u5F02\u5E38</div>\n      </Flex>\n    </Flex>\n  );\n};\n\nexport default Demo;\n';},"2fe1f5e4":function(e,n,t){"use strict";var s=t("852bbaa9")._;t.d(n,"__esModule",{value:!0}),t.d(n,"demos",{enumerable:!0,get:function(){return d;}});var r=t("852bbaa9"),o=r._(t("5b220c3d"));t("66ea7edd");var a=r._(t("a9d1a279"));let d={"components-progress-index-tab-design-demo-behavior-pattern":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(s,t.bind(t,"111d3ef8"))))),asset:null,context:void 0,renderOpts:void 0},"components-progress-index-tab-design-demo-progress":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(s,t.bind(t,"25017265"))))),asset:{type:"BLOCK",id:"components-progress-index-tab-design-demo-progress",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("1ccab34b").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.23.0"}},entry:"index.tsx",title:"\u4E86\u89E3\u4EFB\u52A1\u8FDB\u5EA6",description:"\u4EE5\u7EBF\u5F62\u5C55\u793A\u603B\u8FDB\u5EA6\u548C\u5DF2\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u662F\u6700\u57FA\u7840\u7684\u4F7F\u7528\u65B9\u5F0F"},context:{react:o,antd:a},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(s,t.bind(t,"d2b37e0b")))).default(...e)}},"components-progress-index-tab-design-demo-status":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(s,t.bind(t,"5f87a03a"))))),asset:{type:"BLOCK",id:"components-progress-index-tab-design-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("b9503053").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.23.0"}},entry:"index.tsx",title:"\u4E86\u89E3\u4EFB\u52A1\u72B6\u6001",description:"\u901A\u8FC7\u5DF2\u5B8C\u6210\u8FDB\u5EA6\u7684\u989C\u8272\uFF0C\u6765\u4E86\u89E3\u5F53\u524D\u4EFB\u52A1\u7684\u72B6\u6001"},context:{react:o,antd:a},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(s,t.bind(t,"d2b37e0b")))).default(...e)}},"components-progress-index-tab-design-demo-info":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(s,t.bind(t,"52b803bb"))))),asset:{type:"BLOCK",id:"components-progress-index-tab-design-demo-info",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("c5a079eb").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.23.0"}},entry:"index.tsx",title:"\u67E5\u770B\u8FDB\u5EA6\u76F8\u5173\u63CF\u8FF0",description:"\u901A\u8FC7\u6587\u5B57\u548C\u56FE\u6807\uFF0C\u67E5\u770B\u8FDB\u5EA6\u76F8\u5173\u63CF\u8FF0"},context:{react:o,antd:a},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(s,t.bind(t,"d2b37e0b")))).default(...e)}},"components-progress-index-tab-design-demo-circle":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(s,t.bind(t,"17d70712"))))),asset:{type:"BLOCK",id:"components-progress-index-tab-design-demo-circle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("f66da241").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.23.0"}},entry:"index.tsx",title:"\u73AF\u5F62\u8FDB\u5EA6\u6761",description:"\u4EE5\u73AF\u5F62\u5C55\u793A\u8FDB\u5EA6\uFF0C\u591A\u7528\u4E8E\u9700\u8981\u5F3A\u8C03\u767E\u5206\u6BD4\u7684\u573A\u666F\uFF0C\u5982 Dashboard"},context:{react:o,antd:a},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(s,t.bind(t,"d2b37e0b")))).default(...e)}},"components-progress-index-tab-design-demo-content":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(s,t.bind(t,"a2c1c04b"))))),asset:{type:"BLOCK",id:"components-progress-index-tab-design-demo-content",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("2f19b747").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.23.0"}},entry:"index.tsx",title:"\u5185\u5BB9\u7EA7\u8FDB\u5EA6\u6761",description:"\u9002\u7528\u4E8E\u5185\u5BB9\u7EA7\u573A\u666F\u7684\u5FAE\u578B\u8FDB\u5EA6\u6761\uFF0C\u5E38\u4E0E\u6587\u672C\u642D\u914D\u4F7F\u7528"},context:{react:o,antd:a},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(s,t.bind(t,"d2b37e0b")))).default(...e)}}};},b9503053:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}}),t("8b166e29");var s='import React from \'react\';\nimport { Flex, Progress } from \'antd\';\n\nconst Demo = () => (\n  <Flex vertical gap="middle">\n    <Flex>\n      <div style={{ width: 106 }}>\u4EFB\u52A1\u8FDB\u884C\u4E2D</div>\n      <Progress type="line" percent={50} showInfo={false} style={{ width: 320 }} />\n    </Flex>\n    <Flex>\n      <div style={{ width: 106 }}>\u4EFB\u52A1\u5B8C\u6210</div>\n      <Progress\n        type="line"\n        percent={100}\n        status="success"\n        showInfo={false}\n        style={{ width: 320 }}\n      />\n    </Flex>\n    <Flex>\n      <div style={{ width: 106 }}>\u4EFB\u52A1\u5931\u8D25</div>\n      <Progress\n        type="line"\n        percent={30}\n        status="exception"\n        showInfo={false}\n        style={{ width: 320 }}\n      />\n    </Flex>\n  </Flex>\n);\n\nexport default Demo;\n';},c5a079eb:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}}),t("af7cb012");var s='import React from \'react\';\nimport { Flex, Progress } from \'antd\';\n\nconst Demo = () => (\n  <Flex vertical gap="middle">\n    <Progress type="line" percent={50} style={{ width: 320 }} />\n    <Progress percent={50} format={() => \'\u52A0\u8F7D\u4E2D\'} style={{ width: 320 }} />\n    <Progress percent={100} status="success" style={{ width: 320 }} />\n    <Progress percent={70} status="exception" style={{ width: 320 }} />\n  </Flex>\n);\n\nexport default Demo;\n';},f66da241:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}}),t("2f5c7448");var s='import React from \'react\';\nimport { Flex, Progress } from \'antd\';\n\nconst Demo = () => (\n  <Flex gap="middle" align="center">\n    <Progress type="circle" percent={68} />\n    <Progress type="circle" percent={100} status="success" />\n    <Progress type="circle" percent={68} status="exception" />\n    <Progress type="circle" percent={68} size="small" />\n    <Progress type="circle" percent={100} status="success" size="small" />\n    <Progress type="circle" percent={68} status="exception" size="small" />\n  </Flex>\n);\n\nexport default Demo;\n';}}]);