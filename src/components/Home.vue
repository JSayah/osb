<template>
  <div id='homediv' class=''>
    <b-jumbotron bg-variant='dark' text-variant='light' id='homejumbo' border-variant='info'>
      <p id="title">ONE STUDENT BODY</p>
      <p id='statement'>Learning for the New World.</p>
    </b-jumbotron>
  </div>
</template>

<script>

</script>

<style lang='scss'>
  #homediv{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Oswald', sans-serif;
  }
  #title{
    text-align: center;
    font-size: 4vmin;
  }
  #statement{
    text-align: center;
    font-size: 2.6vmin;
  }
  body, html {
    height: 100%;
}
  #bgimage{
    background-image: url(../assets/homestock.jpg);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #homejumbo{
    margin-top: 8%;
    width: 50%;
  }
</style>