<template>
    <div class="to__block__sub-model" :style="{ width : width, height : height}" :class="[ title ? 'has-title' : '']">
        <div class="sub-model-title">{{title}}</div>
        <div class="sub-model-content">
            <slot v-if="check(data) === true"></slot>
            <div v-else class="no-data"></div>
        </div>
    </div>
</template>

<script>
import check from '../../../libs/tools/no-data.js';

export default {
    props: {
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        title: {
            type: String,
        },
        data: {
            type: [Object, Array, String, Boolean],
            default: true,
        },
    },
    methods: {
        check: check,
    },
};
</script>

<style lang="less" scoped>
.to__block__sub-model {
    position: relative;

    .sub-model-title {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        display: none;
    }

    .sub-model-content {
        height: 100%;
    }
}

.to__block__sub-model.has-title {
    .sub-model-title {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        display: inline-block;

        left: 10px;
        top: 10px;
        color: #999;
    }

    .sub-model-content {
        // padding-top: 36px;
    }
}
</style>