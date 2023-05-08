
function truckOrder() {

    document.querySelectorAll('.truck-order').forEach(el => {

        let confirmButton = document.querySelector('.btn-success');

        confirmButton.addEventListener('click', e => {

            e.preventDefault();

            let box = el.querySelector('.box'),
                truck = el.querySelector('.truck');

            if (!el.classList.contains('done')) {

                if (!el.classList.contains('animation')) {

                    el.classList.add('animation');

                    gsap.to(el, {
                        '--box-s': 1,
                        '--box-o': 1,
                        duration: .3,
                        delay: .5
                    });

                    gsap.to(box, {
                        x: 0,
                        duration: .4,
                        delay: .7
                    });

                    gsap.to(el, {
                        '--hx': -5,
                        '--bx': 50,
                        duration: .18,
                        delay: .92
                    });

                    gsap.to(box, {
                        y: 0,
                        duration: .1,
                        delay: 1.15
                    });

                    gsap.set(el, {
                        '--truck-y': 0,
                        '--truck-y-n': -26
                    });

                    gsap.to(el, {
                        '--truck-y': 1,
                        '--truck-y-n': -25,
                        duration: .2,
                        delay: 1.25,
                        onComplete() {
                            gsap.timeline({
                                onComplete() {
                                    el.classList.add('done');
                                }
                            }).to(truck, {
                                x: 0,
                                duration: .4
                            }).to(truck, {
                                x: 40,
                                duration: 1
                            }).to(truck, {
                                x: 20,
                                duration: .6
                            }).to(truck, {
                                x: 96,
                                duration: .4
                            });
                            gsap.to(el, {
                                '--progress': 1,
                                duration: 2.4,
                                ease: "power2.in"
                            });
                        }
                    });

                }

            } else {
                el.classList.remove('animation', 'done');
                gsap.set(truck, {
                    x: 4
                });
                gsap.set(el, {
                    '--progress': 0,
                    '--hx': 0,
                    '--bx': 0,
                    '--box-s': .5,
                    '--box-o': 0,
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });
                gsap.set(box, {
                    x: -24,
                    y: -6
                });
            }

        });
    });
}