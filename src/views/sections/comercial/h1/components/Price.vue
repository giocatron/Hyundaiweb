<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12" id="gist" >
       
      </div>
      <!--<div class="col-md-6 pt-5 ">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhyundaiparaguay%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=206685109389918" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>-->
    </div>
  </div>
</template> 
<script>
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'
import Zones from '@/components/home/Zones.vue'
export default {  
  name: 'Gist-Example',
  mounted() {
        this.$nextTick(() => {
            console.log("ejecuta nexttick")
                postscribe('#gist', `<script  id="bx24_form_inline" data-skip-moving="true">

                    (
                      function(w,d,u,b) {
                      w['Bitrix24FormObject']=b;
                      console.log(w)
                      w[b] = w[b] || function(){arguments[0].ref=u;
                     (w[b].forms=w[b].forms||[]).push(arguments[0])};
                    
                    if(w[b]['forms']) return;
                   var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());
                   var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                 
                 })(
                   window,
                   document,
                   'https://automotor.bitrix24.es/bitrix/js/crm/form_loader.js',
                   'b24form'
                   );
             
              b24form({"id":"181","lang":"la","sec":"80wala","type":"inline"});
        <\/script>`,{done:function(){console.log('done')},error:function(e){console.log(e)}})
        })
  },
  components: {
        Zones
    }
}
</script>