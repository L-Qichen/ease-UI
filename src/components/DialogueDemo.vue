<template>
  <h1>Dialogue Component</h1>
  <h1>Default Dialogue</h1>
  <Button @click="toggle">Toggle Dialogue</Button>
  <Dialogue
    v-model:isVisible="isVisible"
    :closeOnClickOverlay="false"
    :confirmFn="confirmFn"
    :cancelFn="cancelFn"
  >
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:content>
      <div>Content</div>
      <div>Input any content you want.</div>
    </template>
  </Dialogue>
  <h1>Open Dialogue With A Function</h1>
  <Button @click="showDialogue">Show Dialogue</Button>
</template>

<script lang="ts">
import Dialogue from "../lib/Dialogue.vue";
import Button from "../lib/Button.vue";
import { openDialogue } from "../lib/openDialogue";
import { ref } from "vue";

export default {
  components: { Dialogue, Button },
  setup() {
    const isVisible = ref(false);
    const toggle = () => {
      isVisible.value = !isVisible.value;
    };
    const confirmFn = () => {
      return false;
    };
    const cancelFn = () => {
      return true;
    };
    const showDialogue = () => {
      openDialogue({
        title: "An Function Open Dialogue",
        content: "This dialogue is opened through a function.",
        confirmFn() {
          alert("Confirm Button clicked. Dialogue will close.");
        },
        cancelFn() {
          alert("Cancel Button clicked. Dialogue will close.");
        },
        closeOnClickOverlay: false,
      });
    };
    return { isVisible, toggle, confirmFn, cancelFn, showDialogue };
  },
};
</script>
