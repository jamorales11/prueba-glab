<template>
    <b-container fluid>
        <div class="sidebarCarrito">
            <div class="b-row" id="iconosSuperiores">
                <img id="iconoUser" :src="require(`../assets/icons/user.svg`)" width="30" height="30"  />

            </div>
            <div class="b-row" id="Titulo">
                <h2>My Order</h2>
            </div>
            <div class="b-row" id="Lista">
                <ListaOrden />
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    
}
</script>

<style>
    #iconoUser{
        position:relative; 
        left:50%;
        top:0px;
    }

    #iconosSuperiores{
        padding-top:70px;
        padding-bottom: 50px;
    }
</style>