import React from 'react';
import { Page, Section } from 'react-page-layout';
import SingupForm from '../components/landing-page/SignupForm';
import exampleImage from '../assets/images/landing-pic-desktop.png';

export default function Landing() {
    return (
        <Page layout="public">
            <Section slot="main">
                <div className="landing-page">
                <span className="big-text mb-2">Sign up and manage <br /> your balance</span>
                <span className="small-text mb-3">Note down your expenditure and income, <br /> then check your balance everyday</span>

                <SingupForm />
                <img className="exmaple-image" src={exampleImage} alt="exampe-pic" />
                </div>
            </Section>
        </Page>
    )
}