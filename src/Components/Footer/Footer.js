import React from 'react'
import logo from '../../images/logo_transparent.png'

export default function Footer() {
    return (
        <div>
            <footer className="relative bg-blue-50 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <img src={logo} width="250" alt="" />
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square" href='facebook.com' /></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-instagram"/></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble" /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-github"/>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blue-50 text-sm font-semibold mb-2">Liên kết</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href='/' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Trang chủ</a>
                                        </li>
                                        <li>
                                            <a href='' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Dịch vụ</a>
                                        </li>
                                        <li>
                                            <a href='' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Nhóm</a>
                                        </li>
                                        <li>
                                            <a href='/blog' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blue-50 text-sm font-semibold mb-2">Khóa học</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href='/categorycourse/FrontEnd' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Front End</a>
                                        </li>
                                        <li>
                                            <a href='/categorycourse/BackEnd' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Back End</a>
                                        </li>
                                        <li>
                                            <a href='/categorycourse/FullStack' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Full Stack</a>
                                        </li>
                                        <li>
                                            <a href='' className="text-blueGray-600 hover:text-pink-800 font-semibold block pb-2 text-sm">Node js</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-pink-300 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023</span><a href="" className="text-pink-400 hover:text-gray-800" target="_blank"> Lâm-LT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
