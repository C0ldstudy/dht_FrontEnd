<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="4"><div class="space"></div></el-col>
      <el-col :span="16">
          <h1>DHT种子搜索器</h1>
          <div style="margin-top: 20px;">
            <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="search(input)"></el-input>
          </div>
      </el-col>
      <el-col :span="4"><div clas="space"></div></el-col>
    </el-row>
    <!-- <div class="wholeChart">
      <div id="chart" :style="{width: '600px', height: '600px'}"></div>
    </div> -->
    <foot></foot>

  </div>

</template>
<script>
import axios from 'axios'
import foot from '@/components/Foot'

export default {
  components: {
    foot,
  },
  data () {
    return {
      input: '',
    }
  },
  mounted () {
    // const myChart = this.$echarts.init(document.getElementById('myChart'));
    // this.drawLine();
  },
  methods: {
    search (input) {
      console.log(input);
      this.$router.push({
        name: 'Result',
        params: {
          keyword: input
        }
      });
    },
    drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('chart'))
        myChart.setOption({
          backgroundColor: '#2c343c',
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
          ]
        });

    },
  }
}
</script>

<style lang="less" scoped>
.home {
  margin: 40px 0;
  .space{
    width: 100%;
    min-height: 36px;
  }
  .wholeChart{
    // text-align: center;
    display: flex;
    justify-content: center;
  }
}

</style>
