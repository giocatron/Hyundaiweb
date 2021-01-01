<template>
    <div class="service">
        <div class="title">Servicios</div>
        <div class="subtitle">ENTRA EN CONTACTO Y RESERVA UNA HORA</div>
        <div class="service-bg-image d-flex align-items-center" v-bind:style="{ 'background-image': 'url(static/img/service/service.jpg)' }">
            <div class="container">
                <div class="title-white">
                    Nuestros Servicios de Post-Venta
                </div>
                <div class="text">
                    <p> Para Automotor el compromiso de preservar y garantizar el funcionamiento óptimo de su Hyundai comienza inmediatamente luego de la adquisición de su vehículo, razón por la cual nos aseguramos de brindarle todo el respaldo necesario sin
                        importar el paso del tiempo.</p>
                    <p> Por este motivo hemos consolidado una amplia red de Talleres Autorizados a nivel nacional, dispuestos a brindar el mejor servicio automotriz cumpliendo con todas las normas de fábrica en infraestructura, herramientas y talento humano.</p>
                </div>
            </div>
        </div>
        <div class="cream-zone">
            <div class="container">
                <div class="title-cream">
                    Puntos importantes que debe conocer sobre nuestros servicios
                </div>
                <div class="subtitle-cream">
                    Sobre el Mantenimiento Preventivo:
                </div>
                <p>
                    En Automotor y nuestra Red de Talleres Autorizados contamos con planes de mantenimiento que se deben realizar a su vehículo cada 5.000 kilómetros o 6 meses -lo que ocurra primero- y posteriores, los cuáles son de suma importancia para preservar el correcto
                    funcionamiento de su motor, desarrollado acorde a las condiciones de conducción de nuestro país: altas temperaturas la mayor parte del año (superiores a los 30ºC), la conducción repetitiva a cortas distancias, la calidad de nuestros combustibles,
                    entre otros.
                </p>
                <div class="subtitle-cream">
                    Sobre la Garantía:
                </div>
                <p>
                    La aplicación de la Garantía ofrecida por Automotor está sujeta a la realización de todos los mantenimientos preventivos dentro de nuestra Red de Talleres Autorizados, y está condicionada al cumplimiento de las políticas y protocolos de mantenimientos
                    sugeridas por Hyundai, incluyendo los mantenimientos preventivos detallados en el manual del usuario.
                </p>
                <p>
                    La nueva Garantía de 5 años o 100.000 kilómetros, lo que ocurra primero, aplica a todos los vehículos de las líneas Passenger o SUV vendidos a partir del 1 de enero del 2017. Para vehículos vendidos en años anteriores el periodo de Garantía es de 3 años
                    o 100.000 kilómetros, lo que ocurra primero.
                </p>
                <div class="subtitle-cream">
                    Sobre los Servicios de Post-Venta que ofrecemos:
                </div>
                <ul>
                    <li>Una amplia y moderna Red de Talleres Autorizados(*), disponibles para usted distribuidos a través de todo el territorio nacional.</li>
                    <li>Servicios garantizados con altos estándares de exigencia.</li>
                    <li>Profesionales en constante capacitación.</li>
                    <li>Repuestos originales para asegurar el óptimo rendimiento y la máxima seguridad de su vehículo Hyundai.</li>
                    <li>Tecnología de punta con equipamientos de última generación.</li>
                    <li> Calidad de servicio y atención.</li>
                </ul>
            </div>
        </div>
        <!-- <section class="content mt-5 talleres">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-md-12 mb-4">
                        <h1 class="talleres-autorizados text-center">Talleres Autorizados</h1>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_1" class="marker">
                            <h3 class="titulo">Casa Central</h3>
                            <div class="local-descripcion">
                                Artigas 2025
                            </div>
                            <p class="email">sac2@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_2" class="marker">
                            <h3 class="titulo">Sucursal Mcal. Lopez</h3>
                            <div class="local-descripcion">
                                Avda. Mcal. Lopez casi Cerro Porteño
                            </div>
                            <p class="email">sac2@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_3" class="marker">
                            <h3 class="titulo">Taller Ciudad del Este</h3>
                            <div class="local-descripcion">
                                Dirección: Avenida Monseñor Rodríguez Km. 4,5 e/ Calle 1 y Calle 7
                            </div>
                            <p class="email">tallercde@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_4" class="marker">
                            <h3 class="titulo">Santa Rita</h3>
                            <div class="local-descripcion">
                                <p>Av. Rodríguez de Francia casi Adela Speratti</p>
                            </div>
                            <p class="email">santarita@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_5" class="marker">
                            <h3 class="titulo">Encarnación</h3>
                            <div class="local-descripcion">
                                <p>Avenida Bernardino Caballero 791</p>
                            </div>
                            <p class="email">encarnacion@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_6" class="marker">
                            <h3 class="titulo">Cnel. Oviedo</h3>
                            <div class="local-descripcion">
                                <p>Mcal. Estigarribia casi Las Residentas</p>
                            </div>
                            <p class="email">oviedo@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_7" class="marker">
                            <h3 class="titulo">Departamento de Repuestos</h3>
                            <div class="local-descripcion">
                                <p>Av. Artigas 2025<i></i></p>
    
                                <p>&nbsp;+595 21 282469/70<i></i></p>
    
                                <p>&nbsp;</p>
                            </div>
                            <p class="email">parts-dept@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_8" class="marker">
                            <h3 class="titulo">Taller autorizado LC Cars</h3>
                            <div class="local-descripcion">
                                <p>Avda. Zoilo Gonzalez c/ Pedro Juan Caballero<i></i></p>
    
                                <p>+595343-420009 / +595981458652<i></i></p>
                            </div>
                            <p class="email">lccarsmultiservicios@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_9" class="marker">
                            <h3 class="titulo">Taller autorizado Cristian Paats &amp; Cia</h3>
                            <div class="local-descripcion">
                                <p>Jose Segundo Decoud esq. Carlos Antonio Lopez (al lado de COPACO)<i></i></p>
    
                                <p>+595521-202-345 - 0976438170<i></i></p>
                            </div>
                            <p class="email">cristianpaatsycia@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_10" class="marker">
                            <h3 class="titulo">Taller autorizado Autocentro San Roque</h3>
                            <div class="local-descripcion">
                                <p>Pedro Juan Caballero esq. Cristobal Colon</p>
    
                                <p><i></i>+595522-40925 - 0981 506097<i></i></p>
                            </div>
                            <p class="email">autocentrosanroque@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_11" class="marker">
                            <h3 class="titulo">Taller autorizado Rectificadora Campo 9</h3>
                            <div class="local-descripcion">
                                <p>Ruta VII km. 213</p>
    
                                <p><i></i>+595528-222285 - 0972 805165<i></i></p>
                            </div>
                            <p class="email">alberto221968@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_12" class="marker">
                            <h3 class="titulo">Taller autorizado JuanK Encarnación</h3>
                            <div class="local-descripcion">
                                <p>Ruta VI km. 3<i></i></p>
    
                                <p>+59571-203251/+595971905277 / +595961999754 /+595975764204<i></i></p>
                            </div>
                            <p class="email">juank.py@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_13" class="marker">
                            <h3 class="titulo">Taller autorizado Industrial Chaco</h3>
                            <div class="local-descripcion">
                                <p>Calle Industrial c/ Hindenburg (al lado de la playa de autos en la esquina)<i></i></p>
    
                                <p>+595491-417450 - 0981 244046</p>
                            </div>
                            <p class="email">sac2@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_14" class="marker">
                            <h3 class="titulo">Taller autorizado Autocenter</h3>
                            <div class="local-descripcion">
                                <p>Tallerstrasse c/ Av. Central<i></i></p>
    
                                <p>+595492-252110 - 0981 200237<i></i></p>
                            </div>
                            <p class="email">autocenter@portalchaco.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_15" class="marker">
                            <h3 class="titulo">Taller autorizado Braun S.R.L.</h3>
                            <div class="local-descripcion">
                                <p>1ero de Febrero esq. La Perdiz no. 775<i></i></p>
    
                                <p>+595493-240243 - 0984 172300<i></i></p>
                            </div>
                            <p class="email">braunsrl@gmail.com; servicio@braun.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_16" class="marker">
                            <h3 class="titulo">Taller autorizado JuanK Hohenau</h3>
                            <div class="local-descripcion">
                                <p>Eusebio Ayala c/ Tte. Fariña (a 4 cuadras del Adventista entrando desde la Ruta VI)</p>
    
                                <p><i></i>+595775-232998 / +595961999755</p>
    
                                <ul>
                                </ul>
                            </div>
                            <p class="email">juank.colonias@hotmail.com; juank@itacom.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_17" class="marker">
                            <h3 class="titulo">Taller autorizado Gorostiaga CDE</h3>
                            <div class="local-descripcion">
                                <p>Av. Monseñor Rodríguez Ruta 7 km. 3 1/2 esq. Cadete Pando (en la esquina esta el Shopping Noblense)</p>
    
                                <p><i></i>+59561-570219 - 0983 300366 - 0973 808170</p>
                            </div>
                            <p class="email">almada.genaro@gorostiaga.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_18" class="marker">
                            <h3 class="titulo">Taller autorizado Premium</h3>
                            <div class="local-descripcion">
                                <p>Simon Bolivar c/ Mcal Lopez (doblar a la izquierda frente a Autoelectrica Sosa)<i></i></p>
    
                                <p>+595983-639549 / +595677-20448<i></i></p>
                            </div>
                            <p class="email">repuestos.premium@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_19" class="marker">
                            <h3 class="titulo">Taller autorizado Bazzo</h3>
                            <div class="local-descripcion">
                                <p>Av. El Agricultor - Fraccion Sur (atras de la agencia Ford y Disapar)<i></i></p>
    
                                <p>+595673-220345 / +595983-615230<i></i></p>
                            </div>
                            <p class="email">bazcar_f1@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_20" class="marker">
                            <h3 class="titulo">Taller autorizado Taller GT</h3>
                            <div class="local-descripcion">
                                <p>Gral. Escobar esq. Capellán Molas<i></i></p>
    
                                <p>+595985-408030 / 0985 725 481</p>
                            </div>
                            <p class="email">tallergt.enc@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_21" class="marker">
                            <h3 class="titulo">Taller autorizado Taller San Carlos</h3>
                            <div class="local-descripcion">
                                <p>14 de mayo esq. Pte Franco</p>
    
                                <p><i></i>+595331-241992 - 0984 396112<i></i></p>
                            </div>
                            <p class="email">carlosdiazf61@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_22" class="marker">
                            <h3 class="titulo">Taller autorizado Gorostiaga Santa Rita</h3>
                            <div class="local-descripcion">
                                <p>Ruta 6ta. Km. 40 Barrio Simuelo</p>
    
                                <p>0673&nbsp;221-841/2 / +595986164222<i></i></p>
                            </div>
                            <p class="email">dani2014bm@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_24" class="marker">
                            <h3 class="titulo">Taller autorizado Motor Mec</h3>
                            <div class="local-descripcion">
                                <p>Antequera y Teniente Mendoza (en la esquina del Banco Continental)</p>
    
                                <p>0786 230 211 - 0975 122 025<i></i></p>
                            </div>
                            <p class="email">motormec_pilar@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_25" class="marker">
                            <h3 class="titulo">Taller autorizado Motormack</h3>
                            <div class="local-descripcion">
                                <p>Avda. Central (al entrar al pueblo a la izquierda)</p>
    
                                <p><i></i>0492 252 351 - 0981746205<i></i></p>
                            </div>
                            <p class="email">alfred@motormack.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_26" class="marker">
                            <h3 class="titulo">Norte Autos</h3>
                            <div class="local-descripcion">
                                Pedro Juan Caballero
                            </div>
                            <p class="email">sac2@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_27" class="marker">
                            <h3 class="titulo">Ciudad del Este</h3>
                            <div class="local-descripcion">
                                Dirección: Avenida Monseñor Rodríguez Km. 4,5 e/ Calle 1 y Calle 7
                            </div>
                            <p class="email">tallercde@automotor.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_28" class="marker">
                            <h3 class="titulo">Autidiesel Paraná</h3>
                            <div class="local-descripcion">
                                Katueté, Canindeyú
                            </div>
                            <p class="email">autodieselparana@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_29" class="marker">
                            <h3 class="titulo">LubriMor Servicios &amp; Repuestos</h3>
                            <div class="local-descripcion">
                                <p>San Ignacio, Misiones</p>
    
                                <p>+595972129565 / +595973535660</p>
                            </div>
                            <p class="email">alemor998@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_30" class="marker">
                            <h3 class="titulo">Taller Fogasa</h3>
                            <div class="local-descripcion">
                                <p>Santa Rosa del Aguaray</p>
    
                                <p>+595992 225723 / +59598 4401200</p>
                            </div>
                            <p class="email">fogasausa@hotmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_31" class="marker">
                            <h3 class="titulo">Taller RG</h3>
                            <div class="local-descripcion">
                                <p>Villarica</p>
    
                                <p>+595993 340303</p>
                            </div>
                            <p class="email">rg.automotor.servicios@katuetei.com.py</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_32" class="marker">
                            <h3 class="titulo">Alineación Rio Verde</h3>
                            <div class="local-descripcion">
                                <p>Villarrica - Ruta 3 km 340</p>
    
                                <p><i></i>+595986 756619</p>
                            </div>
                            <p class="email">alineacionrioverde90@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-6">
                        <div data-id="m_33" class="marker">
                            <h3 class="titulo">Autocentro LB</h3>
                            <div class="local-descripcion">
                                <p>Villarrica - Coronel Giménez casi Río Aquidabán</p>
    
                                <p><i></i>+595982 282001</p>
                            </div>
                            <p class="email">autocentrolb@gmail.com</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </section> -->
    </div>
</template>
