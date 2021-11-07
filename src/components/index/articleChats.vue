<template>
  <div id="article-container"></div>
</template>
<script lang="ts">
import { defineComponent, watch, onMounted} from 'vue';
import { Chart } from '@antv/g2';
export default defineComponent({
  name: 'article-container',
  props: {
    categoryList: {
      type: Array,
      default: []
    },
  },
  setup(props) {
    const init = (val: any) => {
      let total: number = 0;
      for(let i = 0; i < val.length; i++) {
        total += val[i].value;
      }
      val.map((current: { title: String, value: number; total: number; percent: number; }) => {
        current.percent = current.value / total;
      });
      const data = val;
      const chart = new Chart({
        container: 'article-container',
        autoFit: true,
        height: 380,
        padding: [50, 20, 50, 20],
      });
      chart.data(data);
      chart.scale('value', {
        alias: '文章数(篇)',
      });
      chart.axis('title', {
        tickLine: {
          alignTick: false,
        },
      });
      chart.axis('value', false);

      chart.tooltip({
        showMarkers: false,
      });
      chart.interval().position('title*value');
      chart.interaction('element-active');
      // 添加文本标注
      data.forEach((item:any) => {
        chart
            .annotation()
            .text({
              position: [item.title, item.value],
              content: item.value,
              style: {
                textAlign: 'center',
              },
              offsetY: -30,
            })
            .text({
              position: [item.title, item.value],
              content: (item.percent * 100).toFixed(0) + '%',
              style: {
                textAlign: 'center',
              },
              offsetY: -12,
            });
      });
      chart.render();
    };
    watch(() => props.categoryList, (val: any) => {
      init(val)
    });
  }
});
</script>
