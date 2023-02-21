<script>
  /**
   * @type {any}
   */
  export let isUp;
  /**
   * @type {any}
   */
  export let brandName;
  /**
   * @type {any}
   */
  export let value;
  /**
   * @type {any}
   */
  export let percent;
  /**
   * @type {any}
   */
  export let valueName;

  import iconUp from "$lib/assets/icon-up.svg";
  import iconDown from "$lib/assets/icon-down.svg";

  import iconFacebook from "$lib/assets/icon-facebook.svg";
  import iconTwitter from "$lib/assets/icon-twitter.svg";
  import iconInstagram from "$lib/assets/icon-instagram.svg";
  import iconYoutube from "$lib/assets/icon-youtube.svg";
</script>

<div
  class="bg-slate-100 flex justify-between gap-7 px-8 pt-8 pb-5 rounded-md active:bg-slate-300 cursor-pointer duration-200 dark:bg-[hsl(228,28%,20%)] dark:text-white dark:active:bg-[hsl(228,28%,30%)]"
>
  <div class="flex flex-col justify-between h-[5.5rem]">
    <div class="text-slate-500 font-bold">{valueName}</div>
    <div class="text-4xl font-bold">{value}</div>
  </div>
  <div class="flex flex-col justify-between items-end">
    <img
      src={brandName == "facebook"
        ? iconFacebook
        : brandName == "twitter"
        ? iconTwitter
        : brandName == "instagram"
        ? iconInstagram
        : iconYoutube}
      alt="{brandName} icon"
    />
    <div
      class="{isUp
        ? 'text-[hsl(163,72%,41%)]'
        : 'text-[hsl(356,69%,56%)]'} font-bold"
    >
      <img src={isUp ? iconUp : iconDown} alt="" class="inline-block" />
      {percent}%
    </div>
  </div>
</div>
