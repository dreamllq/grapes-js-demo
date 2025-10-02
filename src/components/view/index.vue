<template>
<div id="gjs"></div>
<button @click="onClick">aaa</button>
<button @click="onClear">clear</button>
</template>

<script setup lang="ts">
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';
import blocksBasicPlugin from 'grapesjs-blocks-basic';
import tablePlugin from './plugins/table'
import { onMounted } from 'vue';

let editor;
onMounted(()=>{
   editor = grapesjs.init({
    container : '#gjs',
        fromElement: true,
        showOffsets: true,
    plugins: [
      editor =>{
        plugin(editor, {  })
        // blocksBasicPlugin(editor, {})
        // tablePlugin(editor, {})
      },
    ],
  });
  console.log(editor);
 var pn = editor.Panels;
  editor.on('load', function() {
    pn.getButton('options', 'sw-visibility').set({
          command: 'core:component-outline',
          'active': true,
        });
  })
})

const onClick = ()=>{
  console.log(editor.getProjectData());

}

const onClear = ()=>{
  editor.loadProjectData({});
}

</script>

<style scoped>

</style>