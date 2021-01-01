<template>
    <div class="container contact mb-5">
        <div class="title">Contáctenos</div>
        <div class="form-contact">
            <div class="row">
                <div class="col-md-6">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre y Apellido">
                            </div>
                        </div>
                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" id="email" placeholder="E-mail">
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="pass" placeholder="Celular">
                            </div>
                        </div>
                        <div class="form-row mt-3">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="telefono" placeholder="Telefono(opcional)">
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" id="city" placeholder="Ciudad">
                            </div>
                        </div>
                           <div class="form-row">
                            <div class="form-group col-md-12">
                                <textarea class="form-control" placeholder="Mensaje" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="d-flex">
                              <button type="submit" class="btn btn-primary ml-auto">Enviar</button>
                        </div>
                    
                    </form>
                </div>
                <div class="col-md-6">
                    <gallery></gallery>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Gallery from '@/views/sections/cars/accent/components/Gallery.vue'
export default {
    components: {
        Gallery
    }
}
</script>

