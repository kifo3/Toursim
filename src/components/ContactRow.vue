<template>

    <!-- contact section start  --->

    <section class="contact" id="contact">

        <h1 class="heading">Order a ticket</h1>

        <form>
            <span>your name :</span>
            <input type="text" name="name" placeholder="enter your name" class="box">
            <span>your email :</span>
            <input type="text" name="name" placeholder="enter your email" class="box">
            <span>your number :</span>
            <input type="number" name="number" placeholder="enter your number" class="box">
            <span>day :</span>
            <input type="number" name="number"  class="box">
            <span>Select a city:</span>
                <select multiple class="form-control">
                    <option>Dubai</option>
                    <option>Italy</option>
                    <option>Bali Island</option>
<!--                    <option>9:30</option>-->
<!--                    <option>10:00</option>-->
                </select>
            <input type="submit" value="submit" name="submit" class="link-btn mt-3">
        </form>

    </section>

    <!-- contact section end  --->

</template>

<script>
export default {
    name: "ContactRow"
}
</script>

<style scoped>

</style>