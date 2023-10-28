<script setup>
import { ref, onMounted, computed } from 'vue'

const windowHeight = ref(window.innerHeight);
const scrollY = ref(0);

const handleScoll = () => {
    console.log(scrollY.value);
    scrollY.value = window.scrollY;
}

const underLine = computed(() => {
    return {
        underLine: scrollY.value > 831 && scrollY.value < 1999 ? true : false,
    }
})
const underLine1 = computed(() => {
    return {
        underLine: scrollY.value > 1999 && scrollY.value < 2899 ? true : false,
    }
})
const underLine2 = computed(() => {
    return {
        underLine: scrollY.value > 2899 && scrollY.value < 3739 ? true : false,
    }
})
const underLine3 = computed(() => {
    return {
        underLine: scrollY.value > 3739
    }
})

const scrollStyle = computed(() => {
    return { bottom: scrollY.value >= 831 ? 'auto' : '0', top: scrollY.value >= 831 ? '0' : 'auto' }
})

onMounted(() => {
    window.addEventListener('scroll', handleScoll);
})
</script>

<template>
    <div>
        <header :style="scrollStyle">
            <div class="logo">
                <img src="https://picsum.photos/300/200/?random=1">
            </div>
            <nav>
                <ul>
                    <li :class="underLine">SERVICE</li>
                    <li :class="underLine1">SHOWREEL</li>
                    <li :class="underLine2">TEAM</li>
                    <li :class="underLine3">CONTACT</li>
                </ul>
            </nav>

        </header>
    </div>
</template>

<style lang="scss" scoped>
* {
    list-style: none;
}

.underLine {
    width: 100%;
    border-bottom: 3px solid #fa0;
}

// .underLine::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 0%;
//     border-bottom: 3px solid #fa0;
//     // transition: .5s;
// }

// .underLine:hover::after {
//     width: 100%;
//     transition: .5s;
// }

header {
    display: flex;
    justify-content: space-around;
    background-color: #000;
    position: fixed;
    z-index: 999;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;

    .logo {
        img {
            vertical-align: bottom;
            width: 100px;
            height: 100px;
        }
    }

    nav {
        display: flex;
        align-items: center;

        ul {
            display: flex;

            li {
                margin: 0 20px;
                color: #fff;
                letter-spacing: 3px;
                position: relative;
            }
        }
    }
}
</style>