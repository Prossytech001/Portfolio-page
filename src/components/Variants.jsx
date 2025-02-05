export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 10 : direction === 'down' ? -10 : 0,
            x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring", 
                bounce: 0.25,
                duration: 1.2,
                delay: delay,
                ease : [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}