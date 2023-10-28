<script setup>
const cards = [{
    title: '專業PM',
    img: 'https://picsum.photos/300/200/?random=2',
    pFirst: '註明尚未電子商務面向利用用途身份讓我們?',
    pSecond: '職責鍵盤，你的旅遊感覺還在用途製造空氣',
    pThird: '職責鍵盤，你的旅遊感覺還在用途製造空氣',
}, {
    title: '創意前端',
    img: 'https://picsum.photos/300/200/?random=3',
    pFirst: '連接也可下列討論經理唱片空間',
    pSecond: '登記分為歐洲不到審核緊急因此願意一',
    pThird: '職責鍵盤，你的旅遊感覺還在用途製造空氣',
}, {
    title: '硬底子後端',
    img: 'https://picsum.photos/300/200/?random=4',
    pFirst: '期限是的加入各項體制站點',
    pSecond: '回來之類成本變得而且階段教師刪除趕緊規則必要分公司部落',
    pThird: '職責鍵盤，你的旅遊感覺還在用途製造空氣',
},]
</script>

<template>
    <div class="teamWrap">
        <div class="title">
            <h1>TEAM</h1>
            <p>解決方案的完美團隊</p>
        </div>
        <div class="content">
            <div class="card" v-for="card of cards">
                <h2>{{ card.title }}</h2>
                <div class="pic">
                    <img :src="card.img" alt="">
                </div>
                <div class="text">
                    <p>{{ card.pFirst }}</p>
                    <p>{{ card.pSecond }}</p>
                    <p>{{ card.pThird }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.teamWrap {
    background-color: rgb(0, 0, 0);
    color: #fff;
    padding: 100px 0;

    .title {

        text-align: center;
        width: 1200px;
        margin: auto;
        // padding: 50px 0;
        padding-bottom: 50px;

        h1 {
            margin: 0;
            font-size: 48px;
        }

        p {
            margin-top: -5px;
        }
    }

    .content {
        width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        position: relative;

        .card {
            width: 100%;
            background-color: #aaa;
            margin: 0 20px;

            h2 {
                padding-left: 20px;
                position: relative;
            }

            h2::after {
                content: '';
                position: absolute;
                top: 50%;
                left: -5%;
                width: 30px;
                border: 1px solid #fff;
            }

            .pic {

                // margin: auto;
                img {
                    width: 100%;
                    vertical-align: bottom;
                }
            }

            .text {
                padding: 10px 20px;
            }

            p:first-of-type {
                font-weight: bold;
            }


        }

        .card:nth-child(1) {
            position: relative;
            top: 50px;
        }

        .card:nth-child(3) {
            position: relative;
            top: -50px;
        }
    }
}
</style>