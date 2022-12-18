<template>
    <!-- header -->
    <HeaderRow/>

    <!-- home -->
    <HomeRow/>

    <!--about -->
    <AboutRow/>

    <!-- services -->
    <ServicesRow/>

    <!-- click -->
    <ClickRow/>

    <!-- reviews -->
    <ReviewRow/>

    <!-- contact -->
    <!-- footer -->
    <FooterRow/>


</template>

<script>

import HeaderRow from "@/components/HeaderRow";
import AboutRow from "@/components/AboutRow";
import HomeRow from "@/components/HomeRow";
import ServicesRow from "@/components/ServicesRow";
import ClickRow from "@/components/ClickRow";
import ReviewRow from "@/components/ReviewRow";
import FooterRow from "@/components/FooterRow";

export default {
    name: "InfoPage",
    components: {
        FooterRow,
        ReviewRow,
        ClickRow,
        ServicesRow,
        HomeRow,
        AboutRow,
        HeaderRow

    }
}



</script>

<style scoped>

</style>