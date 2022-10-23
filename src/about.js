/*
Author: AutomatedFuture@github
*/

// About Us Page

// Imports a template for wordy, article-like pages

import React from 'react';

import InformationTemplate from './information_template.js';

function About() { 
    let text = (
            
            <p>
                Tongariro Cinemas Ltd (TCL) is a family-owned cinema company that started back in 1981. TCL operates over 3 cinema screens and over 350 seats. Bring your family and friends over for a night of the latest and greatest films around the World!
                <br /><br />
                Adipisicing pariatur amet minim anim quis incididunt est magna. Officia consequat dolor labore tempor. Do ea ad cupidatat veniam sit veniam veniam in esse. Est excepteur Lorem anim ex anim minim Lorem aliquip sint. Reprehenderit fugiat aliquip non consectetur reprehenderit commodo eu dolor est esse commodo dolore. Incididunt reprehenderit sunt duis reprehenderit anim mollit.
                <br /><br />
                Sunt nisi deserunt aute sint aliqua id nisi minim veniam minim. Anim cupidatat ut amet adipisicing ad enim amet. Lorem eu et esse anim veniam et Lorem labore dolor id deserunt. Elit irure anim ut do sunt proident labore consequat. Enim incididunt tempor amet aute voluptate reprehenderit occaecat occaecat.
                <br /><br />
                Duis id magna sit aliquip exercitation est fugiat deserunt. Do qui dolore Lorem cillum elit occaecat cupidatat occaecat veniam anim laborum ullamco ipsum. Fugiat exercitation labore sit excepteur sunt. Laborum incididunt nisi eu culpa in sit commodo eiusmod dolor ex. Laboris exercitation exercitation minim sit aute aute nisi non enim. Reprehenderit cillum nostrud proident qui incididunt consequat officia cillum ipsum pariatur sint duis duis. Non ipsum minim enim dolore consequat culpa duis enim laboris.
                <br /><br />
                Nisi nisi deserunt dolore labore nostrud minim mollit cupidatat labore officia elit. Sit incididunt aute aliqua fugiat ipsum id quis. Elit elit dolor minim cillum minim fugiat ullamco officia. Dolor aliquip exercitation sunt fugiat magna pariatur ad pariatur cupidatat magna. Magna fugiat ullamco eu exercitation non. Incididunt ad eu cillum ipsum incididunt incididunt aliqua culpa do consequat ea.
                <br /><br />
                Reprehenderit tempor amet ex deserunt. Tempor aliqua ullamco exercitation laborum Lorem quis. Nulla cillum nostrud qui sunt voluptate irure Lorem ea tempor nulla irure. Laboris esse adipisicing ut magna aliqua irure ipsum adipisicing exercitation nisi ullamco tempor dolore officia. Ex sint officia nisi eiusmod elit qui laborum in amet officia.
                <br /><br />
                Id officia commodo nulla laboris dolore. Ad sit sint aute id sint fugiat ullamco. Sit labore aute commodo sunt. Esse dolore aliquip elit occaecat excepteur esse ex officia irure est sunt pariatur.
                <br /><br />
                Laborum ad cupidatat duis ipsum elit. Cupidatat fugiat pariatur adipisicing in consectetur minim veniam quis irure. Duis exercitation ad pariatur ad excepteur amet reprehenderit. Et qui consequat qui ad cillum dolore ut exercitation duis.
                <br /><br />
                Lorem est minim consequat incididunt irure mollit laborum commodo consectetur officia et sunt Lorem consequat. Reprehenderit et laborum eu non enim magna adipisicing quis minim. Consequat labore veniam elit esse. Et amet amet qui exercitation irure tempor duis pariatur qui incididunt ullamco aliquip Lorem. Tempor deserunt exercitation cillum tempor deserunt culpa elit minim culpa adipisicing quis nisi. Eu veniam culpa culpa sit enim proident duis sint.
                <br /><br />
                Ipsum deserunt consequat tempor exercitation esse sint. Esse voluptate ea ad consequat incididunt adipisicing laborum excepteur eu occaecat reprehenderit quis aute. Fugiat id excepteur nulla cillum occaecat laboris et amet pariatur consectetur esse.
            </p>
        )

        return (
            <InformationTemplate title="About Us" text={text} />
        )
    }

export default About;