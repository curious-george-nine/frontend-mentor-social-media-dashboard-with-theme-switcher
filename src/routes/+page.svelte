<script>
  import OverviewStats from "../components/OverviewStats.svelte";
  import FollowersStats from "../components/FollowersStats.svelte";
  import DarkModeSwitcher from "../components/DarkModeSwitcher.svelte";
</script>

<section class="px-6 py-8 desktop:px-36">
  <div class="contents desktop:flex justify-between">
    <div class="contents desktop:block">
      <h1 class="text-2xl font-bold dark:text-white">Social Media Dashboard</h1>
      <p class="text-slate-400 font-bold">Total Followers: 23,004</p>
    </div>
    <div class="hidden desktop:flex items-center w-44">
      <DarkModeSwitcher />
    </div>
  </div>
  <div class="my-6 w-full h-0 border-b-[1px] border-slate-400" />
  <div class="desktop:hidden">
    <DarkModeSwitcher />
  </div>
  <div class="flex flex-col desktop:grid grid-cols-4 gap-6 mb-14">
    <FollowersStats
      brandName="facebook"
      isUp={true}
      todayValue="12"
      value="1987"
    />
    <FollowersStats
      brandName="twitter"
      isUp={true}
      todayValue="99"
      value="1044"
    />
    <FollowersStats
      brandName="instagram"
      isUp={true}
      todayValue="1099"
      value="11k"
    />
    <FollowersStats
      brandName="youtube"
      isUp={false}
      todayValue="144"
      value="8239"
    />
  </div>
  <h1 class="text-slate-500 text-3xl font-bold mb-8">Overview - Today</h1>
  <div class="flex flex-col xl:grid grid-cols-4 gap-5">
    <OverviewStats
      valueName="Page Views"
      value="87"
      brandName="facebook"
      isUp={true}
      percent="3"
    />
    <OverviewStats
      valueName="Likes"
      value="52"
      brandName="facebook"
      isUp={false}
      percent="2"
    />
    <OverviewStats
      valueName="Likes"
      value="5462"
      brandName="instagram"
      isUp={true}
      percent="2257"
    />
    <OverviewStats
      valueName="Profile Views"
      value="52k"
      brandName="instagram"
      isUp={true}
      percent="1375"
    />
    <OverviewStats
      valueName="Retweets"
      value="117"
      brandName="twitter"
      isUp={true}
      percent="303"
    />
    <OverviewStats
      valueName="Likes"
      value="507"
      brandName="twitter"
      isUp={true}
      percent="553%"
    />
    <OverviewStats
      valueName="Likes"
      value="107"
      brandName="youtube"
      isUp={false}
      percent="19"
    />
    <OverviewStats
      valueName="Total Views"
      value="1407"
      brandName="youtube"
      isUp={false}
      percent="12"
    />
  </div>
</section>
