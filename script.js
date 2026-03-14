// JavaScript code for slide navigation, keyboard controls, and dot indicators functionality

class SlideShow {
    constructor(slidesContainer) {
        this.slidesContainer = slidesContainer;
        this.slides = slidesContainer.children;
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.showSlide(this.currentSlide);
        this.createIndicators();
        this.initKeyboardControls();
    }

    showSlide(index) {
        // Hide all slides
        for (let slide of this.slides) {
            slide.style.display = 'none';
        }
        // Show the current slide
        this.slides[index].style.display = 'block';
        // Update indicators
        this.updateIndicators(index);
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    createIndicators() {
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.classList.add('indicators');

        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => this.showSlide(i));
            indicatorsContainer.appendChild(dot);
        }

        this.slidesContainer.parentElement.appendChild(indicatorsContainer);
        this.indicators = indicatorsContainer.children;
    }

    updateIndicators(index) {
        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].classList.remove('active');
        }
        this.indicators[index].classList.add('active');
    }

    initKeyboardControls() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.nextSlide();
            } else if (event.key === 'ArrowLeft') {
                this.previousSlide();
            }
        });
    }
}

// Usage example:
const slideshowContainer = document.querySelector('.slideshow');
const slideshow = new SlideShow(slideshowContainer);