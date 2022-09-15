<template>
    <b-container fluid>

        <div class="row ">
            <div class="col" id="card-body-general" v-for="category in categories" :key="category.id">
                <b-button id="pills" pill>
                    <svg width="80" height="80">
                        <circle style="z-index: -1;" cx="40" cy="40" r="35" stroke="grey" stroke-width="1" fill="white"/>
                    </svg>
                    <img style="z-index:100; position: relative;" :src="require(`../assets/icons/${category.name}.svg`)" width="30" height="30"  />
                    <br>
                    <b style="position: relative;bottom: 25px;">{{category.name}}</b>
                    </b-button>
            </div>

        </div>

        
    </b-container>
</template>

<script>
import categoriesData from "../assets/categories.json";

export default {
    name: 'Categories',
    data(){
        console.log(Object.keys(categoriesData))
        return{
            categories: categoriesData,
        };
    },
}
</script>

<style>
    #pills{
        height: 150px;
        width: 90px;
    }

    img{
        padding-top: 0px;
        bottom: 55px;

    }

    .btn-secondary{
        color: black;
        background-color: white;
        padding: 0px;

    }




</style>