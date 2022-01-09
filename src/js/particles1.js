window.onload = function() {
    console.log('init')
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        connectParticles: true,
        color: '#c7d0e2',
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 90,
                    color:  '#48F2E3',
                    connectParticles: false
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 80,
                    connectParticles: false
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 70,
                    connectParticles: false
                }
            }
        ]
    });
};
