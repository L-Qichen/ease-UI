<demo>Open Dialogue With A Function</demo>
<template>
  <Button @click="showDialogue">Show Dialogue</Button>
</template>

<script lang="ts">
import Dialogue from "../lib/Dialogue.vue";
import Button from "../lib/Button.vue";
import { openDialogue } from "../lib/openDialogue";
export default {
  components: { Dialogue, Button, openDialogue },
  setup() {
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
    return { showDialogue };
  },
};
</script>