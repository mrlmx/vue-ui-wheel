import Modal from "./Modal.vue";

import { createApp, h } from "vue";

export interface IModalAPIProps {
  title: string;
  content: string;
  //   如果返回 false，则表示不关闭 Modal，其他值都会将 Modal 关闭。
  ok?: (e: any) => boolean;
  //   同上
  cancle?: (e: any) => boolean;
}

export default (options: IModalAPIProps) => {
  const { title, content, cancle, ok } = options;
  const div = document.createElement("dev");
  const closeModal = () => {
    vm.unmount(div);
    div.remove();
  };
  const vm = createApp({
    render() {
      return h(
        Modal,
        {
          visible: true,
          title,
          "onUpdate:visible": (newValue: boolean) => {
            if (newValue === false) {
              closeModal();
            }
          },
          onCancle: (e: any) => {
            if (!cancle) {
              return;
            }
            const result = cancle(e);
            if (result !== false) {
              closeModal();
            }
          },
          onOk: (e: any) => {
            if (!ok) {
              return;
            }
            const result = ok(e);
            if (result !== false) {
              closeModal();
            }
          },
        },
        {
          default: () => {
            return content;
          },
        }
      );
    },
  });

  vm.mount(div);

  document.body.appendChild(div);
};
