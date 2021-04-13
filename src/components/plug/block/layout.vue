<template>
    <div class="to__block__layout" :class="orient">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        orient: {
            type: String
        }
    }
};
</script>

<style lang="less" scope>
.to__block__layout {
    padding: 20px;
    height: 100%;
    display: flex;
}
</style>