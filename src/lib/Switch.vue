<template>
  <button><span /></button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  button{
    height: 22px;
    width: 44px;
    border: none;
    background: #EFEFEF;
    border-radius: 11px;
    position: relative;
    cursor: pointer;

    &:hover{
      > span{
        left: calc(100% - 18px - 2px);
      }
    }
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #AAA;
  }

</style>