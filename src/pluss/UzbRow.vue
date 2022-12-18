<template>
    <div class="uzb">
        <div class="container">
            <div class="card mb-3" style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/samarqand.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">Travel around Samarqand 7 days</h2> <span>1,700 $</span>
                            <button type="button" class="uz">
                                <router-link to="/contact" class="link-btn">Click</router-link>
                            </button>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3" style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/buxoro.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">Travel around Bukhara 7 days</h2> <span>1,700 $</span>
                            <button type="button" class="uz">
                                <router-link to="/contact" class="link-btn">Click</router-link>
                            </button>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3" style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/xiva.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">Travel around Xiva 7 days</h2> <span>1,700 $</span>
                            <button type="button" class="uz">
                                <router-link to="/contact" class="link-btn">Click</router-link>
                            </button>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3" style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/zomin.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">Travel around Zomin 7 days</h2> <span>1,700 $</span>
                            <button type="button" class="uz">
                                <router-link to="/contact" class="link-btn">Click</router-link>
                            </button>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>


</template>

<script>
export default {
    name: "UzbRow"
}
</script>

<style scoped>
.uzb {
    margin: 30px;
}
span {
    font-size: 22px;
    font-weight: bold;
    color: var(--black);
    margin-right: 400px;
}
p {
    font-size: 14px;
    margin-top: 5px;
    display: block;
}

</style>