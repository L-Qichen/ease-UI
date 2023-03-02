import Dialogue from "./Dialogue.vue"
import { createApp, h } from "vue"
export const openDialogue = (options) => {
  const { title, content, confirmFn, cancelFn, closeOnClickOverlay } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const closeDialogue = () => {
    app.unmount();
    div.remove();
  }
  const app = createApp({
    render() {
      return h(Dialogue, // type
        {
          isVisible: true,
          "onUpdate:isVisible": (newVisible) => {
            if (newVisible === false) {
              closeDialogue();
            }
          },
          confirmFn,
          cancelFn,
          closeOnClickOverlay,
        }, // props
        { title, content } //slots
      );
    }
  });
  app.mount(div);
}