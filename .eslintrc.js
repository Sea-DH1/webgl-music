
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0, //定义函数左边要不要加空格
    indent: 2, //缩进风格
    'no-tabs': 0,
    'spaced-comment': 0, //注释风格要不要有空格
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
    'no-dupe-args': 2, //函数参数不能重复
    'no-var': 0, //禁用var，用let和const代替
    'no-trailing-space': 0,

    'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
    'no-unused-vars': 'off',
    camelcase: 2 //强制驼峰法命名
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};