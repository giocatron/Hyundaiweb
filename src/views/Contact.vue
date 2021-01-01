<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <iframe id="bx_form_iframe_65" name="bx_form_iframe_65" src="https://automotor.bitrix24.es/pub/form.php?view=frame&amp;form_id=65&amp;widget_user_lang=la&amp;sec=0wqu2g&amp;r=1561936747337#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A8080%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A8080%2Fcontacto%22%2C%22options%22%3A%7B%7D%7D"
                          scrolling="no" frameborder="0" marginheight="0" marginwidth="0" style="width: 100%; height: 766px; border: 0px; overflow: hidden; padding: 0px; margin: 0px;"></iframe>
      </div>
      <div class="col-md-6 pt-5 ">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhyundaiparaguay%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=206685109389918" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    <div class="mb-2">
      <zones></zones>
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
             
             b24form({"id":"65","lang":"la","sec":"0wqu2g","type":"inline"});
               b24form({"id":"171","lang":"la","sec":"5tpbp7","type":"inline"});
        <\/script>`,{done:function(){console.log('done')},error:function(e){console.log(e)}})
        })
  },
  components: {
        Zones
    }
}
</script>