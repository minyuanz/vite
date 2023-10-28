<script setup>
import { ref } from 'vue'

const slideCtrl = (slidesToShow = 1) => {
    if (slidesToShow > 0) {
        const shiftItem = imgs.value.shift(); //del first data
        imgs.value.push(shiftItem); // add to last data
        return;
    }
    if (slidesToShow < 0) {
        const shiftItem = imgs.value.pop(); //del last data
        imgs.value.unshift(shiftItem); //add to first data
    }
}

const imgs = ref([{
    url: 'https://picsum.photos/300/200/?random=30',
    name: 'BMW1官網'
},
{
    url: 'https://picsum.photos/300/200/?random=40',
    name: 'BMW2官網'
},
{
    url: 'https://picsum.photos/300/200/?random=50',
    name: 'BMW3官網'
},
{
    url: 'https://picsum.photos/300/200/?random=60',
    name: 'BMW4官網'
},
{
    url: 'https://picsum.photos/300/200/?random=70',
    name: 'BMW5官網'
},
])
</script>

<template>
    <div class="showreelWrap">
        <div class="title">
            <h1>SHOWREEL</h1>
            <p>精彩案例</p>
        </div>
        <div class="carouselWrap">
            <div class="leftArrow" @click="slideCtrl(-1)"></div>
            <div class="carouselShow">
                <div class="carousel">
                    <div class="pic" v-for="img in imgs">
                        <img :src="img.url">
                        <p>{{ img.name }}</p>
                    </div>
                </div>
            </div>

            <div class="rightArrow" @click="slideCtrl(1)"></div>
        </div>

        <div class="seeMore">
            <button>觀看更多</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.showreelWrap {
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

    .carouselWrap {
        background-color: #aaa;
        position: relative;

        .leftArrow {
            width: 0;
            height: 0;
            border-right: 30px solid #646464;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
            position: absolute;
            top: 50%;
            translate: 0 -50%;
            left: 15%;
            cursor: pointer;
        }

        .rightArrow {
            width: 0;
            height: 0;
            border-left: 30px solid #646464;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
            position: absolute;
            top: 50%;
            translate: 0 -50%;
            right: 15%;
            cursor: pointer;

        }

        .carouselShow {
            width: 1200px;
            margin: auto;
            position: relative;
            // border: 1px solid red;
            height: 320px;
            overflow: hidden;
        }

        .carousel {
            display: flex;

            .pic {
                padding: 20px;

                img {
                    width: 360px;
                }
            }
        }
    }

    .seeMore {
        width: 1200px;
        margin: auto;
        text-align: center;
        padding: 100px 0 150px;

        button {
            border-radius: 20px;
            padding: 10px 40px;
            color: #fff;
            background-color: #000;
            border: 1px solid #fff;
            cursor: pointer;
        }
    }
}
</style>