# Analog Clock with React

This is a simple analog clock built using React. It dynamically updates the time every second and displays the hour, minute, and second hands rotating according to the current time. The clock face also shows the numbers from 1 to 12 around the clock, simulating a real analog clock.

## Features
Real-time clock with hour, minute, and second hands.
Numbers (12, 1, 2, ..., 11) are displayed around the clock face.
Clock hands rotate smoothly every second.
Built with React using useState and useEffect hooks.
## Explanation
### Clock Component
The Clock component uses the useState and useEffect hooks:

    useState stores the current time.
    useEffect sets up a setInterval that updates the time every second.
    The clock hands (hour, minute, second) are rendered with the correct rotation based on the current time.
## Technologies Used

React.js
JavaScript (ES6)
CSS
## Future Enhancements
Add more styling to improve the look and feel.
Make the clock more responsive for different screen sizes.
Implement features like changing clock colors or adding a date display.

## License
This project is open-source and available under the MIT License.