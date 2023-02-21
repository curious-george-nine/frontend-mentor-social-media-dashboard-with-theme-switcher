<script>
  import { browser } from "$app/environment";

  /**
   * @type {HTMLInputElement}
   */
  let darkModeSwitcherInput;

  if (browser) {
    if (localStorage.getItem("darkMode")) {
      document.documentElement.classList.add("dark");
    }
  }

  // @ts-ignore
  $: if (darkModeSwitcherInput) {
    if (localStorage.getItem("darkMode")) {
      setTimeout(() => {
        darkModeSwitcherInput.checked = true;
      }, 50);
    }
  }
</script>

<div
  class="text-slate-500 font-bold flex justify-between w-full mb-7 desktop:mb-0"
>
  Dark mode
  <div class="relative">
    <input
      type="checkbox"
      class="opacity-0 w-16 h-7 peer relative z-50"
      bind:this={darkModeSwitcherInput}
      on:change={() => {
        if (darkModeSwitcherInput.checked) {
          document.documentElement.classList.add("dark");

          localStorage.setItem("darkMode", "dark");
        } else if (!darkModeSwitcherInput.checked) {
          document.documentElement.classList.remove("dark");

          localStorage.removeItem("darkMode");
        }
      }}
    />
    <div
      class="w-16 h-7 absolute top-0 left-0 bg-slate-300 rounded-full z-0 before:content-'' before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[10%] before:bg-white before:rounded-full before:w-[1.3rem] before:h-[1.3rem] before:z-40 peer-checked:before:-translate-x-8 before:duration-200 after:content-'' after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:opacity-0 after:bg-gradient-to-r after:from-[hsl(210,78%,56%)] after:to-[hsl(146,68%,55%)] peer-active:after:opacity-100 after:duration-300 peer-checked:after:opacity-100 peer-checked:before:bg-[hsl(230,17%,14%)] after:z-25"
    />
  </div>
</div>
