<template>
  <div class="result">
      <el-row :gutter="20" class="search">
        <el-col :span="4">DHT种子搜索器</el-col>
        <el-col :span="16"><el-input type="text" placeholder="请输入内容" v-model="input" @keyup.enter.native="search(input)"></el-input></el-col>
        <el-col :span="4"><el-button type="primary" icon="el-icon-search" @click="search(input)">搜索</el-button></el-col>
      </el-row>
      <div class="torResult">
        <torrent class="tor" v-for="i in torrentData" :key="i.id" :torrentData="i"></torrent>
      </div>
  </div>
</template>

<script>
import torrent from '@/components/Torrent'
import axios from 'axios'

export default {
  components: {
    torrent,
  },
  data() {
    return {
      outputData: [],
      input: '',
      torrentData: [],
    }
  },
  mounted () {
    var input = this.$route.params.keyword;
    this.outputData = [];
    axios({
      method: 'get',
      url: `http://kiddd.science:30002/dht/_search?q=name:${input}`,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      const data1 = res.data.hits.hits;
      data1.forEach((element) => {
        const mLen = element._source.length / ( 1024 * 1024 );
        let torContent = [];
        for(var i = 0; ( (i < 4)&&( i < element._source.files.length )); i++)
        {
          torContent.push({ name: element._source.files[i].path});
        }
        this.torrentData.push({ id: element._id, name: element._source.name, length: mLen, content: torContent });
      })
    }).catch((err => {
      console.log(err)
    }));
  },
  methods: {
    search (input) {
      this.outputData = [];
      this.torrentData = [];
      axios({
        method: 'get',
        url: `http://kiddd.science:30002/dht/_search?q=name:${input}`,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => {
        const data1 = res.data.hits.hits;
        data1.forEach((element) => {
          const mLen = element._source.length / ( 1024 * 1024 );
          let torContent = [];
          for(var i = 0; ( (i < 4)&&( i < element._source.files.length )); i++)
          {
            torContent.push({ name: element._source.files[i].path});
          }
          this.torrentData.push({ id: element._id, name: element._source.name, length: mLen, content: torContent });
        })
      }).catch((err => {
        console.log(err)
      }));
    },
  },

}
</script>

<style lang="less" scoped>
.result{
  .search{
    padding: 10px;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .torResult{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

</style>
