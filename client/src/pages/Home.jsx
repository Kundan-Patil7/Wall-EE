import React from 'react'
import Title from '../components/Title'
import Category from '../components/Category'
import Hero from "../components/Hero";

const Home = () => {
    return (
        <>

            <Hero />
            <Title title="Category" />
            <Category />

            <Title title="Popular" subtitle="Wallpapers" />
            <Title title="AI-Generated" subtitle="Wallpapers" />
        </>
    )
}

export default Home




