import React from 'react';
import hawkerHunterImage from './public/Hunter01.jpg';

const specifications = [
    { spec: 'Top Speed', value: 'Mach 0.94 (735 mph, 1,185 km/h at 36,000 ft)' },
    { spec: 'Takeoff Weight', value: '24,600 lb (11,158 kg)' },
    // Add more specifications here
    // ...
    { spec: 'Specification 10', value: 'Value 10' },
];

function App() {
    return (
        <div>
            <h1>Hawker Hunter Specs</h1>
            <img src={hawkerHunterImage} alt="Hawker Hunter" />
            <table>
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {specifications.map((item, index) => (
                        <tr key={index}>
                            <td>{item.spec}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
