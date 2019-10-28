<template>
<ul class="list-unstyled list-unstyled-border">
<li class="media" v-for="(data,index) in data" >
            <img class="mr-3 rounded" width="55" :src="'@/assets/img/products/'+data.slug" alt="product">
            <div class="media-body">
            <div class="float-right"><div class="font-weight-600 text-muted text-small">{{data.sales}} Sales</div></div>
            <div class="media-title">{{data.title}}</div>
            <div class="mt-1">
                <div class="budget-price">
                <div class="budget-price-square bg-primary" data-width="64%"></div>
                <div class="budget-price-label">${{data.blue_price}}</div>
                </div>
                <div class="budget-price">
                <div class="budget-price-square bg-danger" data-width="43%"></div>
                <div class="budget-price-label">${{data.red_price}}</div>
                </div>
            </div>
            </div>
        </li>
        </ul>
</template>
<script>
export default {
    props: ['data'],
    created() {
        console.log(this.data)
    },
}
</script>