import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import Button from "../components/button/button";

import { ButtonThemes, ButtonTypes, ButtonSizes } from "../components/button/buttonTypes";

import img from "../images/instagram-stories/stories.png"

export default () => (
<Layout>
    <div className="section sectionPrimary">
        <div style={{margin: '0 auto', width: '55vw'}}>
            <Header headerText="Active Work-in-Progress"/>
            <p className="sectionDescription">Pardon my appearance as I migrate my personal portfolio. <Link to="/about">Check out my writing &#10230;</Link></p>
        </div>
    </div>
    {/* <div className="section">
        <div className="wrapper">
            <h3>Featured Work</h3>
            <div className="workMain">
                <img className="workImage" src={img}></img>
                <div className="copyContainer">
                    <h2>Scheduling Instagram Stories</h2>
                    <p>Storyboard your posts, draft captions, and execute on a holistic Instagram strategy with a birds’ eye view of all your content within Publish.</p>
                    <Button
                        size={ButtonSizes.MEDIUM}
                        label="Read the Full Story"
                        theme={ButtonThemes.LIGHT}
                        onClickHandler={() => console.log("you clicked!")}
                        type={ButtonTypes.PRIMARY}
                    />
                </div>
            </div>

            <div className="workSecondary">
                <div className="workItem">
                    <img className="workImage" src={img}></img>
                    <div className="copyContainer">
                        <h2>Building a transparent freelance marketplace.</h2>
                        <p>You've got this.</p>
                        <Link to="/about">Learn more &#10230;</Link>
                    </div>
                </div>
                <div className="workItem">
                    <img className="workImage" src={img}></img>
                    <div className="copyContainer">
                        <h2>Mentoring new freelance hires.</h2>
                        <p>Setting up folks for success.</p>
                        <Link to="/about">Learn more &#10230;</Link>
                    </div>
                </div>
                <div className="workItem">
                    <img className="workImage" src={img}></img>
                    <div className="copyContainer">
                        <h2>Understanding your customers.</h2>
                        <p>Help me help you.</p>
                        <Link to="/about">Learn more &#10230;</Link>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
</Layout>
)