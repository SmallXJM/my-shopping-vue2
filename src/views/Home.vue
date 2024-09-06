<!--
 * @Author: yingzi
 * @Date: 2024-08-21 19:01:51
 * @LastEditors: yingzi
 * @LastEditTime: 2024-08-21 20:24:49
 * @Description: 请填写简介
-->
 <template>
    <div class="home" id="home" name="home">
                <!-- 轮播图 -->
                <div class="block">
                <el-carousel height="460px">
                    <el-carousel-item v-for="item in carouselArr" :key="item.carouselId">
                    <img style="height:460px;" :src="item.carouselUrl" :alt="item.redirectUrl" />
                    </el-carousel-item>
                </el-carousel>
                </div>
                <!-- 轮播图END -->
     </div>
</template>

<script>
export default {
  data() {
    return {
        carouselArr:[],//轮播图数组;
    };
  },
  methods: {
    
  },
  created() {//vue的生命周期事件，在创建时调用
     // 获取轮播图数据
     this.$axios
      .get("/api/carouselsForIndex", {})
      .then(res => {
        console.log('Home组件轮播图功能----------created()------------->',res);
        this.carouselArr = res.data.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
};
</script>


<style scoped>
@import "../assets/css/index.css";
</style>
