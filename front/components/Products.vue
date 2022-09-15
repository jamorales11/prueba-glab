<template>
<b-container fluid>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" id="card-body-general" v-for="product in products" :key="product.id">
            <b-card >
                <div class="contenedorImagen">
                    <b-card-img :src="require(`../assets/images/${product.name}.jpeg`)" img-alt="Image" img-top></b-card-img>
                    <div class="bottom-left">
                        <div class="overlay-text"><b>{{product.time}}</b></div>
                    </div>
                </div>
                
                <b-card-title> {{product.name}} </b-card-title>
                <b-card-body>
                    <b>
                        <img src="../assets/icons/149220.svg" width="20" height="20" />
                        {{product.qualification}}&emsp;</b>
                    <b class="precio"> &bull;&emsp; ${{product.price}}</b>
                </b-card-body>
            </b-card>
        </div>
    </div>
</b-container>


</template>

<script>
import productsData from "../assets/products.json";

let lista = [];

export default {
    name: 'Products',
    methods:{
        agregarALista(){
            lista.push();
        }
    },
    data(){
        return{
            products: productsData,
        };
    },
}
</script>

<style>
    .card-img {
        border-radius: 20px;
        height: 200px;
        max-width: 100%;
        object-fit: cover;
    }

    .card-body {
        padding: 0%;
    }

    .card{
        border:none;
    }

    .contenedorImagen {
        position: relative;
        text-align: center;
        color: black;
    }

        /* Bottom left text */
    .bottom-left {
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;

        position: absolute;
        bottom: 0px;
        left: 0px;
        background-color: #F2F2F2;

    }

    .overlay-text{
        bottom: 2px;
        left: 2px;
        padding: 15px;
        font-size: 130%;

    }

    #card-body-general{
        padding: 15px;
    }

    .precio{
        opacity: 60%;
    }

</style>