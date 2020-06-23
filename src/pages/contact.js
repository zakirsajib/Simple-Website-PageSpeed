import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Form from '../components/contact'

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>

            <div className={"page-header"}>
                <h2>Contact</h2>
                <p>HiStaff is a service that boost the staff’s productivity by offering new ways<br />to increase employee motivation and happiness.</p>
            </div>

        <div className={"container"}>
            <div className={"content"}>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem.</p>

                <div className="contactForm">
                    <Form />
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
