/* eslint prefer-arrow-callback: 0 */

const { Flow } = require('../utils/NodeGit');

describe('Flow', function() {
  it('should contain all of the static methods', function() {
    expect(Flow.startFeature).toEqual(jasmine.any(Function));
    expect(Flow.startFeature).toEqual(jasmine.any(Function));
    expect(Flow.startHotfix).toEqual(jasmine.any(Function));
    expect(Flow.startHotfix).toEqual(jasmine.any(Function));
    expect(Flow.startRelease).toEqual(jasmine.any(Function));
    expect(Flow.startRelease).toEqual(jasmine.any(Function));
  });
});
