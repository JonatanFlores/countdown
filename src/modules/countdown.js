export default class Countdown {
  constructor(...args) {
    // Define option defaults
    const defaults = {
      stopDate: "",
      classTarget: "countdown",
      onComplete() {}
    };

    // Create options by extending defaults with the passed in arguments
    if (args[0] && typeof args[0] === "object") {
      this.options = this.extendDefaults(defaults, args[0]);
    }

    // Element containing the countdown presentation
    this.countdown = document.querySelector(this.options.target);

    // Future date when the countdown should stop (timestamp)
    this.stopDate = new Date(this.options.stopDate);

    // Future date when the countdown should stop (milliseconds)
    this.stopTime = this.stopDate.getTime();

    // Update every second
    this.timeInterval = setInterval(this.runClock.bind(this), 1000);
  }

  // Utility method to extend defaults with user options
  extendDefaults(source_, properties) {
    const source = source_;

    Object.keys(properties).forEach(property => {
      source[property] = properties[property];
    });

    return source;
  }

  // Run the clock
  runClock() {
    // Get current time in (milliseconds)
    const now = new Date().getTime();

    // Distance from now and the stop countdown time (milliseconds)
    const distance = this.stopTime - now;

    // Set a display to hold all the values (easy to concat)
    const display = [];

    // Calculate time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    // Populate the display
    display.push(`0${days}`.slice(-2));
    display.push(`0${hours}`.slice(-2));
    display.push(`0${mins}`.slice(-2));
    display.push(`0${secs}`.slice(-2));

    // Check if the stop date was reached
    if (distance <= 0) {
      // Stop countdown
      clearInterval(this.timeInterval);

      // Callback executed after finished
      this.options.onComplete();
    } else {
      // Display the result into the html
      this.countdown.innerHTML = `
          <span class="countdown-display">
              ${display.join(":")}
          </span>
        `;
    }
  }
}
