export default {
  props: {
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: true
    },
    // 顶部标题
    title: {
      type: String,
      default: ''
    },
    // 弹窗圆角
    round: {
      type: [String, Number],
      default: 0
    },
    // 绑定值
    value: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    // 选项数组
    options: {
      type: Array,
      default: () => [],
    },
    // 值的键名
    valueKey: {
      type: String,
      default: 'value',
    },
    // 标签的键名
    labelKey: {
      type: String,
      default: 'label',
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: '取消'
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: '确定'
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: '#909193'
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: '#3c9cff'
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    // 是否允许点击确认关闭选择器
    closeOnClickConfirm: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: '请输入关键字'
    }
  }
}
