import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navbar from './components/Navbar';

const propTypes = {};
const defaultProps = {};

const guests = [
    // Fam
    'Anna-Maria',
    'Nathalie',
    'Stefan L.',
    // Jusch
    'Sebi',
    'Kristina',
    'Nico 2x',
    'Franzi',
    'TK 16',
    'Chrisi',
    'Niki',
    'Matze',
    'Alex',
    'Ben',
    'Glanz Nik',
    'Alle aus der JUSCH was kommen wollen',
    // Waldviertler
    'Kanki',
    'Dranglito 19',
    'Knolli',
    'Stumpfi aka Snusgott',
    // Retzbacher
    'Niki F.',
    'Bastion',
    'David',
    'Chili Cheese Nuggets',
    'Sebi',
    'Dimi',
    'Alle Retzbacher was kommen wollen',
    // Others
    'Jan',
    'Martin',
    'Magda',
    'Lena',
];

const halfGuestsLength = Math.floor(guests.length / 2);
const firstGuestsCol = guests.slice(0, halfGuestsLength);
const secondGuestsCol = guests.slice(halfGuestsLength, guests.length);

const App = () => {
    return (
        <>
            <Navbar />
            <div data-spy='scroll' data-target='#navbar' data-offset='0' className='bg-dark'>
                <section id='home' className='d-flex justify-content-center' style={{ height: '60vh' }}>
                    <Row className='h-100 w-50'>
                        <Col style={{ marginTop: '25%' }}>
                            <h1 className='text-light'>Fabian Rosinger</h1>
                            <h1 className='text-light'>23 Bday Party</h1>
                        </Col>
                        <Col style={{ marginTop: '26%' }}>
                            <h4 className='text-light'>Wo: Jugendheim Schrattenthal, Schrattenthal 41</h4>
                            <h4 className='text-light'>Wann: PreParty: 18:30, Party: 21:00</h4>
                        </Col>
                    </Row>
                </section>
                <section id='music' className='bg-light bg-music d-flex justify-content-center'>
                    <Row className='h-100 w-50'>
                        <Col style={{ marginTop: '22.5%' }}>
                            <h1 className='text-dark text-center'>Musik</h1>
                            <Row className='mt-3'>
                                <Col>
                                    <h3 className='text-dark text-underline'>Drum and Bass</h3>
                                    <h6 className='text-dark'>Liquid</h6>
                                    <h6 className='text-dark'>Jump Up</h6>
                                    <h6 className='text-dark'>Neurofunk</h6>
                                    <h6 className='text-dark'>Belgischer Jump Up</h6>
                                    <h6 className='text-dark'>Jungle</h6>
                                    <h6 className='text-dark'>Rollers</h6>
                                    <div className='mt-3' />
                                    <h3 className='text-dark text-underline'>Others</h3>
                                    <h6 className='text-dark'>Happy Hardcore</h6>
                                    <h6 className='text-dark'>Hip Hop / Rap (kein Deutschrap Mashalla)</h6>
                                </Col>
                                <Col>
                                    <h3 className='text-dark text-underline text-end'>Dubstep</h3>
                                    <h6 className='text-dark text-end'>Riddim</h6>
                                    <h6 className='text-dark text-end'>Future Riddim</h6>
                                    <div className='mt-3' />
                                    <h3 className='text-dark text-underline text-end'>Techno</h3>
                                    <h6 className='text-dark text-end'>Minimal</h6>
                                    <h6 className='text-dark text-end'>Acid</h6>
                                    <h6 className='text-dark text-end'>OldSchool</h6>
                                    <div className='mt-3' />
                                    <h3 className='text-dark text-underline text-end'>Tekk</h3>
                                    <h6 className='text-dark text-end'>Hard- / RaggaTekk</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
                <section id='guests' className='d-flex justify-content-center pb-5'>
                    <Row className='h-100 w-50'>
                        <Col>
                            <h1 className='text-light text-center'>Gäste</h1>
                            <Row className='mt-3'>
                                <Col>
                                    {firstGuestsCol.map(m => (
                                        <h6 className='text-light' key={m}>
                                            {m}
                                        </h6>
                                    ))}
                                </Col>
                                <Col>
                                    {secondGuestsCol.map(m => (
                                        <h6 className='text-light text-end' key={m}>
                                            {m}
                                        </h6>
                                    ))}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    );
};

App.displayName = App.name;
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
