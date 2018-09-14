·<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="iconfont icon-huiyuanqia "></i>
                <p>会员卡</p>
            </li>
            <li>
                <i class="iconfont icon-dianpu "></i>
                <p>店铺</p>
            </li>
            <li>
                <i class="iconfont icon-goumai "></i>
                <p>购买</p>
            </li>
            <li>
                <i class="iconfont icon-hanbao "></i>
                <p>汉堡</p>
            </li>
            <li>
                <i class="iconfont icon-huiyuanqia "></i>
                <p>会员卡</p>
            </li>
            
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        }
    }
</script>

<style scoped lang="less">
@import "../../assets/images/iconfont.css";
.left-nav{
    float: left;
    width: 5%;
    height: 100%;
    color: #fff;
    background-color: #1D8CE0;
    font-size: .1rem;
}

.iconfont{
    font-size: .24rem;
}
.left-nav ul{
    padding:0;
    margin:0;
}

.left-nav li{
list-style: none;
text-align: center;
border-bottom: 1px solid #20a0ff;
padding: .1rem;
/* 使用padding把i和p都相右移动 */
}
.left-nav li{
    list-style: none;
}
</style>