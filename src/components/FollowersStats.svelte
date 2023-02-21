<script>
  /**
   * @type {string}
   */
  export let brandName;
  /**
   * @type {string}
   */
  export let value;
  /**
   * @type {boolean}
   */
  export let isUp;
  /**
   * @type {string}
   */
  export let todayValue;

  import iconFacebook from "$lib/assets/icon-facebook.svg";
  import iconTwitter from "$lib/assets/icon-twitter.svg";
  import iconInstagram from "$lib/assets/icon-instagram.svg";
  import iconYoutube from "$lib/assets/icon-youtube.svg";

  import iconUp from "$lib/assets/icon-up.svg";
  import iconDown from "$lib/assets/icon-down.svg";
</script>

<div
  class="{brandName != 'instagram' ? 'border-t-4 rounded' : ''} {brandName ==
  'facebook'
    ? 'border-t-[hsl(208,92%,53%)]'
    : brandName == 'twitter'
    ? 'border-t-[hsl(208,92%,53%)]'
    : brandName == 'youtube'
    ? 'border-t-[hsl(348,97%,39%)]'
    : "relative before:content-'' before:absolute before:-top-[4px] before:left-0 before:bottom-0 before:right-0 before:bg-gradient-to-r before:from-[hsl(37,97%,70%)] before:to-[hsl(329,70%,58%)] before:rounded-t-[4px] before:rounded-b-[8px] before:-z-[1] rounded-bl rounded-br h-[244px] top-[4px]"} bg-slate-100 text-center py-6 active:bg-slate-300 cursor-pointer duration-200 dark:bg-[hsl(228,28%,20%)] dark:text-white dark:active:bg-[hsl(228,28%,30%)]"
>
  <div class="mb-7 text-slate-600 flex items-center justify-center gap-3">
    <img
      src={brandName == "facebook"
        ? iconFacebook
        : brandName == "twitter"
        ? iconTwitter
        : brandName == "instagram"
        ? iconInstagram
        : iconYoutube}
      alt="facebook icon"
      class="inline-block scale-[1.15]"
    />
    {brandName == "facebook" || brandName == "twitter"
      ? "@nathanf"
      : brandName == "instagram"
      ? "@realnathanf"
      : "Nathan F."}
  </div>
  <h1 class="text-6xl font-bold mb-2">{value}</h1>
  <p class="text-sm uppercase font-normal tracking-[0.5em] text-slate-500 mb-8">
    {brandName == "youtube" ? "subscribers" : "followers"}
  </p>
  <p
    class="{isUp
      ? brandName != 'facebook'
        ? 'text-[hsl(163,72%,41%)]'
        : 'dark:text-white text-[hsl(163,72%,41%)]'
      : 'text-[hsl(356,69%,56%)]'} font-bold"
  >
    <img
      src={isUp ? iconUp : iconDown}
      alt="up icon"
      class="inline-block"
      width="10px"
      height="10px"
    />
    {todayValue} Today
  </p>
</div>
