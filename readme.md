## Select 选择器

> **组件名：koo-select**

拓展 uv 组件库，支持单选、多选、搜索

### Demo

```vue
<template>
  <view>
    <koo-select ref="select" v-model="value" multiple :options="options" label-key="label" value-key="value" @change="handleChange"/>
  </view>
</template>

<script>
import KooSelect from "@/components/koo-select/koo-select.vue";

export default {
  name: "demo",
  components: {
    KooSelect
  },
  data() {
    return {
      value: [],
      options: [
        {
          label: '1',
          value: '1',
        },
        {
          label: '2',
          value: '2',
        },
        {
          label: '3',
          value: '3',
        }
      ]
    }
  },
  mounted() {
    this.$refs.select.open();
  },
  methods: {
    handleChange(value, option) {
      console.log(value, option);
    }
  }
}
</script>
```
