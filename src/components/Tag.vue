<template>
    <div class="tags">
        <div v-for="(group,key) in groups" :key="key">
            <div class="tag">{{group}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tag',
        props: ['groups'],
    };
</script>

<style>
.tags {
    display: flex;
    margin-right: 10px;
}
.tag {
    width: 60px;
    height: 30px;
    padding: 5px;
    margin-right: 5px;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #ff960e;
    border: 1px solid #ff960e;
    text-align: center;
}
</style>
