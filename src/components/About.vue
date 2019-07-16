<template>
  <div class="about">
    <section class="about-contact">
      <a href="https://github.com/Harveytwo">Github</a>
      <!-- ·
      ·
      ·
      懶得備案 -->
    </section>

    <section class="about-right">
      © 2019 JRAIN LAU
    </section>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/style/variables.less';

.about {
  cursor: default;
  margin-bottom: @gapOuter;
  &-contact {
    color: @monorFontColor;
    margin-bottom: @gapInner;
    a {
      text-decoration: none;
      color: @monorFontColor;
    }
  }
  &-right {
    color: @monorFontColor;
  }
}
</style>
