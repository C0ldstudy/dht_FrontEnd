<template>
  <div class="foot">
    <div class="space"></div>
    <div class="content">
      <p>Copyright © <a href="https://c0ldstudy.github.io/">C0ldstudy</a> 2018 Team: Jason Xu, blablabla </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {

    }
  }

}
</script>

<style lang="less" scoped>
.space{
  height: 50px;

}
.content{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #F1F1F1;
  opacity: 0.6;
}
.content:hover{
  opacity: 1.0;
}

</style>
