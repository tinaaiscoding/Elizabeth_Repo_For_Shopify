export default function dropdown() {
  return {
    isOpen: false,

    toggle() {
      this.isOpen = !this.isOpen;
    },

    close() {
      this.isOpen = false;
    },
  };
}
