<template>
    <div class="to__block__model" :style="{ width : width, height : height}" :class="[orient, title ? 'has-title' : '']">
        <div class="model-title">{{title}}</div>
        <div class="model-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String
        },
        height: {
            type: String
        },
        orient: {
            type: String
        },
        title: {
            type: String
        }
    }
};
</script>

<style lang="less" scoped>
.to__block__model {
    .model-title {
        display: none;
    }

    .model-content {
        height: 100%;
        display: flex;
    }
}

.to__block__model.has-title {
    .model-title {
        font-size: 16px;
        height: 16px;
        line-height: 16px;
        display: inline-block;
    }

    .model-content {
        margin-top: 20px;
        height: calc(100% - 16px - 20px);
    }
}
</style>