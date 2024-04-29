import React from 'react'
import Header from '../Header/Header'
import HomeCarItem from '../HomeCarItem/HomeCarItem'
import HomeNewItems from '../HomeNewItems/HomeNewItems'
import HomeBrand from '../HomeBrand/HomeBrand'
import HomeNewItems2 from '../HomeNewItems2/HomeNewItems2'

const Home = () => {
    return (
        <div>
            <Header />
            <HomeCarItem />
            <HomeNewItems />
            <HomeBrand />
            <HomeNewItems2 />
        </div>
    )
}

export default Home
