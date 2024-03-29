<template>
  <template v-if="isVisible">
    <Teleport to="body">
      <div class="ease-dialogue-overlay" @click="onClickOverlay">
        <div class="ease-dialogue-wrapper">
          <div class="ease-dialogue">
            <header>
              <slot name="title" />
              <span class="ease-dialogue-close" @click="close"></span>
            </header>
            <main>
              <slot name="content" />
            </main>
            <footer>
              <Button priority="primary" @click="confirm">Confirm</Button>
              <Button @click="cancel">Cancel</Button>
            </footer>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    confirmFn: {
      type: Function,
    },
    cancelFn: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:isVisible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const confirm = () => {
      if (props.confirmFn?.() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancelFn?.() !== false) {
        close();
      }
    };
    return { close, onClickOverlay, confirm, cancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.ease-dialogue {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out($color: black, $amount: 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out($color: black, $amount: 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
