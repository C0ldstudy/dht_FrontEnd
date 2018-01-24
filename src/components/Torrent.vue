<template>
  <div class="torrent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{torrentData.name}}</span>
        <a v-bind:href="'http://torrent.kiddd.science/'+torrentData.id+'.torrent'"><el-button style="float: right; padding: 3px 0" type="text" >{{torrentData.length.toFixed(2)}}MB</el-button></a>
      </div>
      <div v-for="o in torrentData.content.length" :key="o" class="text item">
        {{torrentData.content[o-1].name}}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'torrent',
  data () {
    return {
    }
  },
  props: ['torrentData']

}
</script>

<style>
.torrent{
  margin: 10px;
  width: 480px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>
