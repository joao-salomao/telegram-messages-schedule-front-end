<template >
  <div id="background">
    <h1 id="title">Telegram messages</h1>
    <router-view></router-view>
  </div>
</template>

<style>
#title {
  background: rgb(73, 119, 153);
  padding: 40px;
  margin: 0px 0px 50px 0px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
#background {
  background: rgb(231, 235, 240);
}
</style>
