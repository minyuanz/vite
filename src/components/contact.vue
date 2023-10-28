<script>
export default {

}
</script>

<template>
    <div class="contactWrap">
        <div class="contact">
            <div class="title">
                <h1>CONTACT</h1>
                <p>請留下需求，我們盡快與你聯繫</p>
                <p>也可以依照下方直接與我們聯繫</p>
            </div>
            <div class="content">
                <div class="phone">
                    <p>+886-2-2777-1777</p>
                </div>
                <div class="address">
                    <p>明尚未電子商務面向利用用途</p>
                    <p>職責鍵盤，你的旅遊感覺還在用途製造空氣</p>
                </div>
                <div class="pic">
                    <img src="https://picsum.photos/300/200/?random=10">
                </div>
            </div>
        </div>
        <form action="">
            <div class="name">
                <label for="name">姓名</label>
                <input type="text" id="name">
            </div>
            <div class="email">
                <label for="email">EMAIL</label>
                <input type="email" id="email">
            </div>
            <div class="phone">
                <label for="phone">電話</label>
                <input type="tel" id="phone">
            </div>
            <div class="require">
                <label for="require">需求說明</label>
                <textarea id="require" cols="30" rows="10"></textarea>
            </div>
            <button type="button">確定送出</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.contactWrap {
    // background-color: #000;
    color: #fff;
    display: flex;
    // margin: 100px 0;

    p {
        margin: 0;
    }

    .contact {
        width: 100%;
        // border: 1px solid #fff;
        background-color: #f0f0f0;
        // padding: 0 20%;
        // padding-left: 20%;
        // padding-top: 5%;
        padding: 200px 0 200px 20%;
        color: #000;

        .title {
            h1 {
                margin: 0;
                font-size: 48px;
            }
        }

        .content {
            margin-top: 100px;

            .phone {
                p {
                    font-size: 40px;
                    color: #fa0;
                }
            }

            .address {
                margin: 20px 0;
                position: relative;

                p {
                    font-weight: bold;
                }
            }

            .address::after {
                content: '';
                position: absolute;
                bottom: -50%;
                left: 0;
                width: 100%;
                border-bottom: 1px solid #2e2e2e;
            }

            .pic {
                margin-top: 50px;

                img {
                    // width: 100%;
                    width: 100px;
                    vertical-align: bottom;
                }
            }
        }
    }

    form {
        width: 100%;
        // margin-right: 20%;
        padding: 200px 20% 200px 0;



        // border: 1px solid #fff;
        background-color: #3a3a3a;
        display: grid;
        align-items: center;

        // gap: 30px;
        div {
            padding: 0 50px;
        }

        .name,
        .email,
        .phone {
            label {
                display: block;
            }

            input {
                width: 100%;
                background-color: transparent;
                border: 1px solid transparent;
                border-bottom: 1px solid #fff;
                color: #fff;
                padding: 5px;
            }

            input:focus {
                outline: none;
            }
        }

        .require {
            label {
                display: block;
                margin-bottom: 5px;
            }

            textarea {
                width: 100%;
                background-color: transparent;
                color: #fff;
            }
        }

        button {
            width: 150px;
            margin-left: 9%;
            border-radius: 30px;
            background-color: #fff;
            border: 1px solid #fff;
            padding: 10px 30px;
            font-weight: bold;
            position: relative;
            cursor: pointer;
        }

        button:after {
            content: '';
            position: absolute;
            top: 50%;
            right: -15%;
            width: 40px;
            border-bottom: 2px solid #aaa;
        }

        button::before {
            content: '';
            position: absolute;
            top: 33%;
            right: -15%;
            width: 15px;
            border-bottom: 2px solid #aaa;
            rotate: 45deg;
        }

    }
}
</style>