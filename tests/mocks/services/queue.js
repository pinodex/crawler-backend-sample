class MockBull {
  constructor() {
    this.processFn = null;
    this.jobs = [];
  }

  process(callback) {
    this.processFn = callback;
  }

  add(data) {
    this.jobs.push({ data });
  }
}

exports.create = () => new MockBull();
