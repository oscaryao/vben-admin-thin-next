# 解决 git 提交代码问题

## 1. 解决 HTTP/2 stream 1 was not closed cleanly before end of the underlying stream

> git config --global http.version HTTP/1.1

## 2. Github 报错 OpenSSL SSL_connect: Connection was reset in connection to github.com:443 终极解决方案

- 方案一

> git config --global http.sslBackend "openssl"

> git config --global http.sslCAInfo "C:\Program Files\Git\mingw64\ssl\cert.pem"

`注意上面第二个命令，路径要换成git安装的路径。`

- 方案二

> git config --global http.proxy 127.0.0.1:7890

> git config --global https.proxy 127.0.0.1:7890

`如果你之前git中已经设置过上述配置，则使用如下命令取消再进行配置即可`

> git config --global --unset http.proxy

> git config --global --unset https.proxy

`下面是几个常用的git配置查看命令`

> git config --global http.proxy #查看 git 的 http 代理配置

> git config --global https.proxy #查看 git 的 https 代理配置

> git config --global -l #查看 git 的所有配置

## 3. git commit 约定

`<type>(<scope>): <subject>`

type: 必选，本次提交的代码类型。

scope: 可选，表示本次提交修改的文件范围。

subject: 必选，对本次提交简短的描述。

`type的值:`

feat: 新增功能/完成任务 (feature)

fix: 修复 bug

test: 单元测试

docs: 文档 (documentation)

style: 样式

refactor: 代码重构

pref: 优化相关，比如提升性能/体验

chore: 辅助/其它

revert: 恢复变更/回滚到上一个版本

little: 微不足道的变更

try: 尝试

`scope部分 : 紧跟type用小括号包住，值可以按照模块、包或者某个文件进行标注`

> 例如： git commit -m 'feat(api): add response interceptor

## 3. git 提交前 做校验 stylelint 校验 vue 失败处理

`安装所需依赖`

```
  "stylelint": "^14.6.0",
  "stylelint-config-html": "^1.0.0",
  "stylelint-config-prettier": "^9.0.3",
  "stylelint-config-recommended": "^7.0.0",
  "stylelint-config-recommended-vue": "^1.4.0",
  "stylelint-config-standard": "^25.0.0",
  "stylelint-less": "^1.0.5",
  "stylelint-order": "^5.0.0",
  "postcss": "^8.4.12",
  "postcss-html": "^1.3.0",
  "postcss-less": "^6.0.0",
```

`.stylelintrc.js` `也可以使用本项目配置`

```
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-html',
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', ':deep']
      }
    ],
    'number-leading-zero': 'always',
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'unit-case': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'rule-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'block-opening-brace-space-before': 'always',
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'property-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] }
    ],
    'function-no-unknown': null,
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
};
```
