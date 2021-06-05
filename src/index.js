import './sass/main.scss';
class Timer {
  constructor({ selector, targetDate }) {
    this.time = this.getFieldsBySelector(selector);
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    const { days, hours, mins, secs } = this.getTimeComponents(time);
    this.updateTimeFields({ days, hours, mins, secs });
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const { days, hours, mins, secs } = this.getTimeComponents(time);
      this.updateTimeFields({ days, hours, mins, secs });}, 1000);
  }

  getFieldsBySelector(selector) {
    const refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };

    return refs;
  }

  updateTimeFields({ days, hours, mins, secs }) {
    this.time.days.textContent = days;
    this.time.hours.textContent = hours;
    this.time.mins.textContent = mins;
    this.time.secs.textContent = secs;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

new Timer({
  selector: '#timer-1',
  targetDate: new Date('Aug 31, 2021'),
});
