import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { courseService } from '../../services/couserService';
import { setListCourse } from '../../Toolkits/courseSlice';
import { setSpinnerOff, setSpinnerOn } from '../../Toolkits/spinnerSlice';
import FrontEndCourse from '../FrontEndCourse/FrontEndCourse';
import PopularCourse from '../PopularCourse/PopularCourse';
import BackEndCourse from '../BackEndCourse/BackEndCourse'

export default function ListCourseHome() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSpinnerOn())
    courseService.getCourseList()
      .then((res) => {
        dispatch(setSpinnerOff())
        dispatch(setListCourse(res.data))
      })
      .catch((err) => {
        dispatch(setSpinnerOff())
        console.log(err);
      });
  }, [])

  return (
    <div>
      <div className="myContainer">
        <PopularCourse />
        <FrontEndCourse/>
        <BackEndCourse/>
      </div>
    </div>
  )
}
