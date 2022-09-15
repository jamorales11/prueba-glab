<template>
    <b-container fluid>
        
        <div class="row">
            <div class="col-9">
                <div class="row">
                    <Jumbotron />
                </div>
                <div class="row">
                    
                    <h1>Restaurants</h1>
                    <img id="iconoHamburguesa" :src="require(`../assets/icons/1046784.svg`)" width="30" height="30"  />
                    <b-button id="button">
                        <img id="iconoReloj" class="filter-white" :src="require(`../assets/icons/149316.svg`)" width="20" height="20"  />

                        Delivery: <b>Now</b>
                        <img id="iconoFlecha" class="filter-white" :src="require(`../assets/icons/118740.svg`)" width="20" height="20" />
                    </b-button>
                    
                    
                </div>
                <Categories />
                <Products />
            </div>
            <div class="col" id="sidebar">
                <Sidebar />
            </div>
        </div>
    </b-container>
    
</template>

<style>
    #sidebar{
        background-color: #F2F2F2;
    }

    #iconoHamburguesa{
        padding:0px;
        margin: 11px;
    }

    #iconoFlecha{
        transform: rotate(90deg);
    }

    #button{
        position: absolute;
        right: 30px;
        top:430px;
        color: white;
        background-color: #F25922;
        border-radius: 20px;
        font-size: 80%;
        padding: 5px;

    }

    .filter-white{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(91deg) brightness(105%) contrast(101%);
    }
</style>