export default {
  mounted(el: any, binding: any) {
    const color = binding.value === undefined ? '#000' : binding.value;
    const SIZE = 20;

    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    el.onclick = function (ev: any) {
      const circle = document.createElement('div');
      const offset = this.getBoundingClientRect();

      const x = ev.pageX - offset.left - window.scrollX;
      const y = ev.pageY - offset.top - window.scrollY;

      circle.setAttribute(
        'style',
        `background: ${color};
       width: ${SIZE}px;
       height: ${SIZE}px;
       opacity: 0;
       border-radius: 100em;
       position: absolute;
       top: ${y - SIZE / 2}px;
       left: ${x - SIZE / 2}px;
       animation: anka-ripple 1s 1 ease-in-out;`,
      );

      this.append(circle);

      ev.stopPropagation();

      setTimeout(() => {
        circle!.parentNode!.removeChild(circle);
      }, 1000);
    };
  },
};
