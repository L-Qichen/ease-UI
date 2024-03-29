<template>
  <button class="ease-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="ease-loading-indicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    priority: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, priority } = props;
    const classes = computed(() => {
      return {
        [`ease-theme-${theme}`]: theme,
        [`ease-size-${size}`]: size,
        [`ease-priority-${priority}`]: priority,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.ease-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.ease-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.ease-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.ease-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.ease-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.ease-theme-button {
    &.ease-priority-primary {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.ease-priority-danger {
      background: $red;
      color: white;
      border-color: $red;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($color: $red, $amount: 10%);
      }
    }
  }
  &.ease-theme-link {
    &.ease-priority-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($color: $red, $amount: 10%);
      }
    }
  }
  &.ease-theme-text {
    &.ease-priority-primary {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($color: $blue, $amount: 10%);
      }
    }
    &.ease-priority-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($color: $red, $amount: 10%);
      }
    }
  }
  &[disabled] {
    cursor: not-allowed;
    color: grey;
    &:hover {
      color: $grey;
      border-color: $grey;
    }
  }
  > .ease-loading-indicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: ease-spin 1s infinite linear;
  }
}
@keyframes ease-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>