import '../css/tailwind.css';

import dropdown from './dropdown';

document.addEventListener('alpine:init', () => {
  Alpine.data('dropdown', dropdown);
});
