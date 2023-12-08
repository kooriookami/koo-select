<template>
  <uv-popup ref="popup" mode="bottom" :round="round" :close-on-click-overlay="closeOnClickOverlay" @change="popupChange">
    <view class="koo-select">
      <uv-toolbar
        v-if="showToolbar"
        :cancelColor="cancelColor"
        :confirmColor="confirmColor"
        :cancelText="cancelText"
        :confirmText="confirmText"
        :title="title"
        @cancel="cancel"
        @confirm="confirm"
      ></uv-toolbar>
      <uv-search :placeholder="placeholder" v-model="keyword" shape="square" :show-action="false"></uv-search>
      <view class="list-content">
        <uv-radio-group v-if="!multiple" v-model="localValue" placement="column" border-bottom iconPlacement="right">
          <uv-radio :name="item[valueKey]" :label="item[labelKey]" v-for="item in localOptions"></uv-radio>
        </uv-radio-group>
        <uv-checkbox-group v-else v-model="localValue" iconPlacement="right" border-bottom placement="column">
          <uv-checkbox :name="item[valueKey]" :label="item[labelKey]" v-for="item in localOptions"></uv-checkbox>
        </uv-checkbox-group>
        <uv-empty v-if="!localOptions.length" mode="search"></uv-empty>
      </view>
    </view>
  </uv-popup>
</template>

<script>
import mpMixin from '@/uni_modules/uv-ui-tools/libs/mixin/mpMixin.js';
import mixin from '@/uni_modules/uv-ui-tools/libs/mixin/mixin.js';
import props from './props.js';

export default {
  name: "koo-select",
  emits: ['close', 'cancel', 'confirm', 'input', 'change', 'update:modelValue'],
  mixins: [mpMixin, mixin, props],
  data() {
    return {
      localValue: undefined,
      keyword: '',
    }
  },
  methods: {
    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    },
    popupChange(e) {
      if (!e.show) this.$emit('close');
    },
    cancel() {
      this.$emit('cancel');
      this.close();
    },
    confirm() {
      const option = this.multiple ? this.options.filter(item => this.localValue?.includes(item[this.valueKey])) : this.options.find(item => item[this.valueKey] === this.localValue);
      this.$emit('confirm', this.localValue, option);
      this.$emit('change', this.localValue, option);
      this.$emit('input', this.localValue);
      this.$emit('update:modelValue', this.localValue);
      this.$uv.formValidate(this, 'change');
      if (this.closeOnClickConfirm) {
        this.close();
      }
    },
  },
  computed: {
    localOptions() {
      return this.options.filter(item => item[this.labelKey]?.includes(this.keyword));
    }
  },
  watch: {
    value: {
      handler(value) {
        this.localValue = value;
      },
      immediate: true,
    }
  }
}
</script>

<style scoped lang="scss">
.koo-select {
  position: relative;

  .uv-search {
    padding: 0 15px;
  }

  .list-content {
    padding: 15px;
    max-height: 220px;
    overflow: auto;

    .uv-radio, .uv-checkbox {
      padding-top: 12px;
    }
  }
}
</style>
