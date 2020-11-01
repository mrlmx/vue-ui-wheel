<template>
    <div class="top-nav">
        <router-link to="/">
            <div class="logo">
                <img class="logo-icon" src="../assets/logo.png" />
                Xin UI
            </div>
        </router-link>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
            <li>
                <a href="https://github.com/mrlmx/xin-ui-vue" target="__blank">
                    GitHub
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="outbound-link-title"
                        role="img"
                        focusable="false"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        width="15"
                        height="15"
                        class="icon"
                    >
                        <title id="outbound-link-title">
                            (opens new window)
                        </title>
                        <path
                            fill="currentColor"
                            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                        ></path>
                        <polygon
                            fill="currentColor"
                            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                        ></polygon>
                    </svg>
                </a>
            </li>
        </ul>
        <span class="toggle-aside" @click="toggleAside">三</span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>("asideVisible");
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value;
        };
        return {
            toggleAside,
        };
    },
};
</script>

<style lang="scss" scoped>
.top-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 30px;
    border-bottom: 1px solid #eaecef;
    // background: #efefef;
    // color: #FFF;

    .logo {
        font-size: 22px;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        &-icon {
            width: 26px;
            margin-right: 8px;
        }
    }

    .toggle-aside {
        position: absolute;
        left: 20px;
        margin: auto 0px;
        cursor: pointer;
        display: none;
    }

    .menu {
        li {
            display: inline-block;
            margin-left: 25px;
            cursor: pointer;
            &:hover {
                border-bottom: 2px solid #222831;
            }
        }
    }
}

@media (max-width: 500px) {
    .top-nav {
        justify-content: center;

        .toggle-aside {
            display: inline-block;
        }

        .menu {
            display: none;
        }
    }
}
</style>
