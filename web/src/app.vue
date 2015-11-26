<style>
  body {
    background-color: white;
    margin: 0;
    padding-bottom: 100px;
    font: 14px/1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1,h2,h3,h4,h5 {
    margin: 0;
  }
  h1 {
    font-size: 16px;
    font-weight: 400;
  }
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .container {
    max-width: 600px;
    margin: auto;
  }
  .header {
    height: 40px;
    line-height: 40px;
    background-color: rgb(237, 237, 237);
    text-align: center;
  }
</style>

<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1>番娘</h1>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
