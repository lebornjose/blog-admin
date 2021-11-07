<template>
  <div id="container"></div>
</template>
<script lang="ts">
import { defineComponent, watch} from 'vue';
import { Chart, Util } from '@antv/g2';
export default defineComponent({
  name: 'caegoryChats',
  props: {
    categoryList: Array
  },
  setup(props) {
    const init = (obj: any) => {
      const data = obj;
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 380,
      });
      chart.data(data);
      chart.coordinate('theta', {
        radius: 0.75
      });
      chart.tooltip({
        showMarkers: false
      });
      const interval = chart
          .interval()
          .adjust('stack')
          .position('value')
          .color('title', ['#063d8a', '#1770d6', '#47abfc', '#38c060', '#E6A23C', '#FC4E3E'])
          .style({ opacity: 0.4 })
          .state({
            active: {
              style: (element) => {
                const shape = element.shape;
                return {
                  matrix: Util.zoom(shape, 1.1),
                }
              }
            }
          })
          .label('title', (val) => {
            // const opacity = val === '热爱前端' ? 1 : 0.5;
            return {
              offset: -30,
              style: {
                opacity: 1,
                fill: 'white',
                fontSize: 12,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)',
              },
              content: (obj) => {
                return obj.title + '\n' + obj.value + '%';
              },
            };
          });

      chart.interaction('element-single-selected');
      chart.render();
    };
    watch(() => props.categoryList, (val: any) => {
        init(val)
      }
    );
  },
})
</script>
