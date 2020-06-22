import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import featureImage from "../../static/images/intro.gif"
import featureVideo from "../../static/images/cheetah.mp4"

import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
//import thumbnailTeams from "../../static/images/feature-team.png"
//import thumbnailStaff from "../../static/images/feature-user.png"

var videoStyle = {
  width: '100%'
};

const IndexPage = () => (
    <Layout>
        <SEO title="Open-Source Gatsby Starter with SCSS Styling"/>

        <div className={"page-header home"}>
            <h1><a
                    href="https://zsresume.netlify.app/"
                    title={"Resume of Zakir Sajib"}
                    target="_blank"
                    rel="noopener noreferrer"
                >Zakir Sajib -
                </a>
                Full Stack Web Developer
            </h1>
            <p>
                I'm a full-stack
                <a
                    href="https://zsresume.netlify.app/"
                    title={"Resume of Zakir Sajib"}
                    target="_blank"
                    rel="noopener noreferrer"
                > Web Developer
                </a> (Yes both front and backend) with<br />
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>,
                <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"> Gatsby</a>,
                <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"> WordPress</a> and
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"> Node</a> experience.
            </p>

            <br />

            <div className={"row"}>
                <div className={"col-2 first"}></div>
                <div className={"col-8"}>

                    <video style={videoStyle} playsinline muted loop="true" autoplay="autoplay" controls>
                        <source src={featureVideo} type="video/mp4" />
                    </video>

                </div>
            </div>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Open-Source</h2>
                                <p>
                                    Gatsby Starter, released under the MIt license, suitable for hobby or commercial projects.
                                    <br />
                                    Grab the <a href="https://github.com/zakirsajib" target="_blank" rel="noopener noreferrer">sources</a> and start coding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Built in Gatsby</h2>
                                <p>
                                    Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.
                                    Read the <a href="https://www.gatsbyjs.org/docs/" target="_blank" rel="noopener noreferrer">docs</a> or grab a <a href="https://www.gatsbyjs.org/starters/?v=2" target="_blank" rel="noopener noreferrer">starter</a> and code your magic.
                                </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Credits</h2>
                                <p>
                                    Coded on top of this <a href="https://github.com/zakirsajib" target="_blank"
                                    rel="noopener noreferrer">starter</a> {' '}
                                    by <a href="https://twitter.com/ZakirSajib" target="_blank" rel="noopener noreferrer">ZakirSajib</a>.
                                    <br /> Video <a href="https://www.youtube.com/watch?v=8-9oFxYFODE" target="_blank" rel="noopener noreferrer">Formula E Car vs Cheetah</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Stay Safe, Stay Home</h2>
                    <p>Lockdown, Quarantine and Covid-19</p>
                </div>

                <div className={"button"}>
                    <a href="https://github.com/zakirsajib" target="_blank"
                    rel="noopener noreferrer">Get Source Code</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
