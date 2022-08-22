<template>
  <div class="w-full bg-blue-400">
    <header
      class="container m-auto flex h-12 items-center justify-between px-5 xl:max-w-screen-xl"
    >
      <div class="header-left flex px-4">
        <div class="logo">
          <a href="#"
            ><img
              src="https://www.dcard.tw/_next/static/media/logo.8b5bbef2.svg"
              alt="logo"
          /></a>
        </div>
        <div class="search mx-8">
          <form class="flex">
            <input type="text" placeholder="搜尋 大學新生住宿必帶清單" />
            <button class="">搜尋</button>
          </form>
        </div>
      </div>
      <div class="header-right"><a href="#">下載app</a></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {},
};
</script>

<style lang="scss">
.header-left {
  .logo {
    a {
      img {
        width: 74px;
        height: 28px;
      }
    }
  }
  .search {
    form {
      font-size: 0;
      input {
        width: 600px;
        font-size: 15px;
        padding: 5px 10px 0;
        border: none;
        outline: none;
        border-radius: 10px;
      }
      button {
        font-size: 15px;
        width: 50px;
        padding: 0 10px;
        color: #fff;
      }
    }
  }
}
.header-right {
  background-color: #43b5f7;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  &:hover {
    background-color: #5ab0db;
  }
}
</style>
