<script setup>
import { ref } from 'vue'

const services = [{
    img: 'https://picsum.photos/300/200/?random=10',
    title: '創意的策略',
    pFirst: '受不了千篇一律的機器人平台嗎？',
    pSecond: '讓消費者INSIDE出發的創意設計你的品',
    pThird: '讓消費者INSIDE出發的創意設計你的品'
},
{
    img: 'https://picsum.photos/300/200/?random=11',
    title: '客製的互動',
    pFirst: '受不了千篇一律的機器人平台嗎？',
    pSecond: '讓消費者INSIDE出發的創意設計你的品',
    pThird: '讓消費者INSIDE出發的創意設計你的品'
},
{
    img: 'https://picsum.photos/300/200/?random=12',
    title: '整合的服務',
    pFirst: '受不了千篇一律的機器人平台嗎？',
    pSecond: '讓消費者INSIDE出發的創意設計你的品',
    pThird: '讓消費者INSIDE出發的創意設計你的品'
},]

</script>

<template>
    <div class="serviceWrap">
        <div class="title">
            <h1>SERVICE</h1>
            <p>行銷的MARTECH解決方案</p>
        </div>
        <div class="content">
            <div class="info" v-for="service of services">
                <div class="pic">
                    <img :src="service.img">
                </div>
                <div class="text">
                    <h2>{{ service.title }}</h2>
                    <div class="text_p">
                        <p>{{ service.pFirst }}</p>
                        <p>{{ service.pSecond }}</p>
                        <p>{{ service.pThird }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.serviceWrap {
    background-color: #000;

    .title {

        text-align: center;
        width: 1200px;
        margin: auto;
        padding: 100px 0;
        color: #fff;

        h1 {
            margin: 0;
            padding: 0;
            font-size: 48px;
        }

        p {
            margin-top: -5px;
        }
    }

    .content {
        width: 1200px;
        margin: auto;

        .info {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 100px;
            color: #fff;

            .pic {
                img {
                    vertical-align: bottom;
                }
            }

            .text {
                h2 {
                    text-align: center;
                    letter-spacing: 5px;
                    font-size: 24px;
                }

                .text_p {
                    position: relative;
                }

                .text_p::after {
                    content: '';
                    position: absolute;
                    top: 5px;
                    left: -8%;
                    height: 90px;
                    border: 3px solid #fff;
                }
            }
        }

        .info:nth-child(odd) {
            flex-direction: row-reverse;
        }

        .info:nth-child(3) {
            margin-bottom: 0;
        }
    }
}
</style>