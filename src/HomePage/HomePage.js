import React from 'react'
import Banner from '../Components/Banner/Banner'
import InfoCourseHome from '../Components/InfoCourseHome/InfoCourseHome'
import ListCourseHome from '../Components/ListCourseHome/ListCourseHome'
import NumberCountUp from '../Components/NumberCountUp/NumberCountUp'
import Instrutor from '../Components/Instrutor/Instrutor'
import ReviewStudent from '../Components/ReviewStudent/ReviewStudent'

export default function HomePage() {
    return (
        <div>
            <Banner/>
            <InfoCourseHome/>
            <ListCourseHome/>
            <NumberCountUp/>
            <Instrutor/>
            <ReviewStudent/>
        </div>
    )
}


